import { LinkIcon, Mail, MapPin, Phone } from "lucide-react";

interface ContactInfoItemProps {
  label: string;
  value: string;
  href?: string;
}

export default function ContactInfoItem({
  label,
  value,
  href,
}: ContactInfoItemProps) {
  const getIcon = () => {
    switch (label) {
      case "Email":
        return <Mail size={19} />;

      case "Phone":
        return <Phone size={19} />;

      case "Location":
        return <MapPin size={19} />;

      case "GitHub":
        return <LinkIcon size={19} />;

      case "LinkedIn":
        return <LinkIcon size={19} />;

      default:
        return <Mail size={19} />;
    }
  };

  const content = (
    <>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-theme-primary/20 bg-theme-primary/10 text-theme-primary">
        {getIcon()}
      </div>

      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-theme-muted-foreground">
          {label}
        </p>

        <p className="mt-1 truncate text-sm font-medium text-theme-foreground">
          {value}
        </p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="flex items-center gap-4 rounded-xl border border-theme-border bg-theme-card p-4 transition-all duration-200 hover:border-theme-primary/40 hover:bg-theme-card-hover"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-center gap-4 rounded-xl border border-theme-border bg-theme-card p-4">
      {content}
    </div>
  );
}
