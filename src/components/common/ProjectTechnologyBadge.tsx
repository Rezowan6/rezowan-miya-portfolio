interface ProjectTechnologyBadgeProps {
  technology: string;
}

export default function ProjectTechnologyBadge({
  technology,
}: ProjectTechnologyBadgeProps) {
  return (
    <span className="rounded-full border border-theme-border bg-theme-background px-3 py-1.5 text-xs font-medium text-theme-muted">
      {technology}
    </span>
  );
}
