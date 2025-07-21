import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const jagaData = [
  {
    name: "Jaga I",
    population: 159,
    male: 79,
    female: 80,
    kepala: "JHONNY KALIGIS",
    staf: "VIGEL TARORE",
  },
  {
    name: "Jaga II",
    population: 173,
    male: 87,
    female: 86,
    kepala: "NOLDY JACOB",
    staf: "RONAL UMBOH",
  },
  {
    name: "Jaga III",
    population: 208,
    male: 108,
    female: 100,
    kepala: "DONAL KEMBAU",
    staf: "-",
  },
  {
    name: "Jaga IV",
    population: 276,
    male: 142,
    female: 134,
    kepala: "MILIAN PANGKEY",
    staf: "-",
  },
]

export function JagaStatistics() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {jagaData.map((jaga, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="text-lg text-center">{jaga.name}</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-2">
            <div className="text-2xl font-bold text-primary">{jaga.population} Jiwa</div>
            <div className="text-sm text-muted-foreground">
              {jaga.male} Laki-laki, {jaga.female} Perempuan
            </div>
            <div className="pt-2 border-t">
              <div className="text-xs font-medium">Kepala Jaga:</div>
              <div className="text-xs">{jaga.kepala}</div>
              {jaga.staf !== "-" && (
                <>
                  <div className="text-xs font-medium mt-1">Staf:</div>
                  <div className="text-xs">{jaga.staf}</div>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
