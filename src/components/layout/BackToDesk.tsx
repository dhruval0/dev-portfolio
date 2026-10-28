import Link from "next/link";

export function BackToDesk() {
  return (
    <Link
      href="/"
      className="inline-flex items-center rounded-full border border-[var(--border)] px-3 py-1.5 text-sm text-[var(--link)] transition-colors hover:bg-[var(--surface)]"
    >
      <span className="font-[family-name:var(--font-script)]">
        ← back to the desk
      </span>
    </Link>
  );
}
