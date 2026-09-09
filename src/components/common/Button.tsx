import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  download?: boolean;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  download = false,
  variant = "primary",
  icon,
  target,
  rel,
  onClick,
}: ButtonProps) {
  const baseClasses = `
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-lg
    px-6
    py-3
    text-sm
    font-semibold
    transition-all
    duration-200
  `;

  const variantClasses =
    variant === "primary"
      ? `
        bg-theme-primary
        text-theme-button-text
        shadow-lg
        shadow-theme-primary/10
        hover:bg-theme-primary-hover
        hover:shadow-theme-primary/20
      `
      : `
        border
        border-theme-border
        bg-theme-card
        text-theme-foreground
        hover:border-theme-primary
        hover:text-theme-primary
      `;

  return (
    <a
      href={href}
      download={download}
      target={target}
      rel={rel}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses}`}
    >
      {children}

      {icon}
    </a>
  );
}
