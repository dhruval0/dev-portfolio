import Link from "next/link";
import { navLinks } from "@/data/nav";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="font-[family-name:var(--font-script)] text-lg text-[var(--muted)]">
          Thanks for stopping by the desk.
        </p>
        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-[var(--foreground)]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[var(--accent)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
