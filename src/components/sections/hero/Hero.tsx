import { ArrowRight, Download } from "lucide-react";
import Badge from "../../common/Badge";
import Button from "../../common/Button";
import SocialLinks from "../../common/SocialLinks";
import DeveloperVisual from "./DeveloperVisual";

export default function Hero() {
  const technologys = ["React", "TypeScript", "Node.js", "Express", "MySQL"];
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        border-b
        border-theme-border
      "
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          -z-10
          h-80
          w-80
          -translate-x-1/2
          rounded-full
          bg-theme-primary/10
          blur-3xl
        "
      />

      <div
        className="
          mx-auto
          grid
          min-h-[calc(100vh-72px)]
          max-w-7xl
          items-center
          gap-12
          px-6
          py-20
          lg:grid-cols-[1.15fr_0.85fr]
          lg:px-8
          lg:py-24
        "
      >
        {/* Content */}
        <div className="max-w-3xl">
          <p
            className="
              mb-5
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-theme-primary
            "
          >
            Hello, I&apos;m
          </p>

          <h1
            className="
              text-4xl
              font-bold
              leading-tight
              tracking-tight
              text-theme-foreground
              sm:text-5xl
              lg:text-6xl
              xl:text-7xl
            "
          >
            Rezowan Miya
          </h1>

          <h2
            className="
              mt-4
              text-2xl
              font-semibold
              leading-tight
              text-theme-muted
              sm:text-3xl
            "
          >
            Full Stack Developer
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-theme-muted
              sm:text-lg
              sm:leading-8
            "
          >
            I build modern, scalable and user-focused web applications with
            React, TypeScript, Node.js, Express and MySQL.
          </p>

          {/* Tech stack */}
          <div className="mt-6 flex flex-wrap gap-2">
            {technologys.map((technology) => (
              <Badge>{technology}</Badge>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href="#projects"
              variant="primary"
              icon={<ArrowRight size={17} />}
            >
              View Projects
            </Button>

            <Button
              href="/resume.pdf"
              download
              variant="secondary"
              icon={<Download size={17} />}
            >
              Download Resume
            </Button>
          </div>

          {/* Social */}
          <div className="mt-8 flex items-center gap-4">
            <span className="text-sm text-theme-muted">Find me on</span>

            <SocialLinks />
          </div>
        </div>

        {/* Developer Visual */}
        <DeveloperVisual />
      </div>
    </section>
  );
}
