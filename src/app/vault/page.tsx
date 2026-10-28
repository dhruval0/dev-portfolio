"use client";

import { BackToDesk } from "@/components/layout/BackToDesk";
import { FilterPills } from "@/components/layout/FilterPills";
import { PageHeader } from "@/components/layout/PageHeader";
import { SearchBar } from "@/components/layout/SearchBar";
import { VaultCard } from "@/components/vault/VaultCard";
import { vaultFilters } from "@/data/vault";
import { vaultPageStyles as s } from "./page.styles";
import { useVaultPage } from "./useVaultPage";

export default function VaultPage() {
  const { filter, setFilter, filtered } = useVaultPage();

  return (
    <div className={s.root}>
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
        <p className={s.empty}>nothing filed under that label yet...</p>
      ) : (
        <div className={s.grid}>
          {filtered.map((item) => (
            <VaultCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
