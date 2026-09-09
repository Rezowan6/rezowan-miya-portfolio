interface CertificateImageProps {
  src: string;
  alt: string;
  onClick?: () => void;
}

export default function CertificateImage({
  src,
  alt,
  onClick,
}: CertificateImageProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative block h-full w-full overflow-hidden text-left"
      aria-label={`Preview ${alt}`}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
      />

      <div className="absolute inset-0 flex items-center justify-center bg-theme-background/0 transition-colors duration-200 group-hover:bg-theme-background/30">
        <span className="rounded-lg border border-white/20 bg-theme-background/80 px-4 py-2 text-xs font-semibold text-white opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
          Preview Certificate
        </span>
      </div>
    </button>
  );
}
