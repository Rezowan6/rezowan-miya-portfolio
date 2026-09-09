import type { ReactNode } from "react";

import useInView from "../../hooks/useInView";

interface AnimatedItemProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function AnimatedItem({
  children,
  delay = 0,
  className = "",
}: AnimatedItemProps) {
  const { ref, isInView } = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`
        ${className}
        ${isInView ? "animate-reveal-up" : "opacity-0"}
      `}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
