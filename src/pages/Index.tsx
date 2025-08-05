import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/ui/navbar";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Target, Users, Leaf, TrendingDown, DollarSign, Shield } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

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
                src={heroImage} 
                alt="Food waste prevention" 
                className="relative z-10 w-full h-96 object-cover rounded-3xl shadow-glow"
              />
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
