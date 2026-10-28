import type { SocialLink } from "@/types";
import { socialTagStyles as s } from "./SocialTag.styles";

type SocialTagProps = {
  social: SocialLink;
};

export function SocialTag({ social }: SocialTagProps) {
  const external = social.href.startsWith("http");

  return (
    <a
      href={social.href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={s.link}
    >
      <span aria-hidden className={s.hole} />
      <div className={s.body}>
        <p className={s.platform}>{social.platform}</p>
        <p className={s.handle}>{social.handle}</p>
        <p className={s.description}>{social.description}</p>
      </div>
    </a>
  );
}
