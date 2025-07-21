import { SectionTitle } from "@/components/ui/section-title"
import { GalleryItem } from "@/components/ui/gallery-item"

export default function Galeri() {
  // Sample gallery data
  const photos = [
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Pantai Desa",
      caption: "Keindahan pantai di Desa Paslaten Satu",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Nelayan",
      caption: "Aktivitas nelayan di pagi hari",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Pertanian",
      caption: "Lahan pertanian warga desa",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Tarian Tradisional",
      caption: "Pertunjukan tarian tradisional",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Perayaan Desa",
      caption: "Perayaan hari jadi desa",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Kuliner Lokal",
      caption: "Hidangan khas Minahasa",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Pertemuan Warga",
      caption: "Musyawarah desa",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Pemandangan",
      caption: "Pemandangan alam sekitar desa",
    },
  ]

  return (
    <div>
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="section-padding content-container">
          <h1 className="text-3xl md:text-4xl font-bold">Galeri Desa</h1>
          <p className="mt-2 opacity-90">Momen dan keindahan Desa Paslaten Satu</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="section-padding content-container">
          <SectionTitle
            title="Foto Desa"
            subtitle="Keindahan alam dan kehidupan di Desa Paslaten Satu"
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {photos.map((photo, index) => (
              <GalleryItem key={index} src={photo.src} alt={photo.alt} caption={photo.caption} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted">
        <div className="section-padding content-container">
          <SectionTitle
            title="Tradisi dan Budaya Lokal"
            subtitle="Warisan budaya yang masih terjaga di Desa Paslaten Satu"
            align="center"
          />

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">Video Dokumentasi Desa</h3>
                  <p>Video dokumentasi kegiatan dan tradisi desa akan ditampilkan di sini</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
