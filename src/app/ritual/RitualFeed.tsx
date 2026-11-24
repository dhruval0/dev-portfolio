import { TechUpdateFeed } from "@/components/ritual/TechUpdateFeed";
import { fetchTechUpdates } from "@/lib/fetchTechUpdates";

export async function RitualFeed() {
  const updates = await fetchTechUpdates();
  return <TechUpdateFeed updates={updates} />;
}
