type Props = {
  value: string;
  label: string;
};

export function ImpactStat({ value, label }: Props) {
  return (
    <div className="flex flex-col items-start rounded-2xl border border-brand-line bg-white p-6">
      <span className="font-display text-4xl font-bold text-brand-navy sm:text-5xl">{value}</span>
      <span className="mt-2 text-sm font-medium text-brand-muted">{label}</span>
    </div>
  );
}
