interface HighlightCardProps {
  value: string;
  label: string;
}

export default function HighlightCard({ value, label }: HighlightCardProps) {
  return (
    <div className="rounded-xl border border-theme-border bg-theme-background p-4">
      <p className="text-2xl font-bold text-theme-primary">{value}</p>

      <p className="mt-1 text-xs leading-5 text-theme-muted">{label}</p>
    </div>
  );
}
