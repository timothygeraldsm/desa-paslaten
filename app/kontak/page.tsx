import { SectionTitle } from "@/components/ui/section-title"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, FileText, Building2, Users } from "lucide-react"

export default function Kontak() {
  return (
    <div>
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="section-padding content-container">
          <h1 className="text-3xl md:text-4xl font-bold">Kontak Kami</h1>
          <p className="mt-2 opacity-90">Informasi kontak dan lokasi Desa Paslaten Satu</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="section-padding content-container">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              title="Informasi Kontak"
              subtitle="Temukan kami di lokasi berikut atau hubungi kami untuk informasi lebih lanjut"
              align="center"
            />

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <Card>
                <CardContent className="p-6 lg:p-8">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium mb-1">Alamat</h3>
                        <p className="text-sm text-muted-foreground">
                          Desa Paslaten Satu, Kecamatan Tatapaan
                          <br />
                          Kabupaten Minahasa Selatan, Sulawesi Utara
                          <br />
                          Kode Pos: 95352
                          <br />
                          Koordinat: 1.2884°LU, 124.5579°BT
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium mb-1">Telepon</h3>
                        <p className="text-sm text-muted-foreground">(0431) 123456</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium mb-1">Email</h3>
                        <p className="text-sm text-muted-foreground">info@desapaslaten.id</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium mb-1">Jam Operasional Kantor Desa</h3>
                        <p className="text-sm text-muted-foreground">
                          Senin - Jumat: 08.00 - 16.00 WITA
                          <br />
                          Sabtu, Minggu & Hari Libur: Tutup
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                  <div className="absolute inset-0 bg-muted flex items-center justify-center">
                    <div className="text-center p-6">
                      <h3 className="font-medium mb-2">Peta Lokasi Desa Paslaten Satu</h3>
                      <p className="text-sm text-muted-foreground mb-4">Koordinat: 1.2884°LU, 124.5579°BT</p>
                      <p className="text-xs text-muted-foreground">
                        Link Google Maps: https://maps.app.goo.gl/ZCYhcZYoobFVTGw6A
                      </p>
                    </div>
                  </div>
                </div>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">Cara Menghubungi Kami</h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>• Kunjungi langsung kantor desa pada jam operasional</p>
                      <p>• Hubungi melalui telepon untuk informasi umum</p>
                      <p>• Kirim email untuk pertanyaan atau permintaan informasi</p>
                      <p>• Gunakan link Google Maps untuk navigasi ke lokasi</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="section-padding content-container">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              title="Layanan Kantor Desa"
              subtitle="Berbagai layanan yang tersedia di kantor Desa Paslaten Satu"
              align="center"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Administrasi Kependudukan</h3>
                  <p className="text-sm text-muted-foreground">Pengurusan KTP, KK, dan dokumen kependudukan lainnya</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Surat Keterangan</h3>
                  <p className="text-sm text-muted-foreground">
                    Penerbitan berbagai surat keterangan dan surat pengantar
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Pelayanan Masyarakat</h3>
                  <p className="text-sm text-muted-foreground">Konsultasi dan informasi terkait program desa</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
