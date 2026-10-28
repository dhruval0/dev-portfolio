import type { StatusItem } from "@/types";

type StatusPillsProps = {
  items: StatusItem[];
};

export function StatusPills({ items }: StatusPillsProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item.id}
          className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs text-[var(--muted)]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden />
          {item.label}
        </li>
      ))}
    </ul>
  );
}
