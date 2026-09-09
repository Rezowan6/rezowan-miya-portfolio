import {
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  MapPin,
} from "lucide-react";

import type { Experience } from "../../../config/experience";
import TechnologyBadge from "../../common/TechnologyBadge";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({
  experience,
}: ExperienceCardProps) {
  return (
    <article className="relative rounded-2xl border border-theme-border bg-theme-card p-6 transition-all duration-200 hover:border-theme-primary/40 sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <BriefcaseBusiness
              size={18}
              className="text-theme-primary"
            />

            <span className="text-sm font-medium text-theme-primary">
              {experience.type}
            </span>
          </div>

          <h3 className="mt-3 text-xl font-bold text-theme-foreground sm:text-2xl">
            {experience.role}
          </h3>

          <div className="mt-2 flex items-center gap-2 text-sm font-medium text-theme-muted">
            <MapPin size={15} />
            <span>{experience.organization}</span>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2 rounded-full border border-theme-border bg-theme-background px-3 py-1.5 text-xs font-medium text-theme-muted">
          <CalendarDays size={14} />
          <span>{experience.duration}</span>
        </div>
      </div>

      {experience.current && (
        <div className="mt-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-theme-primary/20 bg-theme-primary/10 px-3 py-1.5 text-xs font-semibold text-theme-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-theme-primary" />
            Currently Working
          </span>
        </div>
      )}

      <p className="mt-6 text-sm leading-7 text-theme-muted">
        {experience.description}
      </p>

      <div className="mt-7 grid gap-7 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h4 className="text-sm font-semibold text-theme-foreground">
            Responsibilities
          </h4>

          <ul className="mt-4 space-y-3">
            {experience.responsibilities.map(
              (responsibility) => (
                <li
                  key={responsibility}
                  className="flex items-start gap-3 text-sm leading-6 text-theme-muted"
                >
                  <CheckCircle2
                    size={16}
                    className="mt-1 shrink-0 text-theme-primary"
                  />

                  <span>{responsibility}</span>
                </li>
              ),
            )}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-theme-foreground">
            Important Achievements
          </h4>

          <ul className="mt-4 space-y-3">
            {experience.achievements.map((achievement) => (
              <li
                key={achievement}
                className="flex items-start gap-3 text-sm leading-6 text-theme-muted"
              >
                <CheckCircle2
                  size={16}
                  className="mt-1 shrink-0 text-theme-secondary"
                />

                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-7 border-t border-theme-border pt-6">
        <h4 className="text-sm font-semibold text-theme-foreground">
          Technologies
        </h4>

        <div className="mt-4 flex flex-wrap gap-2">
          {experience.technologies.map((technology) => (
            <TechnologyBadge
              key={technology}
              technology={technology}
            />
          ))}
        </div>
      </div>
    </article>
  );
}