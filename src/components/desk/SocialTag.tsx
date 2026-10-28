import type { SocialLink } from "@/types";

type SocialTagProps = {
  social: SocialLink;
};

export function SocialTag({ social }: SocialTagProps) {
  return (
    <a
      href={social.href}
      target={social.href.startsWith("http") ? "_blank" : undefined}
      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="flex items-start gap-3 rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 transition-colors hover:border-[var(--accent-soft)]"
    >
      <span
        aria-hidden
        className="mt-1 h-3 w-3 shrink-0 rounded-full border-2 border-[var(--border)]"
      />
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--accent)]">
          {social.platform}
        </p>
        <p className="truncate font-medium">{social.handle}</p>
        <p className="mt-1 text-sm text-[var(--muted)]">{social.description}</p>
      </div>
    </a>
  );
}
