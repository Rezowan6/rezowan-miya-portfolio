import { skillCategories } from "../../../config/skills";
import AnimatedItem from "../../animations/AnimatedItem";
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
          {skillCategories.map((category, index) => (
            <AnimatedItem  key={category.title} delay={index * 80}>
              <SkillCategory category={category} />
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  );
}
