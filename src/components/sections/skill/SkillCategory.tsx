import type { SkillCategory as SkillCategoryType } from "../../../config/skills";
import SkillCard from "../../common/SkillCard";

interface SkillCategoryProps {
  category: SkillCategoryType;
}

export default function SkillCategory({ category }: SkillCategoryProps) {
  const CategoryIcon = category.icon;

  return (
    <div className="rounded-2xl border border-theme-border bg-theme-card p-6 sm:p-7">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-theme-primary/20 bg-theme-primary/10 text-theme-primary">
          <CategoryIcon size={21} />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-theme-foreground">
            {category.title}
          </h3>

          <p className="mt-1 text-sm leading-6 text-theme-muted">
            {category.description}
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {category.skills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
}
