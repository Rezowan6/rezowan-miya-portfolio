import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectLinksProps {
  liveUrl: string;
  githubUrl: string;
}

export default function ProjectLinks({
  liveUrl,
  githubUrl,
}: ProjectLinksProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg bg-theme-primary px-4 py-2.5 text-sm font-semibold text-theme-button-text transition-all duration-200 hover:bg-theme-primary-hover"
      >
        Live Demo
        <ExternalLink size={16} />
      </a>

      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border border-theme-border bg-theme-background px-4 py-2.5 text-sm font-semibold text-theme-foreground transition-all duration-200 hover:border-theme-primary hover:text-theme-primary"
      >
        GitHub
        <FaGithub size={16} />
      </a>
    </div>
  );
}
