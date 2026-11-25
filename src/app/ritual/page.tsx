import { Suspense } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SubpageNav } from "@/components/layout/SubpageNav";
import { Reveal } from "@/components/ui/Reveal";
import { RitualFeed } from "./RitualFeed";
import { ritualPageStyles as s } from "./page.styles";

function RitualFeedFallback() {
  return (
    <p className="rounded-lg border border-dashed border-[var(--border)] px-4 py-10 text-center font-[family-name:var(--font-script)] text-lg text-[var(--accent)]">
      loading stack releases…
    </p>
  );
}

export default function RitualPage() {
  return (
    <div className={s.root}>
      <Reveal delay={20}>
        <SubpageNav />
      </Reveal>
      <Reveal delay={70}>
        <PageHeader
          title="The Ritual"
          description="Live releases for Python, LLM, FastAPI, Flask, Django, Go, Elasticsearch, NoSQL, SQL, Grafana, and Docker. Unfold a card · load more for the rest."
        />
      </Reveal>
      <Reveal delay={140}>
        <Suspense fallback={<RitualFeedFallback />}>
          <RitualFeed />
        </Suspense>
      </Reveal>
    </div>
  );
}
