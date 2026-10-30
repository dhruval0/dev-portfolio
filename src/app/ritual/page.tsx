import { PageHeader } from "@/components/layout/PageHeader";
import { SubpageNav } from "@/components/layout/SubpageNav";
import { TechUpdateFeed } from "@/components/ritual/TechUpdateFeed";
import { fetchTechUpdates } from "@/lib/fetchTechUpdates";
import { ritualPageStyles as s } from "./page.styles";

export default async function RitualPage() {
  const updates = await fetchTechUpdates();

  return (
    <div className={s.root}>
      <SubpageNav />
      <PageHeader
        title="The Ritual"
        description="Live releases for Python, LLM, FastAPI, Flask, Django, Go, Elasticsearch, NoSQL, SQL, Grafana, and Docker. Unfold a card · load more for the rest."
      />
      <TechUpdateFeed updates={updates} />
    </div>
  );
}
