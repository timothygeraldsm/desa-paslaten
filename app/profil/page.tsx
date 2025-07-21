import Image from "next/image"
import { SectionTitle } from "@/components/ui/section-title"
import { Timeline } from "@/components/ui/timeline"
import { OfficialCard } from "@/components/ui/official-card"
import { FacilityCard } from "@/components/ui/facility-card"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Stethoscope, Wrench, Crown, FileText, Heart, Calculator, PenTool, MapPin, User } from "lucide-react"
import { DemographicChart } from "@/components/ui/demographic-chart"
import { JagaStatistics } from "@/components/ui/jaga-statistics"

// Sample timeline data
const historyData = [
  {
    year: "Sebelum Kemerdekaan",
    title: "Pemukiman Awal",
    description:
      "Wilayah ini dihuni oleh peladang berpindah dari perbukitan Minahasa Tengah yang menetap karena tanahnya subur, air melimpah, dan dekat laut",
  },
  {
    year: "Era Tradisional",
    title: "Kampung Adat",
    description:
      "Paslaten Satu merupakan bagian dari kampung adat dengan sistem sosial kuat, dipimpin oleh tua-tua kampung dengan tradisi mapalus dan foso kampung",
  },
  {
    year: "24 Januari 2007",
    title: "Pemekaran Desa",
    description:
      "Pemekaran wilayah Paslaten menjadi Paslaten dan Paslaten Satu, dengan Bapak Wilson Walitungkan sebagai Kumtua pertama, disaksikan Bupati Ramoy Lintungan",
  },
  {
    year: "2007-Sekarang",
    title: "Perkembangan Modern",
    description: "Pembangunan fasilitas kesehatan dan ekonomi untuk meningkatkan kesejahteraan masyarakat desa",
  },
]

// Village officials data with icons
const officials = [
  { name: "MAX F.LINTONG, S.Pd", role: "Hukum Tua", icon: Crown, isLeadership: true },
  { name: "MERLIN KOLOTEN", role: "Sekretaris Desa", icon: FileText, isLeadership: true },
  { name: "MARKUS PAISA", role: "Kasie Pemerintahan", icon: Building2 },
  { name: "DOWLES KALIGIS", role: "Kasie Kesejahteraan", icon: Heart },
  { name: "DONAL KEMBAU", role: "Kaur Perencanaan", icon: PenTool },
  { name: "DENNY MONDORINGIN", role: "Kaur Keuangan", icon: Calculator },
  { name: "JHONNY KALIGIS", role: "Kepala Jaga I", icon: MapPin },
  { name: "NOLDY JACOB", role: "Kepala Jaga II", icon: MapPin },
  { name: "DONAL KEMBAU", role: "Kepala Jaga III", icon: MapPin },
  { name: "MILIAN PANGKEY", role: "Kepala Jaga IV", icon: MapPin },
  { name: "VIGEL TARORE", role: "Staf Jaga I", icon: User },
  { name: "RONAL UMBOH", role: "Staf Jaga II", icon: User },
]

