import AboutTechnologies from "./AboutTechnologies";
import DevelopmentJourneyCard from "./DevelopmentJourneyCard";
import ProfessionalHighlights from "./ProfessionalHighlights";

const AboutContent = () => {
  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
      <DevelopmentJourneyCard />

      <div className="space-y-6">
        <ProfessionalHighlights />
        <AboutTechnologies />
      </div>
    </div>
  );
};

export default AboutContent;
