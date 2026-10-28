import type { VaultItem } from "@/types";

type VaultCardProps = {
  item: VaultItem;
};

export function VaultCard({ item }: VaultCardProps) {
  return (
    <article className="flex flex-col rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors hover:border-[var(--accent-soft)]">
      <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
        NOTE .MD
      </p>
      <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl">
        {item.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
        {item.description}
      </p>
      <div className="mt-4 flex items-end justify-between gap-3">
        <button
          type="button"
          className="text-sm text-[var(--foreground)] hover:text-[var(--link)]"
        >
          Open the note →
        </button>
        <span className="font-[family-name:var(--font-script)] text-sm text-[var(--accent)]">
          opened {item.openedCount}x
        </span>
      </div>
    </article>
  );
}
