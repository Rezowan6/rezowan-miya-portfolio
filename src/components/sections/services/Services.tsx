import ServicesGrid from "./ServicesGrid";
import ServicesHeader from "./ServicesHeader";

export default function Services() {
  return (
    <section
      id="services"
      className="border-b border-theme-border bg-theme-background"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <ServicesHeader />
        <ServicesGrid />
      </div>
    </section>
  );
}
