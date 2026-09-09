import AboutContent from "./AboutContent";
import AboutHeader from "./AboutHeader";

export default function About() {
  return (
    <section
      id="about"
      className="border-b border-theme-border bg-theme-background"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        {/* Section Header */}
        <AboutHeader />

        {/* Main Content */}
        <AboutContent />
      </div>
    </section>
  );
}
