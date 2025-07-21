interface TimelineItemProps {
  year: string
  title: string
  description: string
}

export function TimelineItem({ year, title, description }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8 border-l border-muted last:border-0">
      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
      <div className="bg-card p-4 rounded-lg shadow-sm">
        <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-primary text-white mb-2">{year}</span>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

interface TimelineProps {
  items: TimelineItemProps[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="pl-4">
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </div>
  )
}
