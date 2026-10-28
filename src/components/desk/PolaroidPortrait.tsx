"use client";

import { polaroidStyles as s, tapeBackground } from "./PolaroidPortrait.styles";
import { usePolaroidPortrait } from "./usePolaroidPortrait";

type PolaroidPortraitProps = {
  src: string;
  caption: string;
  alt?: string;
};

export function PolaroidPortrait({
  src,
  caption,
  alt = "Portrait",
}: PolaroidPortraitProps) {
  const { failed, onImageError } = usePolaroidPortrait();

  return (
    <figure className={s.figure}>
      <span aria-hidden className={s.tape} style={tapeBackground} />

      <div className={s.frame}>
        <div className={s.photoWrap}>
          {failed ? (
            <div className={s.fallback}>
              <span className={s.fallbackInitials}>DD</span>
              <span className={s.fallbackHint}>
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
              className={s.image}
              onError={onImageError}
            />
          )}
        </div>
      </div>

      <figcaption className={s.caption}>{caption}</figcaption>
    </figure>
  );
}
