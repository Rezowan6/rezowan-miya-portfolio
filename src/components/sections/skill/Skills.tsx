import { skillCategories } from "../../../config/skills";
import SkillCategory from "./SkillCategory";
import SkillsHeader from "./SkillsHeader";

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-b border-theme-border bg-theme-background"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <SkillsHeader />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <SkillCategory key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
