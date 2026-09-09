import { ExternalLink, X } from "lucide-react";

import type { Certificate } from "../../../config/certificates";

interface CertificateModalProps {
  certificate: Certificate;
  onClose: () => void;
}

export default function CertificateModal({
  certificate,
  onClose,
}: CertificateModalProps) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${certificate.name} certificate preview`}
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-theme-border bg-theme-card shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-theme-border px-5 py-4">
          <div className="min-w-0">
            <h3 className="truncate text-sm font-semibold text-theme-foreground sm:text-base">
              {certificate.name}
            </h3>

            <p className="mt-1 text-xs text-theme-muted">
              {certificate.organization} · {certificate.date}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close certificate preview"
            className="ml-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-theme-border text-theme-muted transition-colors duration-200 hover:border-theme-primary hover:text-theme-primary"
          >
            <X size={18} />
          </button>
        </div>

        <div className="max-h-[calc(90vh-80px)] overflow-auto bg-theme-background p-4 sm:p-6">
          <img
            src={certificate.image}
            alt={certificate.name}
            className="mx-auto h-auto max-h-[75vh] w-auto max-w-full rounded-lg object-contain"
          />
        </div>

        {certificate.credentialUrl &&
          certificate.credentialUrl !== "#" && (
            <div className="border-t border-theme-border px-5 py-4">
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-theme-primary transition-colors duration-200 hover:text-theme-primary-hover"
              >
                Verify Credential
                <ExternalLink size={16} />
              </a>
            </div>
          )}
      </div>
    </div>
  );
}