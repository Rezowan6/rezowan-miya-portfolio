import { ArrowUpRight } from "lucide-react";

import type { Service } from "../../../config/services";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({
  service,
}: ServiceCardProps) {
  const ServiceIcon = service.icon;

  return (
    <article className="group rounded-2xl border border-theme-border bg-theme-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-theme-primary/40 hover:bg-theme-card-hover sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-theme-primary/20 bg-theme-primary/10 text-theme-primary transition-colors duration-200 group-hover:border-theme-primary/40">
          <ServiceIcon size={22} />
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-theme-border text-theme-muted transition-all duration-200 group-hover:border-theme-primary/40 group-hover:text-theme-primary">
          <ArrowUpRight size={17} />
        </div>
      </div>

      <h3 className="mt-6 text-xl font-semibold text-theme-foreground">
        {service.title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-theme-muted">
        {service.description}
      </p>

      <div className="mt-6 border-t border-theme-border pt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-theme-muted-foreground">
          What I provide
        </p>

        <ul className="mt-4 space-y-3">
          {service.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-3 text-sm text-theme-muted"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-theme-primary" />

              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}