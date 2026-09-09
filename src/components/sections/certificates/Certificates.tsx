import { useState } from "react";

import { certificates } from "../../../config/certificates";

import CertificateModal from "./CertificateModal";
import CertificatesGrid from "./CertificatesGrid";
import CertificatesHeader from "./CertificatesHeader";

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<
    (typeof certificates)[number] | null
  >(null);

  const handlePreview = (certificate: (typeof certificates)[number]) => {
    setSelectedCertificate(certificate);
  };

  const handleClose = () => {
    setSelectedCertificate(null);
  };

  return (
    <>
      <section
        id="certificates"
        className="border-b border-theme-border bg-theme-background"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <CertificatesHeader />

          <CertificatesGrid
            certificates={certificates}
            onPreview={handlePreview}
          />
        </div>
      </section>

      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={handleClose}
        />
      )}
    </>
  );
}
