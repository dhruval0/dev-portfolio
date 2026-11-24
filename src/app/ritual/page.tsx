import { Suspense } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SubpageNav } from "@/components/layout/SubpageNav";
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
      <SubpageNav />
      <PageHeader
        title="The Ritual"
        description="Live releases for Python, LLM, FastAPI, Flask, Django, Go, Elasticsearch, NoSQL, SQL, Grafana, and Docker. Unfold a card · load more for the rest."
      />
      <Suspense fallback={<RitualFeedFallback />}>
        <RitualFeed />
      </Suspense>
    </div>
  );
}
