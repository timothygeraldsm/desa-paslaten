import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface OfficialCardProps {
  name: string
  role: string
  icon: LucideIcon
  isLeadership?: boolean
}

export function OfficialCard({ name, role, icon: Icon, isLeadership = false }: OfficialCardProps) {
  return (
    <Card
      className={`transition-all duration-200 hover:shadow-lg ${isLeadership ? "border-primary/20 bg-primary/5" : ""}`}
    >
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className={`rounded-full p-4 ${isLeadership ? "bg-primary" : "bg-primary/10"}`}>
            <Icon className={`h-8 w-8 ${isLeadership ? "text-white" : "text-primary"}`} />
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold text-sm leading-5">{name}</h3>
            <p className={`text-xs ${isLeadership ? "text-primary font-medium" : "text-muted-foreground"}`}>{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
