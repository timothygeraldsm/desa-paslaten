import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { StatCard } from "@/components/ui/stat-card"
import { SectionTitle } from "@/components/ui/section-title"
import { Users, MapPin, Calendar } from "lucide-react"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-pattern text-white">
        <div className="section-padding content-container py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">Selamat Datang di Desa Paslaten Satu</h1>
              <p className="text-lg opacity-90 leading-relaxed">
                Desa di pesisir Teluk Amurang, Kecamatan Tatapaan, dengan nama yang berarti 'diapit' - jalur perlintasan
                bersejarah
              </p>
              <Button
                asChild
                className="bg-white hover:bg-gray-100 text-primary font-semibold px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white hover:border-gray-200"
              >
                <Link href="/profil">Jelajahi Profil Desa</Link>
              </Button>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/foto/tugu.jpeg"
                alt="Desa Paslaten Satu"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-20">
        <div className="section-padding content-container">
          <SectionTitle
            title="Statistik Desa"
            subtitle="Informasi singkat mengenai Desa Paslaten Satu"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <StatCard title="Total Penduduk" value="816" icon={Users} description="416 Laki-laki, 400 Perempuan" />
            <StatCard title="Luas Wilayah" value="21,35 km²" icon={MapPin} description="Ketinggian 85 mdpl" />
            <StatCard title="Tahun Pemekaran" value="2007" icon={Calendar} description="24 Januari 2007" />
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="section-padding content-container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-medium italic leading-relaxed">
              "Paslaten - yang berarti 'diapit' atau 'diselipkan', mencerminkan posisi strategis desa sebagai jalur
              perlintasan bersejarah"
            </h2>
            <p className="text-muted-foreground">Makna Nama Desa Paslaten Satu</p>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 md:py-20">
        <div className="section-padding content-container">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image src="/foto/dodol.jpeg" alt="Budaya Desa" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">Kekayaan Budaya dan Tradisi</h2>
              <p className="text-muted-foreground leading-relaxed">
                Desa Paslaten Satu memiliki sejarah sebagai jalur perlintasan yang menghubungkan wilayah-wilayah di
                Minahasa Selatan. Masyarakat desa masih menjaga tradisi adat Minahasa seperti mapalus dan foso kampung
                yang memperkuat ikatan sosial.
              </p>
              <Button asChild variant="outline" className="font-medium bg-transparent">
                <Link href="/galeri">Lihat Galeri</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
