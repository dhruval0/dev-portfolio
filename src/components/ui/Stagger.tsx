"use client";

import type { CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

type StaggerProps = {
  children: ReactNode;
  className?: string;
  /** Base delay before the first child (ms) */
  baseDelay?: number;
  /** Gap between children (ms) */
  step?: number;
  index: number;
  variant?: "up" | "fade" | "scale";
  as?: ElementType;
  style?: CSSProperties;
};

/** Convenience wrapper — one reveal per grid/list item with staggered delay. */
export function StaggerItem({
  children,
  className,
  baseDelay = 0,
  step = 55,
  index,
  variant = "up",
  as,
  style,
}: StaggerProps) {
  return (
    <Reveal
      as={as}
      className={cn(className)}
      delay={baseDelay + index * step}
      variant={variant}
      style={style}
    >
      {children}
    </Reveal>
  );
}
