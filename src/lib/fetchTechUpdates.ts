import { techStackSources } from "@/data/techStack";
import type { TechUpdate } from "@/types";

type GithubRelease = {
  id: number;
  tag_name: string;
  name: string | null;
  body: string | null;
  html_url: string;
  published_at: string | null;
  prerelease: boolean;
  draft: boolean;
};

type GithubTag = {
  name: string;
  commit: { sha: string };
};

const githubHeaders = {
  Accept: "application/vnd.github+json",
  "User-Agent": "dev-portfolio-ritual",
} as const;

function stripMarkdown(input: string): string {
  return input
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/^#+\s+/gm, "")
    .replace(/[*_~>#-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function summarize(body: string | null, fallback: string): string {
  if (!body) return fallback;
  const plain = stripMarkdown(body);
  if (!plain) return fallback;
  return plain.length > 280 ? `${plain.slice(0, 277).trim()}…` : plain;
}

function detailText(body: string | null): string {
  if (!body) return "No release notes published for this version yet.";
  const plain = stripMarkdown(body);
  if (!plain) return "No release notes published for this version yet.";
  return plain.length > 1200 ? `${plain.slice(0, 1197).trim()}…` : plain;
}

async function fetchRepoTags(
  repo: string,
  stack: string,
  stackId: string,
): Promise<TechUpdate[]> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${repo}/tags?per_page=4`,
      {
        headers: githubHeaders,
        next: { revalidate: 3600 },
      },
    );
    if (!res.ok) return [];

    const tags = (await res.json()) as GithubTag[];
    return tags.map((tag, index) => {
      const version = tag.name;
      const fallback = `${stack} ${version} tagged.`;
      return {
        id: `${stackId}-tag-${tag.commit.sha.slice(0, 8)}-${index}`,
        stack,
        stackId,
        version,
        title: `${stack} ${version}`,
        summary: fallback,
        detail: `New tag published for ${stack}. Open the repo for changelog details.`,
        publishedAt: new Date(Date.now() - index * 86_400_000).toISOString(),
        href: `https://github.com/${repo}/releases/tag/${encodeURIComponent(version)}`,
        isPrerelease: /alpha|beta|rc|canary|dev/i.test(version),
      } satisfies TechUpdate;
    });
  } catch {
    return [];
  }
}

async function fetchRepoReleases(
  repo: string,
  stack: string,
  stackId: string,
): Promise<TechUpdate[]> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${repo}/releases?per_page=4`,
      {
        headers: githubHeaders,
        next: { revalidate: 3600 },
      },
    );

    if (!res.ok) return [];

    const releases = (await res.json()) as GithubRelease[];
    const stable = releases
      .filter((release) => !release.draft && !release.prerelease)
      .map((release) => {
        const title = release.name?.trim() || release.tag_name;
        const fallback = `${stack} ${release.tag_name} is out.`;
        return {
          id: `${stackId}-${release.id}`,
          stack,
          stackId,
          version: release.tag_name,
          title,
          summary: summarize(release.body, fallback),
          detail: detailText(release.body),
          publishedAt: release.published_at ?? new Date().toISOString(),
          href: release.html_url,
          isPrerelease: release.prerelease,
        } satisfies TechUpdate;
      });

    if (stable.length > 0) return stable;
    return fetchRepoTags(repo, stack, stackId);
  } catch {
    return fetchRepoTags(repo, stack, stackId);
  }
}

const fallbackUpdates: TechUpdate[] = [
  {
    id: "fallback-stack",
    stack: "Python",
    stackId: "python",
    version: "latest",
    title: "Stack releases unavailable",
    summary:
      "Couldn’t reach GitHub just now. Retry shortly for Python, FastAPI, Docker, and the rest of the desk stack.",
    detail:
      "Ritual pulls live notes for Python, LangChain, FastAPI, Flask, Django, Go, Elasticsearch, MongoDB, PostgreSQL, Grafana, and Docker-related repos.",
    publishedAt: new Date().toISOString(),
    href: "https://github.com/python/cpython/releases",
    isPrerelease: false,
  },
];

/** Live releases for the desk stack, newest first. */
export async function fetchTechUpdates(): Promise<TechUpdate[]> {
  const batches = await Promise.all(
    techStackSources.map((source) =>
      fetchRepoReleases(source.repo, source.name, source.id),
    ),
  );

  const updates = batches
    .flat()
    .filter((update) => !update.isPrerelease)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );

  return updates.length > 0 ? updates : fallbackUpdates;
}
