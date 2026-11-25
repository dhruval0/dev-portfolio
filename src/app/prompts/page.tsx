import { PageHeader } from "@/components/layout/PageHeader";
import { SearchBar } from "@/components/layout/SearchBar";
import { SubpageNav } from "@/components/layout/SubpageNav";
import { PromptCard } from "@/components/prompts/PromptCard";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerItem } from "@/components/ui/Stagger";
import { prompts } from "@/data/prompts";
import { promptsPageStyles as s } from "./page.styles";

export default function PromptsPage() {
  return (
    <div className={s.root}>
      <Reveal delay={20}>
        <SubpageNav />
      </Reveal>
      <Reveal delay={70}>
        <PageHeader
          title="Prompts"
          description="Desk prompts from The Vault — learning, system design drills, debugging, code review, and behavioral STAR."
        />
      </Reveal>
      <Reveal delay={120}>
        <SearchBar placeholder="Search prompts..." />
      </Reveal>

      <div className={s.grid}>
        {prompts.map((prompt, index) => (
          <StaggerItem
            key={prompt.id}
            index={index}
            baseDelay={140}
            step={50}
            className="h-full"
          >
            <PromptCard prompt={prompt} />
          </StaggerItem>
        ))}
      </div>
    </div>
  );
}
