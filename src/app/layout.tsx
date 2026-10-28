import type { Metadata } from "next";
import { Bricolage_Grotesque, Source_Sans_3, Caveat, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { SearchProvider } from "@/components/search/SearchProvider";
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
      className={`${display.variable} ${body.variable} ${script.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="desk-glow flex min-h-full flex-col">
        <SearchProvider>
          <ThemeToggle />
          <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 pb-8 pt-16 sm:px-6">
            {children}
          </div>
          <SiteFooter />
        </SearchProvider>
      </body>
    </html>
  );
}
