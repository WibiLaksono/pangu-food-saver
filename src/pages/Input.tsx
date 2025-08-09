import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input as InputField } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/ui/navbar";
import { Package, ChefHat } from "lucide-react";

const foodDatabase = {
  "Nasi Putih": { type: "Karbohidrat", price: 8000 },
  "Ayam Goreng": { type: "Protein", price: 25000 },
  "Sayur Bayam": { type: "Sayuran", price: 5000 },
  "Tempe Goreng": { type: "Protein", price: 12000 },
  "Rendang": { type: "Protein", price: 35000 },
  "Gado-gado": { type: "Sayuran", price: 15000 },
  "Sate Ayam": { type: "Protein", price: 30000 },
  "Nasi Goreng": { type: "Karbohidrat", price: 20000 },
  "Sop Buntut": { type: "Protein", price: 45000 },
};

const Input = () => {
  const { toast } = useToast();
  const [selectedFood, setSelectedFood] = useState("");
  const [autoPrice, setAutoPrice] = useState("");
  const [autoType, setAutoType] = useState("");

  const handleFoodSelection = (foodName: string) => {
    setSelectedFood(foodName);
    if (foodDatabase[foodName as keyof typeof foodDatabase]) {
      const foodData = foodDatabase[foodName as keyof typeof foodDatabase];
      setAutoPrice(foodData.price.toString());
      setAutoType(foodData.type);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Data berhasil disimpan!",
      description: "Data sampah makanan telah tersimpan dalam sistem.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Input Data Sampah Makanan
          </h1>
          <p className="text-muted-foreground text-lg">
            Catat dan pantau sampah makanan untuk mengurangi pemborosan
          </p>
        </div>

        <Tabs defaultValue="food" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="food" className="flex items-center gap-2">
              <ChefHat className="h-4 w-4" />
              Sisa Makanan Jadi
            </TabsTrigger>
            <TabsTrigger value="ingredients" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Sisa Bahan Makanan
            </TabsTrigger>
          </TabsList>

          <TabsContent value="food">
            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="text-primary">Input Sisa Makanan Jadi</CardTitle>
                <CardDescription>
                  Masukkan data makanan jadi yang terbuang
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="food-name">Nama Makanan</Label>
                      <Select onValueChange={handleFoodSelection}>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih makanan" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.keys(foodDatabase).map((food) => (
                            <SelectItem key={food} value={food}>
                              {food}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>


                    <div className="space-y-2">
                      <Label htmlFor="price">Harga Rata-rata (Rp)</Label>
                      <InputField
                        id="price"
                        type="number"
                        value={autoPrice}
                        onChange={(e) => setAutoPrice(e.target.value)}
                        placeholder="Otomatis terisi"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="reason">Alasan Dibuang</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih alasan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="expired">Basi/Kadaluarsa</SelectItem>
                          <SelectItem value="leftover">Sisa Makanan</SelectItem>
                          <SelectItem value="production">Masalah Produksi</SelectItem>
                          <SelectItem value="waste">Sisa Bahan (kulit, daun, tulang)</SelectItem>
                          <SelectItem value="other">Lain-lain</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label>Kategori Berat Sampah</Label>
                    <RadioGroup defaultValue="light">
                      <div className="flex items-center space-x-2 p-3 rounded-lg border border-border hover:bg-secondary/50 transition-colors">
                        <RadioGroupItem value="light" id="light" />
                        <Label htmlFor="light" className="cursor-pointer">
                          <span className="font-medium">Ringan (&lt; 25%)</span>
                          <p className="text-sm text-muted-foreground">Sampah minimal dari porsi makanan</p>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 rounded-lg border border-border hover:bg-secondary/50 transition-colors">
                        <RadioGroupItem value="medium" id="medium" />
                        <Label htmlFor="medium" className="cursor-pointer">
                          <span className="font-medium text-warning">Sedang (25-50%)</span>
                          <p className="text-sm text-muted-foreground">Sampah cukup signifikan</p>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 rounded-lg border border-border hover:bg-secondary/50 transition-colors">
                        <RadioGroupItem value="heavy" id="heavy" />
                        <Label htmlFor="heavy" className="cursor-pointer">
                          <span className="font-medium text-destructive">Berat (&gt; 50%)</span>
                          <p className="text-sm text-muted-foreground">Sampah berlebihan, perlu perhatian</p>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-primary-glow shadow-elegant hover:shadow-glow">
                    Simpan Data Sampah Makanan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ingredients">
            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="text-primary">Input Sisa Bahan Makanan</CardTitle>
                <CardDescription>
                  Masukkan data bahan makanan yang terbuang
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="ingredient-name">Nama Bahan</Label>
                      <InputField
                        id="ingredient-name"
                        placeholder="Contoh: kentang, bawang putih"
                      />
                    </div>


                    <div className="space-y-2">
                      <Label htmlFor="ingredient-price">Harga Rata-rata (Rp)</Label>
                      <InputField
                        id="ingredient-price"
                        type="number"
                        placeholder="Masukkan harga"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ingredient-reason">Alasan Dibuang</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih alasan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="expired">Basi/Kadaluarsa</SelectItem>
                          <SelectItem value="preparation">Limbah Persiapan</SelectItem>
                          <SelectItem value="overstock">Kelebihan Stok</SelectItem>
                          <SelectItem value="quality">Kualitas Buruk</SelectItem>
                          <SelectItem value="other">Lain-lain</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label>Kategori Berat Sampah</Label>
                    <RadioGroup defaultValue="light">
                      <div className="flex items-center space-x-2 p-3 rounded-lg border border-border hover:bg-secondary/50 transition-colors">
                        <RadioGroupItem value="light" id="ingredient-light" />
                        <Label htmlFor="ingredient-light" className="cursor-pointer">
                          <span className="font-medium">Ringan (&lt; 25%)</span>
                          <p className="text-sm text-muted-foreground">Sampah minimal dari bahan</p>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 rounded-lg border border-border hover:bg-secondary/50 transition-colors">
                        <RadioGroupItem value="medium" id="ingredient-medium" />
                        <Label htmlFor="ingredient-medium" className="cursor-pointer">
                          <span className="font-medium text-warning">Sedang (25-50%)</span>
                          <p className="text-sm text-muted-foreground">Sampah cukup signifikan</p>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 rounded-lg border border-border hover:bg-secondary/50 transition-colors">
                        <RadioGroupItem value="heavy" id="ingredient-heavy" />
                        <Label htmlFor="ingredient-heavy" className="cursor-pointer">
                          <span className="font-medium text-destructive">Berat (&gt; 50%)</span>
                          <p className="text-sm text-muted-foreground">Sampah berlebihan, perlu perhatian</p>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-primary-glow shadow-elegant hover:shadow-glow">
                    Simpan Data Bahan Makanan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Input;