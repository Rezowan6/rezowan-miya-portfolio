import { ArrowRight, CheckCircle2 } from "lucide-react";

import type { Project } from "../../config/projects";
import ProjectTechnologyBadge from "../common/ProjectTechnologyBadge";
import ProjectLinks from "./ProjectLinks";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      id={`project-${project.id}`}
      className="group overflow-hidden rounded-2xl border border-theme-border bg-theme-card transition-all duration-200 hover:-translate-y-1 hover:border-theme-primary/40"
    >
      <div className="relative h-52 overflow-hidden bg-theme-background">
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-theme-background/60 via-transparent to-transparent"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-theme-foreground">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-theme-muted">
          {project.description}
        </p>

        <div className="mt-5">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 6).map((technology) => (
              <ProjectTechnologyBadge
                key={technology}
                technology={technology}
              />
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-semibold text-theme-foreground">
            Key Features
          </h4>

          <ul className="mt-3 space-y-2">
            {project.features.slice(0, 4).map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-theme-muted"
              >
                <CheckCircle2
                  size={15}
                  className="mt-0.5 shrink-0 text-theme-primary"
                />

                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <ProjectLinks
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
          />

          <a
            href={`#project-${project.id}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-theme-muted transition-colors duration-200 hover:text-theme-primary"
          >
            Details
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </article>
  );
}
