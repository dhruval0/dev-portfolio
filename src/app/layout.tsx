import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Source_Sans_3,
  Caveat,
  Geist_Mono,
} from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { NoteModalProvider } from "@/components/note/NoteModalProvider";
import { SearchProvider } from "@/components/search/SearchProvider";
import { PageTransition } from "@/components/ui/PageTransition";
import { cn } from "@/lib/cn";
import { layoutStyles as s } from "./layout.styles";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
});

const script = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dhruval · The Desk",
    template: "%s · Dhruval",
  },
  description:
    "Architect · Builder · Coder — an open notebook for systems, products, DSA, and shipping in public.",
  applicationName: "Dhruval · The Desk",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        display.variable,
        body.variable,
        script.variable,
        geistMono.variable,
        s.html,
      )}
    >
      <body className={s.body}>
        <NoteModalProvider>
          <SearchProvider>
            <ThemeToggle />
            <div className={s.shell}>
              <div className={s.main}>
                <PageTransition>{children}</PageTransition>
              </div>
            </div>
            <SiteFooter />
          </SearchProvider>
        </NoteModalProvider>
      </body>
    </html>
  );
}
