import type { ReactNode } from "react";

import useInView from "../../hooks/useInView";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 600,
  threshold = 0.15,
}: RevealProps) {
  const { ref, isInView } = useInView(threshold);

  return (
    <div
      ref={ref}
      className={`
        ${className}
        ${isInView ? "animate-reveal-up" : "opacity-0"}
      `}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}
