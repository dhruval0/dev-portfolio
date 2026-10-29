import Link from "next/link";
import type { DrawerItem } from "@/types";
import { drawerCardStyles as s } from "./DrawerCard.styles";

type DrawerCardProps = {
  drawer: DrawerItem;
};

export function DrawerCard({ drawer }: DrawerCardProps) {
  return (
    <Link href={drawer.href} className={s.link}>
      <span aria-hidden className={s.tab}>
        <span className={s.tabLabel}>{drawer.title}</span>
      </span>

      <div className={s.body}>
        <span aria-hidden className={s.paper} />
        <h3 className={s.title}>{drawer.title}</h3>
        <p className={s.description}>{drawer.description}</p>
        <span className={s.action}>
          Open the drawer{" "}
          <span className={s.arrow} aria-hidden>
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
