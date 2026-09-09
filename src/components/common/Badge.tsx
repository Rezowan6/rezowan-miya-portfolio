interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span
      className="
        rounded-full
        border
        border-theme-border
        bg-theme-card
        px-3
        py-1.5
        text-xs
        font-medium
        text-theme-muted
      "
    >
      {children}
    </span>
  );
}
