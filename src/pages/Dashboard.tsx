import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import { TrendingDown, TrendingUp, DollarSign, Target, Lightbulb, Leaf } from "lucide-react";
import dashboardImage from "@/assets/dashboard-image.jpg";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  // Chart data
  const lossReasonData = {
    labels: ['Sisa Makanan Pelanggan', 'Kadaluarsa/Basi', 'Kesalahan Produksi', 'Sisa Persiapan'],
    datasets: [{
      data: [45, 25, 15, 15],
      backgroundColor: [
        'hsl(158, 64%, 52%)',
        'hsl(0, 84%, 60%)',
        'hsl(210, 40%, 60%)',
        'hsl(160, 10%, 45%)'
      ],
      borderColor: ['#ffffff'],
      borderWidth: 2
    }]
  };

  const foodCategoryLossData = {
    labels: ['Daging', 'Sayuran', 'Nasi/Karbohidrat', 'Buah-buahan', 'Susu/Produk Olahan'],
    datasets: [{
      label: 'Kerugian (Rp Juta)',
      data: [1.2, 0.8, 0.3, 0.1, 0.1],
      backgroundColor: 'hsl(158, 64%, 52%)',
      borderColor: 'hsl(158, 64%, 35%)',
      borderWidth: 1
    }]
  };

  const wasteTrendData = {
    labels: ['Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4', 'Minggu 5'],
    datasets: [
      {
        label: 'Sampah Makanan (kg)',
        data: [40, 35, 30, 28, 25],
        borderColor: 'hsl(158, 64%, 52%)',
        backgroundColor: 'hsl(158, 45%, 90%)',
        fill: true,
        tension: 0.3
      },
      {
        label: 'Kerugian (Rp Juta)',
        data: [0.8, 0.7, 0.6, 0.55, 0.5],
        borderColor: 'hsl(0, 84%, 60%)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        fill: true,
        tension: 0.3,
        yAxisID: 'y1'
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
  };

  const lineChartOptions = {
    ...chartOptions,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Sampah Makanan (kg)'
        }
      },
      y1: {
        type: 'linear' as const,
        position: 'right' as const,
        beginAtZero: true,
        grid: {
          drawOnChartArea: false,
        },
        title: {
          display: true,
          text: 'Kerugian (Juta Rupiah)'
        }
      }
    }
  };

  const barChartOptions = {
    ...chartOptions,
    indexAxis: 'y' as const,
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Kerugian (Juta Rupiah)'
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Dashboard Pangu
          </h1>
          <p className="text-muted-foreground text-lg">
            Pantau dan analisis sampah makanan Anda
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-card border-border/50">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <Leaf className="h-8 w-8 text-primary mr-2" />
                <p className="text-sm text-muted-foreground">Total Sampah Makanan (Bulan Ini)</p>
              </div>
              <p className="text-4xl font-black text-primary">150 kg</p>
              <div className="flex items-center justify-center mt-2">
                <TrendingDown className="h-4 w-4 text-success mr-1" />
                <p className="text-sm text-success">10% dari bulan lalu</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-border/50">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <DollarSign className="h-8 w-8 text-destructive mr-2" />
                <p className="text-sm text-muted-foreground">Kerugian Finansial (Bulan Ini)</p>
              </div>
              <p className="text-4xl font-black text-destructive">Rp 2.500.000</p>
              <div className="flex items-center justify-center mt-2">
                <TrendingUp className="h-4 w-4 text-destructive mr-1" />
                <p className="text-sm text-destructive">5% dari bulan lalu</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-border/50">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <Target className="h-8 w-8 text-blue-600 mr-2" />
                <p className="text-sm text-muted-foreground">Potensi Penghematan (Tahunan)</p>
              </div>
              <p className="text-4xl font-black text-blue-600">Rp 30.000.000</p>
              <p className="text-sm text-muted-foreground mt-2">Dengan optimalisasi Pangu</p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold text-foreground mb-6">Analisis Sampah Makanan</h2>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle>Penyebab Utama Kerugian</CardTitle>
              <CardDescription>
                Grafik ini menunjukkan alasan utama di balik terjadinya sampah makanan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <Doughnut data={lossReasonData} options={chartOptions} />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle>Kerugian Finansial per Kategori Makanan</CardTitle>
              <CardDescription>
                Identifikasi kategori makanan yang paling banyak menyumbang kerugian
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <Bar data={foodCategoryLossData} options={barChartOptions} />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle>Tren Sampah Makanan & Kerugian</CardTitle>
              <CardDescription>
                Pantau tren sampah makanan dan kerugian finansial dari waktu ke waktu
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <Line data={wasteTrendData} options={lineChartOptions} />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle>Menu Paling Boros (Top 5)</CardTitle>
              <CardDescription>
                Daftar menu yang paling banyak menyumbang sampah makanan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  { name: 'Nasi Goreng Spesial', amount: '25 kg' },
                  { name: 'Sate Ayam', amount: '18 kg' },
                  { name: 'Gado-Gado', amount: '12 kg' },
                  { name: 'Sop Buntut', amount: '10 kg' },
                  { name: 'Es Teh Manis', amount: '7 kg' },
                ].map((item, index) => (
                  <li key={index} className="flex justify-between items-center bg-secondary/50 p-3 rounded-md">
                    <span className="font-medium">{item.name}</span>
                    <span className="font-semibold text-destructive">{item.amount}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* AI Recommendations */}
        <h2 className="text-2xl font-bold text-foreground mb-6">Rekomendasi & Aksi Cerdas (dari AI)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-card border-l-4 border-primary bg-gradient-to-br from-secondary to-card">
            <CardContent className="p-6">
              <div className="flex items-center mb-3">
                <Lightbulb className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold text-primary">Optimalisasi Porsi Nasi Goreng</h3>
              </div>
              <p className="text-foreground mb-2">
                Berdasarkan data historis, kurangi porsi Nasi Goreng Spesial sebesar <strong>5%</strong> pada hari Selasa dan Rabu. 
                Potensi penghematan: <strong>Rp 500.000/bulan.</strong>
              </p>
              <p className="text-sm text-muted-foreground">💡 Saran cerdas dari AI</p>
            </CardContent>
          </Card>

          <Card className="shadow-card border-l-4 border-primary bg-gradient-to-br from-secondary to-card">
            <CardContent className="p-6">
              <div className="flex items-center mb-3">
                <Lightbulb className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold text-primary">Manajemen Stok Bahan Baku</h3>
              </div>
              <p className="text-foreground mb-2">
                Prediksi menunjukkan kelebihan stok Daging Ayam pada akhir pekan. Pertimbangkan untuk mengurangi pembelian sebesar <strong>10%</strong> pada hari Jumat. 
                Potensi penghematan: <strong>Rp 750.000/bulan.</strong>
              </p>
              <p className="text-sm text-muted-foreground">💡 Saran cerdas dari AI</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;