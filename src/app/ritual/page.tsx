import { PageHeader } from "@/components/layout/PageHeader";
import { SearchBar } from "@/components/layout/SearchBar";
import { SubpageNav } from "@/components/layout/SubpageNav";
import { RitualCard } from "@/components/ritual/RitualCard";
import { ritualEntries } from "@/data/ritual";
import { ritualPageStyles as s } from "./page.styles";

export default function RitualPage() {
  return (
    <div className={s.root}>
      <SubpageNav />
      <PageHeader
        title="The Ritual"
        description="Weekly notes — what I'm building, thinking, and learning in public. Tap an entry to unfold it."
      />
      <SearchBar placeholder="Search ritual notes..." />

      <div className={s.list}>
        {ritualEntries.map((entry) => (
          <RitualCard key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
}
