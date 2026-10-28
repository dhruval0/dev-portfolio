import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Source_Sans_3,
  Caveat,
  Geist_Mono,
} from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { SearchProvider } from "@/components/search/SearchProvider";
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
  title: "Dhruval — Learning Desk",
  description:
    "A learning desk for JavaScript, TypeScript, React, and Next.js — vault, projects, prompts, ritual, and blogs.",
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
        <SearchProvider>
          <ThemeToggle />
          <div className={s.main}>{children}</div>
          <SiteFooter />
        </SearchProvider>
      </body>
    </html>
  );
}
