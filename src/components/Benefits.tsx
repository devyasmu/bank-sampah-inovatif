import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, TrendingUp, Heart, Award } from "lucide-react";
import environmentalImage from "@/assets/environmental-benefits.jpg";

const benefits = [
  {
    icon: Leaf,
    title: "Lingkungan Bersih",
    description: "Mengurangi sampah di TPA dan menciptakan lingkungan yang lebih sehat untuk generasi mendatang.",
    color: "bg-primary"
  },
  {
    icon: TrendingUp,
    title: "Pendapatan Tambahan",
    description: "Dapatkan penghasilan pasif dari sampah rumah tangga yang biasanya terbuang percuma.",
    color: "bg-secondary"
  },
  {
    icon: Heart,
    title: "Kesehatan Masyarakat",
    description: "Lingkungan bersih meningkatkan kualitas hidup dan kesehatan seluruh komunitas.",
    color: "bg-success"
  },
  {
    icon: Award,
    title: "Prestasi Berkelanjutan",
    description: "Berkontribusi pada pencapaian SDGs dan menjadi bagian dari solusi global.",
    color: "bg-warning"
  }
];

const stats = [
  { label: "CO2 Berkurang", value: "25 Ton", subtitle: "per tahun" },
  { label: "Air Bersih", value: "10.000 L", subtitle: "terhemat" },
  { label: "Pohon Diselamatkan", value: "200+", subtitle: "setara" },
  { label: "Energi Terhemat", value: "5.000 kWh", subtitle: "per bulan" }
];

const Benefits = () => {
  return (
    <section id="manfaat" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Manfaat Berkelanjutan
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Dampak Positif untuk <span className="text-primary">Semua</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Setiap sampah yang Anda tabung menciptakan dampak positif berlipat ganda bagi lingkungan, ekonomi, dan masyarakat
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-gradient border-0 shadow-card hover:shadow-hover transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Image with overlay stats */}
          <div className="relative">
            <div className="card-gradient rounded-3xl p-8 shadow-card">
              <img 
                src={environmentalImage} 
                alt="Environmental Benefits" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
            
            {/* Overlay card with environmental stats */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-primary max-w-sm mx-4">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-center mb-6 text-primary">Dampak Lingkungan</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-primary">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                        <div className="text-xs text-muted-foreground opacity-70">{stat.subtitle}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA Section */}
        <div className="text-center bg-primary rounded-3xl p-12 text-primary-foreground">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Berkontribusi untuk Bumi?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan orang yang sudah merasakan manfaat bank sampah
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <span>Gratis bergabung</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <span>Panduan lengkap</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <span>Komunitas aktif</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;