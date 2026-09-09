interface TechnologyBadgeProps {
  technology: string;
}

export default function TechnologyBadge({ technology }: TechnologyBadgeProps) {
  return (
    <span className="rounded-full border border-theme-border bg-theme-background px-3 py-1.5 text-xs font-medium text-theme-muted">
      {technology}
    </span>
  );
}
