interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
}

export function SectionTitle({ title, subtitle, align = "left" }: SectionTitleProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }

  return (
    <div className={`space-y-2 mb-8 ${alignClass[align]}`}>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
    </div>
  )
}
