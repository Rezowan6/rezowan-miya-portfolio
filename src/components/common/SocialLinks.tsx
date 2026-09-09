import { GitForkIcon, Link2Icon } from "lucide-react";
import { socialLinks } from "../../config/social";

// icon gula change korte hobe
const iconMap = {
  GitHub: GitForkIcon,
  LinkedIn: Link2Icon,
};

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((social) => {
        const Icon = iconMap[social.name as keyof typeof iconMap];

        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-theme-border
              bg-theme-card
              text-theme-muted
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:border-theme-primary
              hover:text-theme-primary
            "
          >
            <Icon size={18} />
          </a>
        );
      })}
    </div>
  );
}
