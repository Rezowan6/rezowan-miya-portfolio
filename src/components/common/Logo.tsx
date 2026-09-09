interface LogoProps {
  onClick?: () => void;
}

export default function Logo({ onClick }: LogoProps) {
  return (
    <a
      href="#home"
      onClick={onClick}
      className="group inline-flex items-center gap-2"
      aria-label="Go to homepage"
    >
      <span
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-xl
          bg-theme-primary
          text-sm
          font-bold
          text-theme-button-text
          shadow-lg
          shadow-theme-primary/20
          transition-transform
          duration-200
          group-hover:scale-105
        "
      >
        R
      </span>

      <span className="text-lg font-bold tracking-tight text-theme-foreground">
        Rezowan
        <span className="text-theme-primary">.</span>
      </span>
    </a>
  );
}
