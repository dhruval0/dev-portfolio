"use client";

type Filter = { id: string; label: string };

type FilterPillsProps = {
  filters: readonly Filter[] | Filter[];
  activeId: string;
  onChange: (id: string) => void;
  label?: string;
};

export function FilterPills({
  filters,
  activeId,
  onChange,
  label = "sort by —",
}: FilterPillsProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
      <span className="shrink-0 font-[family-name:var(--font-script)] text-[var(--muted)]">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => {
          const active = filter.id === activeId;
          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => onChange(filter.id)}
              className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                active
                  ? "border-transparent bg-[var(--success)] text-[var(--desk-bg)]"
                  : "border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
