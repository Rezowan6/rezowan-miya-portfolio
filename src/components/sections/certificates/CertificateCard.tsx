import { ExternalLink, Eye } from "lucide-react";

import type { Certificate } from "../../../config/certificates";
import CertificateImage from "../../common/CertificateImage";

interface CertificateCardProps {
  certificate: Certificate;
  onPreview: (certificate: Certificate) => void;
}

export default function CertificateCard({
  certificate,
  onPreview,
}: CertificateCardProps) {
  const hasCredential =
    certificate.credentialUrl &&
    certificate.credentialUrl !== "#";

  return (
    <article className="overflow-hidden rounded-2xl border border-theme-border bg-theme-card transition-all duration-200 hover:-translate-y-1 hover:border-theme-primary/40">
      <div className="aspect-[4/3] overflow-hidden border-b border-theme-border bg-theme-background">
        <CertificateImage
          src={certificate.image}
          alt={`${certificate.name} certificate`}
          onClick={() => onPreview(certificate)}
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-theme-foreground">
          {certificate.name}
        </h3>

        <p className="mt-2 text-sm font-medium text-theme-primary">
          {certificate.organization}
        </p>

        <p className="mt-1 text-xs text-theme-muted">
          Issued {certificate.date}
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => onPreview(certificate)}
            className="inline-flex items-center gap-2 rounded-lg border border-theme-border bg-theme-background px-4 py-2.5 text-sm font-semibold text-theme-foreground transition-all duration-200 hover:border-theme-primary hover:text-theme-primary"
          >
            <Eye size={16} />
            Preview
          </button>

          {hasCredential && (
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-theme-primary px-4 py-2.5 text-sm font-semibold text-theme-button-text transition-all duration-200 hover:bg-theme-primary-hover"
            >
              Credential
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}