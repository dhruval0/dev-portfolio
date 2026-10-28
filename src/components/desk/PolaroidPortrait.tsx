"use client";

import { useState } from "react";

type PolaroidPortraitProps = {
  src: string;
  caption: string;
  alt?: string;
};

/**
 * Polaroid-style portrait with tape — used on the desk home.
 * Replace public/portrait.jpg with your photo anytime.
 */
export function PolaroidPortrait({
  src,
  caption,
  alt = "Portrait",
}: PolaroidPortraitProps) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="relative mx-auto w-[200px] rotate-2 sm:w-[220px] lg:mx-0 lg:ml-auto">
      <span
        aria-hidden
        className="absolute -top-2 left-1/2 z-10 h-4 w-20 -translate-x-1/2 -rotate-1 rounded-sm bg-[var(--tape)] shadow-sm"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, transparent, transparent 4px, color-mix(in srgb, black 14%, transparent) 4px, color-mix(in srgb, black 14%, transparent) 6px)",
        }}
      />

      <div className="rounded-sm bg-[var(--desk-text)] p-2.5 pb-10 shadow-xl">
        <div className="relative aspect-square overflow-hidden bg-[var(--elevated)]">
          {failed ? (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[var(--card)] p-4 text-center">
              <span className="font-[family-name:var(--font-display)] text-3xl text-[var(--muted)]">
                DD
              </span>
              <span className="text-[10px] leading-snug text-[var(--faint)]">
                Add your photo at
                <br />
                public/portrait.jpg
              </span>
            </div>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={alt}
              className="h-full w-full object-cover"
              onError={() => setFailed(true)}
            />
          )}
        </div>
      </div>

      <figcaption className="mt-3 text-center font-[family-name:var(--font-script)] text-xl text-[var(--accent)]">
        {caption}
      </figcaption>
    </figure>
  );
}
