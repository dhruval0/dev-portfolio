"use client";

import { FilterPills } from "@/components/layout/FilterPills";
import { PageHeader } from "@/components/layout/PageHeader";
import { SearchBar } from "@/components/layout/SearchBar";
import { SubpageNav } from "@/components/layout/SubpageNav";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerItem } from "@/components/ui/Stagger";
import { VaultCard } from "@/components/vault/VaultCard";
import { vaultFilters } from "@/data/vault";
import { vaultPageStyles as s } from "./page.styles";
import { useVaultPage } from "./useVaultPage";

export default function VaultPage() {
  const { filter, setFilter, shown, remaining, hasMore, loadMore } =
    useVaultPage();

  return (
    <div className={s.root}>
      <Reveal delay={20}>
        <SubpageNav />
      </Reveal>
      <Reveal delay={70}>
        <PageHeader
          title="The Vault"
          description="Engineering notes split into short subtopics. Open a card — code cells switch across Python, JavaScript, Go, and Java."
        />
      </Reveal>
      <Reveal delay={120}>
        <SearchBar />
      </Reveal>
      <Reveal delay={160}>
        <FilterPills
          filters={vaultFilters}
          activeId={filter}
          onChange={setFilter}
        />
      </Reveal>

      {shown.length === 0 ? (
        <Reveal delay={200}>
          <p className={s.empty}>nothing filed under that label yet...</p>
        </Reveal>
      ) : (
        <>
          <div key={filter} className={s.grid}>
            {shown.map((item, index) => (
              <StaggerItem
                key={item.id}
                index={index}
                baseDelay={40}
                step={45}
                className="h-full"
              >
                <VaultCard item={item} />
              </StaggerItem>
            ))}
          </div>
          {hasMore ? (
            <Reveal delay={120}>
              <div className={s.moreWrap}>
                <button type="button" className={s.more} onClick={loadMore}>
                  load more ({remaining} more)
                </button>
              </div>
            </Reveal>
          ) : null}
        </>
      )}
    </div>
  );
}
