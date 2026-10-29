import { getSocialIcon } from "@/data/socialIcons";
import type { SocialLink } from "@/types";
import { socialTagStyles as s } from "./SocialTag.styles";

type SocialTagProps = {
  social: SocialLink;
};

export function SocialTag({ social }: SocialTagProps) {
  const external = social.href.startsWith("http");
  const { Icon, color } = getSocialIcon(social.platform);

  return (
    <a
      href={social.href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={s.link}
    >
      <span className={s.iconWrap} aria-hidden>
        <Icon className={s.icon} style={{ color }} title={social.platform} />
      </span>

      <div className={s.body}>
        <p className={s.platform}>{social.platform}</p>
        <p className={s.handle}>{social.handle}</p>
        <p className={s.description}>{social.description}</p>
      </div>

      <span className={s.chevron} aria-hidden>
        →
      </span>
    </a>
  );
}
