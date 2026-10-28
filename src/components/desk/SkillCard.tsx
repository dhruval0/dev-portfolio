import type { SkillGroup } from "@/types";
import { getSkillIcon } from "@/data/skillIcons";

type SkillCardProps = {
  group: SkillGroup;
};

function isNearBlack(hex: string) {
  const raw = hex.replace("#", "");
  if (raw.length !== 6) return false;
  const r = parseInt(raw.slice(0, 2), 16);
  const g = parseInt(raw.slice(2, 4), 16);
  const b = parseInt(raw.slice(4, 6), 16);
  // perceived brightness — dark logos need a light pad on our desk
  return (r * 299 + g * 587 + b * 114) / 1000 < 40;
}

/** One proficiency row: label + pill badges with brand-colored logos */
export function SkillCard({ group }: SkillCardProps) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--link)]">
        {group.label}
      </h3>
      <ul className="flex flex-wrap gap-2">
        {group.items.map((skill) => {
          const { Icon, color } = getSkillIcon(skill);
          const needsPad = isNearBlack(color);

          return (
            <li key={skill}>
              <span className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--card)] px-2.5 py-1.5 text-sm text-[var(--foreground)] shadow-sm">
                <span
                  className={
                    needsPad
                      ? "inline-flex rounded-sm bg-white p-0.5"
                      : "inline-flex"
                  }
                >
                  <Icon
                    aria-hidden
                    className="h-3.5 w-3.5 shrink-0"
                    style={{ color }}
                    title={skill}
                  />
                </span>
                {skill}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
