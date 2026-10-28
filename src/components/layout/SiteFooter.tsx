import Link from "next/link";
import { navLinks } from "@/data/nav";
import { siteFooterStyles as s } from "./SiteFooter.styles";

export function SiteFooter() {
  return (
    <footer className={s.root}>
      <div className={s.inner}>
        <p className={s.thanks}>Thanks for stopping by the desk.</p>
        <nav className={s.nav}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={s.link}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
