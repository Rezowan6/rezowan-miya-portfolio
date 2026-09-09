import { ArrowRight, CheckCircle2 } from "lucide-react";

import type { Project } from "../../../config/projects";
import ProjectTechnologyBadge from "../../common/ProjectTechnologyBadge";
import ProjectLinks from "./ProjectLinks";

interface FeaturedProjectProps {
  project: Project;
}

export default function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-theme-primary/20 bg-theme-card shadow-2xl shadow-theme-primary/5">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-[280px] overflow-hidden border-b border-theme-border bg-theme-background lg:min-h-full lg:border-b-0 lg:border-r">
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            className="h-full min-h-[280px] w-full object-cover"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-theme-background/70 via-transparent to-transparent"
          />

          <div className="absolute left-5 top-5">
            <span className="rounded-full border border-theme-primary/30 bg-theme-primary/10 px-3 py-1.5 text-xs font-semibold text-theme-primary backdrop-blur-sm">
              Featured Project
            </span>
          </div>
        </div>

        <div className="p-6 sm:p-8 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-theme-primary">
            Flagship Project
          </p>

          <h3 className="mt-3 text-2xl font-bold tracking-tight text-theme-foreground sm:text-3xl">
            {project.title}
          </h3>

          <p className="mt-4 text-sm leading-7 text-theme-muted">
            {project.description}
          </p>

          <div className="mt-6">
            <h4 className="text-sm font-semibold text-theme-foreground">
              Key Features
            </h4>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-2 text-sm text-theme-muted"
                >
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-theme-primary"
                  />

                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7">
            <h4 className="text-sm font-semibold text-theme-foreground">
              Technologies
            </h4>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <ProjectTechnologyBadge
                  key={technology}
                  technology={technology}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ProjectLinks
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />

            <a
              href={`#project-${project.id}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-theme-muted transition-colors duration-200 hover:text-theme-primary"
            >
              View Details
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
