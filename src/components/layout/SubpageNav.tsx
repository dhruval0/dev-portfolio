"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/nav";
import { cn } from "@/lib/cn";
import { subpageNavStyles as s } from "./SubpageNav.styles";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * Only for pages away from the desk.
 * Desk itself uses drawers — no top nav clutter there.
 */
export function SubpageNav() {
  const pathname = usePathname();

  const wanderLinks = navLinks.filter((link) => link.href !== "/");

  return (
    <div className={s.root}>
      <div className={s.top}>
        <Link href="/" className={s.back}>
          <span className={s.backLabel}>← back to the desk</span>
        </Link>

        <nav className={s.trail} aria-label="Wander the desk">
          <span className={s.trailLead}>also ·</span>
          {wanderLinks.map((link, index) => {
            const active = isActive(pathname, link.href);

            return (
              <span key={link.href} className="inline-flex items-center gap-2">
                {index > 0 ? (
                  <span className={s.dot} aria-hidden>
                    ·
                  </span>
                ) : null}
                <Link
                  href={link.href}
                  title={link.tip}
                  aria-current={active ? "page" : undefined}
                  className={cn(s.link, active && s.linkActive)}
                >
                  {link.label.toLowerCase()}
                </Link>
              </span>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
