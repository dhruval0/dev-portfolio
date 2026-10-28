import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
}: ButtonProps) {
  const variants = {
    primary:
      "bg-[var(--desk-text)] text-[var(--desk-bg)] hover:opacity-90",
    secondary:
      "border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--surface)]",
    ghost:
      "text-[var(--link)] hover:underline underline-offset-4",
  };

  const classNames = `inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-opacity ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classNames}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classNames}>
      {children}
    </button>
  );
}
