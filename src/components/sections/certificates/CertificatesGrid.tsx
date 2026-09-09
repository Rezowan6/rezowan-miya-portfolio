import type { Certificate } from "../../../config/certificates";
import CertificateCard from "./CertificateCard";

interface CertificatesGridProps {
  certificates: Certificate[];
  onPreview: (certificate: Certificate) => void;
}

export default function CertificatesGrid({
  certificates,
  onPreview,
}: CertificatesGridProps) {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {certificates.map((certificate) => (
        <CertificateCard
          key={certificate.id}
          certificate={certificate}
          onPreview={onPreview}
        />
      ))}
    </div>
  );
}