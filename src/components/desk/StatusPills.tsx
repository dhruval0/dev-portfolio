import type { StatusItem } from "@/types";
import { statusPillsStyles as s } from "./StatusPills.styles";

type StatusPillsProps = {
  items: StatusItem[];
};

export function StatusPills({ items }: StatusPillsProps) {
  return (
    <ul className={s.list}>
      {items.map((item) => (
        <li key={item.id} className={s.item}>
          <span className={s.dot} aria-hidden />
          {item.label}
        </li>
      ))}
    </ul>
  );
}
