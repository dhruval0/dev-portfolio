import { BackToDesk } from "@/components/layout/BackToDesk";
import { PageHeader } from "@/components/layout/PageHeader";
import { SearchBar } from "@/components/layout/SearchBar";
import { PromptCard } from "@/components/prompts/PromptCard";
import { prompts } from "@/data/prompts";

export default function PromptsPage() {
  return (
    <div className="flex flex-col gap-8">
      <BackToDesk />
      <PageHeader
        title="Prompts"
        description="Copy-paste AI prompts organized by how I actually use them while learning and building."
      />
      <SearchBar placeholder="Search prompts..." />

      <div className="grid gap-4 lg:grid-cols-2">
        {prompts.map((prompt) => (
          <PromptCard key={prompt.id} prompt={prompt} />
        ))}
      </div>
    </div>
  );
}
