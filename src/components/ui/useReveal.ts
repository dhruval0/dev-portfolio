"use client";

import { useEffect, useRef, useState } from "react";

type UseRevealOptions = {
  once?: boolean;
  /** Extra ms before marking visible (stagger / hero timing) */
  delay?: number;
  rootMargin?: string;
  threshold?: number;
};

export function useReveal({
  once = true,
  delay = 0,
  rootMargin = "0px 0px -4% 0px",
  threshold = 0.05,
}: UseRevealOptions = {}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let delayId = 0;
    let failsafeId = 0;
    let shown = false;

    const show = () => {
      if (shown) return;
      shown = true;
      delayId = window.setTimeout(() => setVisible(true), Math.max(0, delay));
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    // Never leave content stuck at opacity: 0 if the observer misses.
    failsafeId = window.setTimeout(show, 900 + delay);

    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const alreadyInView = rect.top < vh && rect.bottom > 0;

    if (alreadyInView) {
      // Wait one frame so the opacity:0 state paints before animating.
      const raf = window.requestAnimationFrame(() => show());
      return () => {
        window.cancelAnimationFrame(raf);
        window.clearTimeout(delayId);
        window.clearTimeout(failsafeId);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          show();
          if (once) observer.disconnect();
          return;
        }
        if (!once) {
          shown = false;
          window.clearTimeout(delayId);
          setVisible(false);
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      window.clearTimeout(delayId);
      window.clearTimeout(failsafeId);
    };
  }, [once, delay, rootMargin, threshold]);

  return { ref, visible };
}
