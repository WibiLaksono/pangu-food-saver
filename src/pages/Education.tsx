import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import { BookOpen, Users, Target, Leaf, ChefHat, BarChart3, Lightbulb, Recycle } from "lucide-react";
import educationImage from "@/assets/education-image.jpg";

const Education = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Edukasi Food Waste
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Pelajari cara menggunakan Pangu dan tingkatkan awareness tentang food waste
          </p>
          <div className="max-w-2xl mx-auto rounded-lg overflow-hidden shadow-card">
            <img 
              src={educationImage} 
              alt="Food waste education" 
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* How to Use Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Cara Menggunakan Aplikasi Pangu
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="shadow-card border-border/50 hover:shadow-glow transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-primary to-primary-glow rounded-full w-16 h-16 flex items-center justify-center">
                  <ChefHat className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-primary">1. Input Data</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Masukkan data sampah makanan baik sisa makanan jadi maupun bahan makanan yang terbuang
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border/50 hover:shadow-glow transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-primary to-primary-glow rounded-full w-16 h-16 flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-primary">2. Analisis Data</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Lihat dashboard untuk menganalisis pola sampah makanan dan kerugian finansial
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border/50 hover:shadow-glow transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-primary to-primary-glow rounded-full w-16 h-16 flex items-center justify-center">
                  <Lightbulb className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-primary">3. Terapkan Saran</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Ikuti rekomendasi AI untuk mengurangi food waste dan menghemat biaya operasional
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Panduan Lengkap Penggunaan
          </h2>
          
          <Card className="shadow-card border-border/50 max-w-4xl mx-auto">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    Bagaimana cara menginput data sampah makanan?
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p>1. Pilih tab "Sisa Makanan Jadi" atau "Sisa Bahan Makanan"</p>
                      <p>2. Pilih nama makanan dari dropdown (sistem akan otomatis mengisi jenis dan harga)</p>
                      <p>3. Pilih alasan pembuangan makanan</p>
                      <p>4. Tentukan kategori berat sampah (ringan, sedang, atau berat)</p>
                      <p>5. Klik "Simpan Data" untuk menyimpan informasi</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    Apa fungsi dari dashboard analitik?
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p>Dashboard menyediakan:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Statistik total sampah makanan dan kerugian finansial</li>
                        <li>Grafik penyebab utama food waste</li>
                        <li>Analisis kerugian per kategori makanan</li>
                        <li>Tren sampah makanan dari waktu ke waktu</li>
                        <li>Daftar menu yang paling boros</li>
                        <li>Rekomendasi AI untuk optimalisasi</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    Bagaimana sistem memberikan rekomendasi?
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p>Sistem AI Pangu menganalisis data historis Anda untuk memberikan:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Saran optimalisasi porsi makanan berdasarkan pola pembuangan</li>
                        <li>Prediksi kelebihan stok bahan baku</li>
                        <li>Rekomendasi timing pembelian bahan</li>
                        <li>Strategi pengurangan waste untuk menu tertentu</li>
                        <li>Estimasi potensi penghematan finansial</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    Apa arti dari kategori berat sampah?
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p><strong>Ringan (&lt; 25%):</strong> Sampah minimal, masih dalam batas wajar</p>
                      <p><strong>Sedang (25-50%):</strong> Sampah cukup signifikan, perlu perhatian</p>
                      <p><strong>Berat (&gt; 50%):</strong> Sampah berlebihan, memerlukan tindakan segera</p>
                      <p className="text-muted-foreground">Kategori ini membantu memprioritaskan tindakan perbaikan.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Food Waste Education */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Edukasi Food Waste
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-card border-border/50 hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="mx-auto mb-2 p-2 bg-gradient-to-br from-primary to-primary-glow rounded-lg w-12 h-12 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-center text-primary">Dampak Global</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  1/3 makanan dunia terbuang sia-sia. Food waste menyumbang 8-10% emisi gas rumah kaca global.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border/50 hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="mx-auto mb-2 p-2 bg-gradient-to-br from-primary to-primary-glow rounded-lg w-12 h-12 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-center text-primary">Dampak Sosial</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  828 juta orang kelaparan, sementara makanan senilai $1 triliun terbuang setiap tahun.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border/50 hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="mx-auto mb-2 p-2 bg-gradient-to-br from-primary to-primary-glow rounded-lg w-12 h-12 flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-center text-primary">Dampak Lingkungan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Food waste menghasilkan 3.3 gigaton CO2, setara dengan polusi negara ketiga terbesar.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border/50 hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="mx-auto mb-2 p-2 bg-gradient-to-br from-primary to-primary-glow rounded-lg w-12 h-12 flex items-center justify-center">
                  <Recycle className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-center text-primary">Solusi Nyata</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Pengurangan 25% food waste dapat memberi makan 870 juta orang yang kelaparan.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Tips Mengurangi Food Waste
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="text-primary">Perencanaan Menu</CardTitle>
                <CardDescription>Strategi untuk restoran dan bisnis makanan</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="font-medium text-primary mr-2">•</span>
                    Analisis data penjualan untuk prediksi demand yang akurat
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-primary mr-2">•</span>
                    Implementasi sistem FIFO (First In, First Out) untuk stok
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-primary mr-2">•</span>
                    Ciptakan menu fleksibel yang bisa memanfaatkan sisa bahan
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-primary mr-2">•</span>
                    Kerjasama dengan supplier untuk pengiriman just-in-time
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="text-primary">Pengelolaan Sisa</CardTitle>
                <CardDescription>Cara bijak menangani food waste</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="font-medium text-primary mr-2">•</span>
                    Donasi makanan layak konsumsi ke food bank atau komunitas
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-primary mr-2">•</span>
                    Kompos organik untuk limbah sayuran dan buah
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-primary mr-2">•</span>
                    Olah sisa makanan menjadi produk baru (smoothie dari buah sisa)
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-primary mr-2">•</span>
                    Edukasi staff tentang portion control dan food handling
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="shadow-card border-border/50 bg-gradient-to-br from-secondary to-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Mulai Kontribusi Anda</h3>
              <p className="text-muted-foreground mb-6">
                Setiap langkah kecil dalam mengurangi food waste adalah kontribusi besar untuk planet kita. 
                Mari bersama-sama menciptakan dunia yang lebih berkelanjutan.
              </p>
              <Button className="bg-gradient-to-r from-primary to-primary-glow shadow-elegant hover:shadow-glow">
                Mulai Input Data Sekarang
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Education;