import { cn } from "@/lib/cn";
import { badgeStyles } from "./Badge.styles";

type BadgeProps = {
  children: React.ReactNode;
  tone?: keyof typeof badgeStyles.tones;
};

export function Badge({ children, tone = "default" }: BadgeProps) {
  return (
    <span className={cn(badgeStyles.root, badgeStyles.tones[tone])}>
      {children}
    </span>
  );
}
