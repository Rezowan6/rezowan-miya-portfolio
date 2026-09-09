import { aboutHighlights } from "../../../config/about";
import HighlightCard from "./HighlightCard";

export default function ProfessionalHighlights() {
  return (
    <div className="rounded-2xl border border-theme-border bg-theme-card p-6">
      <h3 className="text-lg font-semibold text-theme-foreground">
        Professional Highlights
      </h3>

      <div className="mt-6 grid grid-cols-2 gap-4">
        {aboutHighlights.map((highlight) => (
          <HighlightCard
            key={highlight.label}
            value={highlight.value}
            label={highlight.label}
          />
        ))}
      </div>
    </div>
  );
}
