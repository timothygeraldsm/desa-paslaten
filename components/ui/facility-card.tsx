import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface FacilityCardProps {
  name: string
  icon: LucideIcon
  description?: string
}

export function FacilityCard({ name, icon: Icon, description }: FacilityCardProps) {
  return (
    <Card>
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="rounded-full bg-primary/10 p-3 mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="font-semibold mb-1">{name}</h3>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </CardContent>
    </Card>
  )
}
