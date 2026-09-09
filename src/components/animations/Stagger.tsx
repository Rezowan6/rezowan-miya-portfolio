import type { ReactNode } from "react";

interface StaggerProps {
  children: ReactNode;
  className?: string;
}

export default function Stagger({ children, className = "" }: StaggerProps) {
  return <div className={className}>{children}</div>;
}
