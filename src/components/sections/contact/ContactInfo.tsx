import { contactInfo } from "../../../config/contact";
import ContactInfoItem from "../../common/ContactInfoItem";

export default function ContactInfo() {
  return (
    <div>
      <h3 className="text-xl font-semibold text-theme-foreground">
        Get in touch
      </h3>

      <p className="mt-3 text-sm leading-7 text-theme-muted">
        Whether you have a project idea, a development opportunity or
        simply want to connect, you can reach me through the following
        channels.
      </p>

      <div className="mt-6 space-y-3">
        {contactInfo.map((item) => (
          <ContactInfoItem
            key={item.label}
            label={item.label}
            value={item.value}
            href={item.href}
          />
        ))}
      </div>
    </div>
  );
}