export default function ProfilDesa() {
  return (
    <div>
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="section-padding content-container">
          <h1 className="text-3xl md:text-4xl font-bold">Profil Desa Paslaten Satu</h1>
          <p className="mt-2 opacity-90">Mengenal lebih dekat desa kami</p>
        </div>
      </section>

      {/* Sejarah Desa */}
      <section className="py-16 md:py-20">
        <div className="section-padding content-container">
          <SectionTitle title="Sejarah Desa" subtitle="Perjalanan Desa Paslaten Satu dari masa ke masa" />
          <div className="max-w-4xl mx-auto">
            <Timeline items={historyData} />
          </div>
        </div>
      </section>

      {/* Informasi Geografis */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="section-padding content-container">
          <SectionTitle title="Informasi Geografis" subtitle="Lokasi dan batas wilayah Desa Paslaten Satu" />

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <Card>
                <CardContent className="p-6 lg:p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Lokasi Administratif</h3>
                      <ul className="space-y-3 text-sm">
                        <li className="flex justify-between">
                          <span className="font-medium">Kecamatan:</span>
                          <span>Tatapaan</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="font-medium">Kabupaten:</span>
                          <span>Minahasa Selatan</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="font-medium">Provinsi:</span>
                          <span>Sulawesi Utara</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="font-medium">Kode Pos:</span>
                          <span>95352</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="font-medium">Koordinat:</span>
                          <span>1.2884°LU, 124.5579°BT</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Batas Wilayah</h3>
                      <ul className="space-y-3 text-sm">
                        <li className="flex justify-between">
                          <span className="font-medium">Utara:</span>
                          <span>Kecamatan Tombariri</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="font-medium">Selatan:</span>
                          <span>Teluk Amurang</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="font-medium">Timur:</span>
                          <span>Desa Paslaten</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="font-medium">Barat:</span>
                          <span>Desa Wowona</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Peta Desa Paslaten Satu"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Demografi & Statistik */}
      <section className="py-16 md:py-20">
        <div className="section-padding content-container">
          <SectionTitle title="Demografi & Statistik" subtitle="Data penduduk dan statistik Desa Paslaten Satu" />

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            <DemographicChart
              title="Distribusi Usia"
              data={[
                { label: "0-15 tahun", value: 211, total: 816, color: "#0D1440" },
                { label: "16-65 tahun", value: 530, total: 816, color: "#4CAF50" },
                { label: "65+ tahun", value: 75, total: 816, color: "#f59e0b" },
              ]}
            />

            <DemographicChart
              title="Tingkat Pendidikan"
              data={[
                { label: "Belum/Tidak Sekolah", value: 163, total: 816, color: "#ef4444" },
                { label: "TK", value: 18, total: 816, color: "#8b5cf6" },
                { label: "SD", value: 186, total: 816, color: "#0D1440" },
                { label: "SMP", value: 184, total: 816, color: "#4CAF50" },
                { label: "SMA/SMK", value: 253, total: 816, color: "#f59e0b" },
                { label: "D2/D4/S1", value: 12, total: 816, color: "#06b6d4" },
              ]}
            />

            <DemographicChart
              title="Mata Pencaharian"
              data={[
                { label: "Petani", value: 153, total: 219, color: "#4CAF50" },
                { label: "Wiraswasta", value: 37, total: 219, color: "#0D1440" },
                { label: "Tukang", value: 8, total: 219, color: "#f59e0b" },
                { label: "PNS", value: 2, total: 219, color: "#8b5cf6" },
                { label: "IRT", value: 12, total: 219, color: "#ef4444" },
                { label: "Lainnya", value: 7, total: 219, color: "#06b6d4" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Statistik Per Jaga */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="section-padding content-container">
          <SectionTitle
            title="Statistik Per Jaga"
            subtitle="Pembagian wilayah dan penduduk berdasarkan jaga (lingkungan)"
          />
          <JagaStatistics />
        </div>
      </section>

      {/* Perangkat Desa */}
      <section className="py-16 md:py-20">
        <div className="section-padding content-container">
          <SectionTitle title="Perangkat Desa" subtitle="Struktur pemerintahan Desa Paslaten Satu" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {officials.map((official, index) => (
              <OfficialCard
                key={index}
                name={official.name}
                role={official.role}
                icon={official.icon}
                isLeadership={official.isLeadership}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Fasilitas Umum */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="section-padding content-container">
          <SectionTitle title="Fasilitas Umum" subtitle="Fasilitas yang tersedia di Desa Paslaten Satu" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
            <FacilityCard name="Balai Desa" icon={Building2} description="Pusat administrasi desa" />
            <FacilityCard name="Puskesmas" icon={Stethoscope} description="Fasilitas kesehatan masyarakat" />
            <FacilityCard name="Bengkel Motor" icon={Wrench} description="Perbaikan kendaraan bermotor" />
          </div>
        </div>
      </section>
    </div>
  )
}
