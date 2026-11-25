"use client";

import type { CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { revealStyles as s } from "./Reveal.styles";
import { useReveal } from "./useReveal";

type RevealVariant = "up" | "fade" | "left" | "right" | "polaroid" | "scale";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms — applied before the reveal starts */
  delay?: number;
  variant?: RevealVariant;
  once?: boolean;
  as?: ElementType;
  style?: CSSProperties;
};

const variantClass: Record<RevealVariant, string> = {
  up: s.up,
  fade: s.fade,
  left: s.left,
  right: s.right,
  polaroid: s.polaroid,
  scale: s.scale,
};

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
  once = true,
  as: Tag = "div",
  style,
}: RevealProps) {
  const { ref, visible } = useReveal({ once, delay });

  return (
    <Tag
      ref={ref}
      className={cn(
        s.base,
        variantClass[variant],
        visible && s.visible,
        className,
      )}
      style={style}
    >
      {children}
    </Tag>
  );
}
