import type { IconType } from "react-icons";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub, SiInstagram, SiMedium, SiSubstack } from "react-icons/si";
import { HiOutlineSparkles } from "react-icons/hi2";

export type SocialIconConfig = {
  Icon: IconType;
  color: string;
};

/** Brand icons for “Where to find me” — keyed by platform name (case-insensitive) */
export const socialIcons: Record<string, SocialIconConfig> = {
  github: { Icon: SiGithub, color: "#FFFFFF" },
  linkedin: { Icon: FaLinkedinIn, color: "#0A66C2" },
  substack: { Icon: SiSubstack, color: "#FF6719" },
  instagram: { Icon: SiInstagram, color: "#E4405F" },
  medium: { Icon: SiMedium, color: "#FFFFFF" },
};

const fallback: SocialIconConfig = {
  Icon: HiOutlineSparkles,
  color: "#C5A059",
};

export function getSocialIcon(platform: string): SocialIconConfig {
  return socialIcons[platform.trim().toLowerCase()] ?? fallback;
}
