import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface ProfileCardProps {
  name: string
  role: string
  imageUrl?: string
}

export function ProfileCard({ name, role, imageUrl }: ProfileCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="aspect-square relative">
          {imageUrl ? (
            <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-cover" />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span className="text-4xl font-bold text-muted-foreground">{name.charAt(0)}</span>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </CardContent>
    </Card>
  )
}
