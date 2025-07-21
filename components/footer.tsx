import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="section-padding content-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Desa Paslaten Satu</h3>
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              Desa Paslaten Satu - jalur perlintasan bersejarah di pesisir Teluk Amurang
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Tautan</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-secondary transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/profil" className="hover:text-secondary transition-colors">
                  Profil Desa
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="hover:text-secondary transition-colors">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-secondary transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 shrink-0 text-secondary" />
                <span>Desa Paslaten Satu, Kec. Tatapaan, Kab. Minahasa Selatan, Sulawesi Utara 95352</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 shrink-0 text-secondary" />
                <span>(0431) 123456</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 shrink-0 text-secondary" />
                <span>info@desapaslaten.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} Desa Paslaten Satu. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
