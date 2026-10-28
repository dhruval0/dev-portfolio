import type { VaultItem } from "@/types";
import { vaultCardStyles as s } from "./VaultCard.styles";

type VaultCardProps = {
  item: VaultItem;
};

export function VaultCard({ item }: VaultCardProps) {
  return (
    <article className={s.article}>
      <p className={s.type}>NOTE .MD</p>
      <h3 className={s.title}>{item.title}</h3>
      <p className={s.description}>{item.description}</p>
      <div className={s.footer}>
        <button type="button" className={s.open}>
          Open the note →
        </button>
        <span className={s.opened}>opened {item.openedCount}x</span>
      </div>
    </article>
  );
}
