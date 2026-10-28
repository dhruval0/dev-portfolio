import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { buttonStyles } from "./Button.styles";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: keyof typeof buttonStyles.variants;
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
  className,
}: ButtonProps) {
  const classNames = cn(
    buttonStyles.base,
    buttonStyles.variants[variant],
    className,
  );

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
