import ExperienceHeader from "./ExperienceHeader";
import ExperienceTimeline from "./ExperienceTimeline";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-theme-border bg-theme-background"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <ExperienceHeader />
        <ExperienceTimeline />
      </div>
    </section>
  );
}
