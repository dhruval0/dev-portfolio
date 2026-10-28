import Link from "next/link";
import type { DrawerItem } from "@/types";

type DrawerCardProps = {
  drawer: DrawerItem;
};

export function DrawerCard({ drawer }: DrawerCardProps) {
  return (
    <Link
      href={drawer.href}
      className="group flex min-h-[160px] flex-col rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 shadow-md transition-transform hover:-translate-y-0.5"
    >
      <span
        aria-hidden
        className="mb-3 h-2 w-14 rounded-t-sm bg-[var(--elevated)]"
      />
      <h3 className="font-[family-name:var(--font-display)] text-xl">
        {drawer.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
        {drawer.description}
      </p>
      <span className="mt-4 text-sm text-[var(--link)] group-hover:underline">
        Open the drawer →
      </span>
    </Link>
  );
}
