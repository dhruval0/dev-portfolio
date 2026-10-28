import { BackToDesk } from "@/components/layout/BackToDesk";
import { PageHeader } from "@/components/layout/PageHeader";
import { SearchBar } from "@/components/layout/SearchBar";
import { RitualCard } from "@/components/ritual/RitualCard";
import { ritualEntries } from "@/data/ritual";

export default function RitualPage() {
  return (
    <div className="flex flex-col gap-8">
      <BackToDesk />
      <PageHeader
        title="The Ritual"
        description="Weekly notes — what I'm building, thinking, and learning in public. Tap an entry to unfold it."
      />
      <SearchBar placeholder="Search ritual notes..." />

      <div className="flex flex-col gap-3">
        {ritualEntries.map((entry) => (
          <RitualCard key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
}
