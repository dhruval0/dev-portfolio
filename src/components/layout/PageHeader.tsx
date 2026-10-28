type PageHeaderProps = {
  title: string;
  description: string;
};

/** Taped title label — shared across Vault, Projects, etc. */
export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="relative mt-2">
        <span
          aria-hidden
          className="absolute -top-2 left-1/2 z-10 h-3 w-16 -translate-x-1/2 rotate-[-2deg] rounded-sm bg-[var(--tape)] opacity-90"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent, transparent 3px, color-mix(in srgb, black 12%, transparent) 3px, color-mix(in srgb, black 12%, transparent) 5px)",
          }}
        />
        <h1 className="rounded-md bg-[var(--card)] px-8 py-3 font-[family-name:var(--font-display)] text-3xl tracking-tight shadow-lg sm:text-4xl">
          {title}
        </h1>
      </div>
      <p className="max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
        {description}
      </p>
    </div>
  );
}
