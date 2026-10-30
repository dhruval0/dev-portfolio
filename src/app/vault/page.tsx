"use client";

import { FilterPills } from "@/components/layout/FilterPills";
import { PageHeader } from "@/components/layout/PageHeader";
import { SearchBar } from "@/components/layout/SearchBar";
import { SubpageNav } from "@/components/layout/SubpageNav";
import { VaultCard } from "@/components/vault/VaultCard";
import { vaultFilters } from "@/data/vault";
import { vaultPageStyles as s } from "./page.styles";
import { useVaultPage } from "./useVaultPage";

export default function VaultPage() {
  const { filter, setFilter, shown, remaining, hasMore, loadMore } =
    useVaultPage();

  return (
    <div className={s.root}>
      <SubpageNav />
      <PageHeader
        title="The Vault"
        description="Engineering notes split into short subtopics. Open a card — code cells switch across Python, JavaScript, Go, and Java."
      />
      <SearchBar />
      <FilterPills
        filters={vaultFilters}
        activeId={filter}
        onChange={setFilter}
      />

      {shown.length === 0 ? (
        <p className={s.empty}>nothing filed under that label yet...</p>
      ) : (
        <>
          <div className={s.grid}>
            {shown.map((item) => (
              <VaultCard key={item.id} item={item} />
            ))}
          </div>
          {hasMore ? (
            <div className={s.moreWrap}>
              <button type="button" className={s.more} onClick={loadMore}>
                load more ({remaining} more)
              </button>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
