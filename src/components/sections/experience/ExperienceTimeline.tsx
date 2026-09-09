import { experiences } from "../../../config/experience";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceTimeline() {
  return (
    <div className="relative mt-12">
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-5 top-0 hidden w-px bg-theme-border md:block"
      />

      <div className="space-y-8">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="relative md:pl-14"
          >
            <div
              aria-hidden="true"
              className="absolute left-[13px] top-8 hidden h-3 w-3 rounded-full border-2 border-theme-primary bg-theme-background md:block"
            />

            <ExperienceCard experience={experience} />
          </div>
        ))}
      </div>
    </div>
  );
}