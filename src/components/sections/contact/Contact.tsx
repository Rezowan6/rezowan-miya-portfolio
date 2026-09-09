import ContactForm from "./ContactForm";
import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-b border-theme-border bg-theme-background"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <ContactHeader />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <ContactInfo />

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
