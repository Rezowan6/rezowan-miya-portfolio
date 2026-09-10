import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

interface SkillCardProps {
  name: string;
  icon: LucideIcon | IconType;
}

export default function SkillCard({ name, icon: Icon }: SkillCardProps) {
  return (
    <div className="group flex items-center gap-3 rounded-xl border border-theme-border bg-theme-background px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-theme-primary/50 hover:bg-theme-card-hover">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-theme-border bg-theme-card text-theme-primary transition-colors duration-200 group-hover:border-theme-primary/30">
        <Icon size={18} />
      </div>

      <span className="text-sm font-medium text-theme-foreground">{name}</span>
    </div>
  );
}
