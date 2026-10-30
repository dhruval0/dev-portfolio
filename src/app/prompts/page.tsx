import { PageHeader } from "@/components/layout/PageHeader";
import { SearchBar } from "@/components/layout/SearchBar";
import { SubpageNav } from "@/components/layout/SubpageNav";
import { PromptCard } from "@/components/prompts/PromptCard";
import { prompts } from "@/data/prompts";
import { promptsPageStyles as s } from "./page.styles";

export default function PromptsPage() {
  return (
    <div className={s.root}>
      <SubpageNav />
      <PageHeader
        title="Prompts"
        description="Desk prompts from The Vault — learning, system design drills, debugging, code review, and behavioral STAR."
      />
      <SearchBar placeholder="Search prompts..." />

      <div className={s.grid}>
        {prompts.map((prompt) => (
          <PromptCard key={prompt.id} prompt={prompt} />
        ))}
      </div>
    </div>
  );
}
