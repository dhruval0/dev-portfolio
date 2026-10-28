"use client";

import { useMemo, useState } from "react";
import { BackToDesk } from "@/components/layout/BackToDesk";
import { FilterPills } from "@/components/layout/FilterPills";
import { PageHeader } from "@/components/layout/PageHeader";
import { SearchBar } from "@/components/layout/SearchBar";
import { VaultCard } from "@/components/vault/VaultCard";
import { vaultFilters, vaultItems } from "@/data/vault";

export default function VaultPage() {
  const [filter, setFilter] = useState("everything");

  const filtered = useMemo(() => {
    return vaultItems.filter(
      (item) => filter === "everything" || item.category === filter,
    );
  }, [filter]);

  return (
    <div className="flex flex-col gap-8">
      <BackToDesk />
      <PageHeader
        title="The Vault"
        description="Learning notes — DSA, system design, behavioral prep, and lessons from experience. Cards open right here on the desk."
      />
      <SearchBar />
      <FilterPills
        filters={vaultFilters}
        activeId={filter}
        onChange={setFilter}
      />

      {filtered.length === 0 ? (
        <p className="py-16 text-center font-[family-name:var(--font-script)] text-xl text-[var(--muted)]">
          nothing filed under that label yet...
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <VaultCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
