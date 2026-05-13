interface StatCardProps {
  label: string
  value: string
  gold?: boolean
}

export function StatCard({ label, value, gold }: StatCardProps) {
  return (
    <div
      className={`p-3.5 ${
        gold
          ? "bg-gold/10 border border-gold/35"
          : "bg-dark-3 border border-light/[0.07]"
      }`}
    >
      <div
        className={`text-[10px] tracking-[0.12em] mb-1.5 ${
          gold ? "text-gold" : "text-light-muted"
        }`}
      >
        {label.toUpperCase()}
      </div>
      <div className="text-xl font-serif text-foreground">{value}</div>
    </div>
  )
}
