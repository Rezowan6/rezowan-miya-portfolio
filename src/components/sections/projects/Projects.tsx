import { projects } from "../../../config/projects";
import AnimatedItem from "../../animations/AnimatedItem";

import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import ProjectsHeader from "./ProjectsHeader";

export default function Projects() {
  const featuredProject = projects.find((project) => project.featured);

  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className="border-b border-theme-border bg-theme-background"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <ProjectsHeader />

        {featuredProject && (
          <div className="mt-12">
            <FeaturedProject project={featuredProject} />
          </div>
        )}

        {otherProjects.length > 0 && (
          <div className="mt-10">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-theme-foreground">
                More Projects
              </h3>

              <p className="mt-2 text-sm text-theme-muted">
                Other applications and development work.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {otherProjects.map((project, index) => (
                <AnimatedItem key={project.id} delay={index * 100}>
                  <ProjectCard project={project} />
                </AnimatedItem>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
