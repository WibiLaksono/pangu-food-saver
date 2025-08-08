import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/ui/navbar";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Target, Users, Leaf, TrendingDown, DollarSign, Shield } from "lucide-react";
import heroVideoSimulation from "@/assets/hero-video-simulation.jpg";
import foodWasteSteps from "@/assets/food-waste-steps.jpg";
import wasteStatistics from "@/assets/waste-statistics.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background to-secondary">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-primary font-medium">
                  <Leaf className="h-4 w-4 mr-2" />
                  Solusi Food Waste Terdepan
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-foreground">Kurangi </span>
                  <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                    Food Waste
                  </span>
                  <span className="text-foreground"> dengan</span>
                  <br />
                  <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                    Pangu
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-md">
                  Platform AI yang membantu bisnis makanan mengurangi pemborosan, menghemat biaya, dan berkontribusi untuk lingkungan yang lebih berkelanjutan.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/input">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow shadow-elegant hover:shadow-glow transition-all duration-300">
                    Mulai Input Data
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-secondary">
                    Lihat Dashboard
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">30%</div>
                  <div className="text-sm text-muted-foreground">Pengurangan Waste</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Rp 30M</div>
                  <div className="text-sm text-muted-foreground">Potensi Penghematan</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Bisnis Terdaftar</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-3xl blur-3xl"></div>
              <img 
                src={heroVideoSimulation} 
                alt="Video simulasi penggunaan Pangu untuk mengurangi food waste" 
                className="relative z-10 w-full h-96 object-cover rounded-3xl shadow-glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* User Flow / Roadmap Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Roadmap Penggunaan <span className="text-primary">Pangu</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ikuti langkah-langkah berikut untuk memaksimalkan manfaat Pangu
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-primary to-primary-glow"></div>
              
              <div className="space-y-16">
                <div className="flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <div className="bg-background p-6 rounded-2xl shadow-card border border-border/50">
                      <h3 className="text-xl font-bold text-primary mb-2">1. Mulai Input Data</h3>
                      <p className="text-muted-foreground">Catat sampah makanan harian Anda melalui halaman input data. Sistem akan otomatis mengisi jenis dan harga makanan.</p>
                      <Link to="/input" className="inline-block mt-3">
                        <Button variant="outline" size="sm">Ke Halaman Input</Button>
                      </Link>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold z-10 relative">
                    1
                  </div>
                  <div className="flex-1 pl-8"></div>
                </div>

                <div className="flex items-center">
                  <div className="flex-1 pr-8"></div>
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold z-10 relative">
                    2
                  </div>
                  <div className="flex-1 text-left pl-8">
                    <div className="bg-background p-6 rounded-2xl shadow-card border border-border/50">
                      <h3 className="text-xl font-bold text-primary mb-2">2. Pantau Dashboard</h3>
                      <p className="text-muted-foreground">Lihat analisis real-time dari data yang telah diinput. Dashboard menampilkan tren, pola, dan area yang perlu diperbaiki.</p>
                      <Link to="/dashboard" className="inline-block mt-3">
                        <Button variant="outline" size="sm">Ke Dashboard</Button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <div className="bg-background p-6 rounded-2xl shadow-card border border-border/50">
                      <h3 className="text-xl font-bold text-primary mb-2">3. Pelajari Edukasi</h3>
                      <p className="text-muted-foreground">Manfaatkan materi edukasi untuk memahami cara terbaik mengurangi food waste di bisnis Anda.</p>
                      <Link to="/education" className="inline-block mt-3">
                        <Button variant="outline" size="sm">Ke Halaman Edukasi</Button>
                      </Link>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold z-10 relative">
                    3
                  </div>
                  <div className="flex-1 pl-8"></div>
                </div>

                <div className="flex items-center">
                  <div className="flex-1 pr-8"></div>
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold z-10 relative">
                    4
                  </div>
                  <div className="flex-1 text-left pl-8">
                    <div className="bg-background p-6 rounded-2xl shadow-card border border-border/50">
                      <h3 className="text-xl font-bold text-primary mb-2">4. Implementasi & Optimasi</h3>
                      <p className="text-muted-foreground">Terapkan rekomendasi AI dan pantau progress pengurangan food waste secara berkelanjutan.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Mengapa Memilih <span className="text-primary">Pangu</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Solusi komprehensif untuk mengelola food waste dengan teknologi AI terdepan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-card border-border/50 hover:shadow-glow transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-primary to-primary-glow rounded-2xl w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="h-10 w-10 text-primary-foreground" />
                </div>
                <CardTitle className="text-primary">Analisis Data Real-time</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Dashboard komprehensif yang menampilkan pola food waste, tren kerugian finansial, dan rekomendasi AI untuk optimalisasi.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border/50 hover:shadow-glow transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-primary to-primary-glow rounded-2xl w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-10 w-10 text-primary-foreground" />
                </div>
                <CardTitle className="text-primary">Rekomendasi AI Cerdas</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Algoritma machine learning yang memberikan saran personalisasi untuk mengurangi waste berdasarkan data historis bisnis Anda.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border/50 hover:shadow-glow transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-primary to-primary-glow rounded-2xl w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-10 w-10 text-primary-foreground" />
                </div>
                <CardTitle className="text-primary">Mudah & Aman</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Interface yang user-friendly dengan sistem keamanan data tingkat enterprise. Input data dengan mudah, analisis otomatis.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-background to-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Manfaat Nyata untuk Bisnis Anda
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Lebih dari sekedar tracking, Pangu memberikan dampak positif yang terukur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 hover:bg-card transition-all duration-300">
              <div className="mx-auto mb-4 p-3 bg-success/10 rounded-full w-16 h-16 flex items-center justify-center">
                <TrendingDown className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Kurangi Biaya</h3>
              <p className="text-muted-foreground">Hemat hingga 30% biaya operasional dengan pengurangan food waste yang optimal.</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 hover:bg-card transition-all duration-300">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Ramah Lingkungan</h3>
              <p className="text-muted-foreground">Kontribusi nyata untuk pengurangan emisi karbon dan pelestarian lingkungan.</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 hover:bg-card transition-all duration-300">
              <div className="mx-auto mb-4 p-3 bg-blue-500/10 rounded-full w-16 h-16 flex items-center justify-center">
                <DollarSign className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">ROI Tinggi</h3>
              <p className="text-muted-foreground">Return on investment yang cepat dengan penghematan biaya yang signifikan.</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 hover:bg-card transition-all duration-300">
              <div className="mx-auto mb-4 p-3 bg-purple-500/10 rounded-full w-16 h-16 flex items-center justify-center">
                <Users className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Brand Image</h3>
              <p className="text-muted-foreground">Tingkatkan reputasi sebagai bisnis yang peduli sustainability dan lingkungan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Graphics Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Edukasi <span className="text-primary">Food Waste</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pelajari langkah-langkah mudah untuk mengurangi pemborosan makanan
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-3xl blur-2xl"></div>
              <img 
                src={foodWasteSteps} 
                alt="Langkah-langkah mencegah food waste" 
                className="relative z-10 w-full h-80 object-cover rounded-3xl shadow-glow"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">4 Langkah Mudah Cegah Food Waste</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Track & Input Data</h4>
                    <p className="text-muted-foreground">Catat setiap sampah makanan yang terjadi</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Analisis Pola</h4>
                    <p className="text-muted-foreground">Identifikasi pattern dan tren pemborosan</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Rekomendasi AI</h4>
                    <p className="text-muted-foreground">Dapatkan saran cerdas dari sistem AI</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Implementasi</h4>
                    <p className="text-muted-foreground">Terapkan solusi dan pantau hasilnya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
            <div className="space-y-6 lg:order-2">
              <h3 className="text-3xl font-bold text-foreground">Statistik Food Waste Indonesia</h3>
              <div className="space-y-4">
                <div className="bg-card p-4 rounded-lg border border-border/50">
                  <div className="text-2xl font-bold text-destructive">48 Juta Ton</div>
                  <div className="text-muted-foreground">Sampah makanan per tahun di Indonesia</div>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border/50">
                  <div className="text-2xl font-bold text-warning">Rp 551 Triliun</div>
                  <div className="text-muted-foreground">Kerugian ekonomi akibat food waste</div>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border/50">
                  <div className="text-2xl font-bold text-primary">30%</div>
                  <div className="text-muted-foreground">Pengurangan yang bisa dicapai dengan Pangu</div>
                </div>
              </div>
            </div>
            <div className="relative lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-3xl blur-2xl"></div>
              <img 
                src={wasteStatistics} 
                alt="Statistik food waste Indonesia" 
                className="relative z-10 w-full h-80 object-cover rounded-3xl shadow-glow"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-background to-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Testimoni <span className="text-primary">Pengguna</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dengar langsung dari bisnis yang telah merasakan manfaat Pangu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-card border-border/50 hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-4">
                    BS
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Budi Santoso</h4>
                    <p className="text-sm text-muted-foreground">Owner Warung Nasi Budi</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "Pangu membantu saya mengurangi sampah makanan hingga 25%. Sekarang saya bisa hemat Rp 1.5 juta per bulan dan lebih aware tentang sustainability."
                </p>
                <div className="flex text-primary">
                  ⭐⭐⭐⭐⭐
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border/50 hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-4">
                    SM
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Sari Melati</h4>
                    <p className="text-sm text-muted-foreground">Manager Restoran Padang Sari</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "Dashboard Pangu sangat membantu menganalisis pola pemborosan. Rekomendasi AI-nya akurat dan mudah diimplementasikan. ROI-nya cepat sekali!"
                </p>
                <div className="flex text-primary">
                  ⭐⭐⭐⭐⭐
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border/50 hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-4">
                    AF
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Ahmad Fauzi</h4>
                    <p className="text-sm text-muted-foreground">Chef Executive Hotel Bintang Lima</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "Sebagai chef, saya sangat peduli dengan food waste. Pangu memberikan insight yang mendalam dan membantu hotel kami mencapai target sustainability."
                </p>
                <div className="flex text-primary">
                  ⭐⭐⭐⭐⭐
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Siap Mengurangi Food Waste Anda?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Bergabunglah dengan ribuan bisnis yang telah merasakan manfaat nyata dari penggunaan Pangu. 
              Mulai perjalanan sustainability Anda hari ini.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/input">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow shadow-elegant hover:shadow-glow">
                  Mulai Gratis Sekarang
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/education">
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-secondary">
                  Pelajari Lebih Lanjut
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Leaf className="h-6 w-6 text-primary mr-2" />
            <span className="text-2xl font-bold">Pangu</span>
          </div>
          <p className="text-muted-foreground">
            &copy; 2025 Pangu. Semua Hak Dilindungi. Bersama menciptakan dunia tanpa food waste.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
