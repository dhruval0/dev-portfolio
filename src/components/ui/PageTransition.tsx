"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Remounts on every route so the enter keyframes always re-run
 * (desk ↔ drawers ↔ blogs, back button, search jumps).
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="motion-page-enter overflow-x-hidden">
      {children}
    </div>
  );
}
