import { useState, type ChangeEvent, type FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const [errors, setErrors] = useState<FormErrors>({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: undefined,
    }));

    setIsSubmitted(false);
  };

  const validate = (): FormErrors => {
    const validationErrors: FormErrors = {};

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedSubject = formData.subject.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) {
      validationErrors.name = "Please enter your name.";
    } else if (trimmedName.length < 2) {
      validationErrors.name = "Name must contain at least 2 characters.";
    }

    if (!trimmedEmail) {
      validationErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      validationErrors.email = "Please enter a valid email address.";
    }

    if (!trimmedSubject) {
      validationErrors.subject = "Please enter a subject.";
    } else if (trimmedSubject.length < 3) {
      validationErrors.subject = "Subject must contain at least 3 characters.";
    }

    if (!trimmedMessage) {
      validationErrors.message = "Please enter your message.";
    } else if (trimmedMessage.length < 10) {
      validationErrors.message = "Message must contain at least 10 characters.";
    }

    return validationErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    const recipient = "your-email@example.com";

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
      formData.subject.trim(),
    )}&body=${encodeURIComponent(
      `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`,
    )}`;

    window.location.href = mailtoUrl;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData(initialFormData);
    }, 500);
  };

  const inputClasses = `
    mt-2
    w-full
    rounded-xl
    border
    border-theme-border
    bg-theme-background
    px-4
    py-3
    text-sm
    text-theme-foreground
    outline-none
    transition-all
    duration-200
    placeholder:text-theme-muted-foreground
    focus:border-theme-primary
    focus:ring-2
    focus:ring-theme-primary/10
  `;

  return (
    <div className="rounded-2xl border border-theme-border bg-theme-card p-6 sm:p-8">
      <div>
        <h3 className="text-xl font-semibold text-theme-foreground">
          Send me a message
        </h3>

        <p className="mt-2 text-sm leading-6 text-theme-muted">
          Fill out the form below and I will get back to you as soon as
          possible.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-5">
        <div>
          <label
            htmlFor="name"
            className="text-sm font-medium text-theme-foreground"
          >
            Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`${inputClasses} ${
              errors.name
                ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
                : ""
            }`}
          />

          {errors.name && (
            <p id="name-error" className="mt-2 text-xs text-red-500">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="text-sm font-medium text-theme-foreground"
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`${inputClasses} ${
              errors.email
                ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
                : ""
            }`}
          />

          {errors.email && (
            <p id="email-error" className="mt-2 text-xs text-red-500">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="subject"
            className="text-sm font-medium text-theme-foreground"
          >
            Subject
          </label>

          <input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Project inquiry"
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            className={`${inputClasses} ${
              errors.subject
                ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
                : ""
            }`}
          />

          {errors.subject && (
            <p id="subject-error" className="mt-2 text-xs text-red-500">
              {errors.subject}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="text-sm font-medium text-theme-foreground"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project or opportunity..."
            rows={6}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`${inputClasses} resize-none ${
              errors.message
                ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
                : ""
            }`}
          />

          {errors.message && (
            <p id="message-error" className="mt-2 text-xs text-red-500">
              {errors.message}
            </p>
          )}
        </div>

        {isSubmitted && (
          <div
            className="rounded-xl border border-theme-primary/20 bg-theme-primary/10 px-4 py-3 text-sm text-theme-primary"
            role="status"
          >
            Your email client should now be open with the message prepared.
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center rounded-xl bg-theme-primary px-5 py-3 text-sm font-semibold text-theme-button-text transition-all duration-200 hover:bg-theme-primary-hover disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Preparing message..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
