import Badge from "../../common/Badge";
import { aboutTechnologies } from "../../../config/about"

export default function AboutTechnologies() {
  return (
    <div
      className="
        rounded-2xl
        border
        border-theme-border
        bg-theme-card
        p-6
      "
    >
      <h3
        className="
          text-lg
          font-semibold
          text-theme-foreground
        "
      >
        Technologies I Work With
      </h3>

      <div className="mt-5 flex flex-wrap gap-2">
        {aboutTechnologies.map((technology) => (
          <Badge key={technology}>
            {technology}
          </Badge>
        ))}
      </div>
    </div>
  );
}