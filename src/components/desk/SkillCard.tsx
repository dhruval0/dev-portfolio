import type { SkillGroup } from "@/types";
import { getSkillIcon } from "@/data/skillIcons";
import { isNearBlack } from "@/lib/color";
import { cn } from "@/lib/cn";
import { skillCardStyles as s } from "./SkillCard.styles";

type SkillCardProps = {
  group: SkillGroup;
};

const MARK: Record<string, string> = {
  expert: "01",
  advanced: "02",
  proficient: "03",
  "ai-llm": "AI",
};

export function SkillCard({ group }: SkillCardProps) {
  const expert = group.id === "expert";

  return (
    <article className={s.shelf}>
      <header className={s.spine}>
        <span className={s.mark} aria-hidden>
          {MARK[group.id] ?? "·"}
        </span>
        <div>
          <h3 className={s.label}>{group.label}</h3>
          <p className={s.meta}>
            {group.items.length} tool{group.items.length === 1 ? "" : "s"}
          </p>
        </div>
        <span className={s.rail} aria-hidden />
      </header>

      <div className={s.board}>
        <ul className={s.tools}>
          {group.items.map((skill) => {
            const { Icon, color } = getSkillIcon(skill.name);
            const needsPad = isNearBlack(color);

            return (
              <li key={skill.name}>
                <a
                  href={skill.docsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.tool}
                  title={`${skill.name} docs`}
                >
                  <span className={cn(s.medal, expert && s.medalExpert)}>
                    <span className={cn(s.iconWrap, needsPad && s.iconWrapPad)}>
                      <Icon
                        aria-hidden
                        className={cn(s.icon, expert && s.iconExpert)}
                        style={{ color }}
                      />
                    </span>
                  </span>
                  <span className={s.name}>{skill.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}
