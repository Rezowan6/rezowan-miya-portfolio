import { coreStrengths, developmentJourney } from "../../../config/about";

export default function DevelopmentJourneyCard() {
  return (
    <div className="rounded-2xl border border-theme-border bg-theme-card p-6 sm:p-8">
      <h3 className="text-xl font-semibold text-theme-foreground">
        My Development Journey
      </h3>

      <div className="mt-5 space-y-5">
        {developmentJourney.map((paragraph) => (
          <p key={paragraph} className="text-sm leading-7 text-theme-muted">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-8 border-t border-theme-border pt-6">
        <h3 className="text-lg font-semibold text-theme-foreground">
          Core Strengths
        </h3>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {coreStrengths.map((strength) => (
            <div
              key={strength}
              className="rounded-xl border border-theme-border bg-theme-background px-4 py-3 text-sm font-medium text-theme-muted"
            >
              {strength}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
