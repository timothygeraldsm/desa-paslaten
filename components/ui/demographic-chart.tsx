"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface DemographicData {
  label: string
  value: number
  total: number
  color: string
}

interface DemographicChartProps {
  title: string
  data: DemographicData[]
}

export function DemographicChart({ title, data }: DemographicChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {data.map((item, index) => {
            const percentage = Math.round((item.value / item.total) * 100)
            return (
              <div key={index}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{item.label}</span>
                  <span>
                    {item.value} jiwa ({percentage}%)
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${percentage}%`,
                      backgroundColor: item.color,
                    }}
                  ></div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
