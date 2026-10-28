import type { SkillGroup } from "@/types";
import { getSkillIcon } from "@/data/skillIcons";
import { isNearBlack } from "@/lib/color";
import { cn } from "@/lib/cn";
import { skillCardStyles as s } from "./SkillCard.styles";

type SkillCardProps = {
  group: SkillGroup;
};

export function SkillCard({ group }: SkillCardProps) {
  return (
    <div className={s.root}>
      <h3 className={s.label}>{group.label}</h3>
      <ul className={s.list}>
        {group.items.map((skill) => {
          const { Icon, color } = getSkillIcon(skill);
          const needsPad = isNearBlack(color);

          return (
            <li key={skill}>
              <span className={s.pill}>
                <span className={cn(s.iconWrap, needsPad && s.iconWrapPad)}>
                  <Icon
                    aria-hidden
                    className={s.icon}
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
