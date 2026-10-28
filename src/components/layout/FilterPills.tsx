"use client";

import { cn } from "@/lib/cn";
import { filterPillsStyles as s } from "./FilterPills.styles";

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
    <div className={s.root}>
      <span className={s.label}>{label}</span>
      <div className={s.list}>
        {filters.map((filter) => {
          const active = filter.id === activeId;
          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => onChange(filter.id)}
              className={cn(s.pill, active ? s.active : s.inactive)}
            >
              {filter.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
