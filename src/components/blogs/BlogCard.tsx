import { Badge } from "@/components/ui/Badge";
import type { BlogItem } from "@/types";

type BlogCardProps = {
  blog: BlogItem;
};

export function BlogCard({ blog }: BlogCardProps) {
  return (
    <a
      href={blog.href}
      target={blog.href.startsWith("http") ? "_blank" : undefined}
      rel={blog.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="block rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 transition-colors hover:border-[var(--accent-soft)]"
    >
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="accent">{blog.platform}</Badge>
        <span className="text-xs text-[var(--muted)]">{blog.date}</span>
      </div>
      <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl">
        {blog.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
        {blog.excerpt}
      </p>
      <span className="mt-4 inline-block text-sm text-[var(--link)]">
        Read on {blog.platform} →
      </span>
    </a>
  );
}
