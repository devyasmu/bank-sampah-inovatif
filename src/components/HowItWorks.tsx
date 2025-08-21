import { Card, CardContent } from "@/components/ui/card";
import { Trash2, Scale, Coins, Users } from "lucide-react";
import circularEconomyImage from "@/assets/circular-economy.jpg";

const steps = [
  {
    icon: Trash2,
    title: "Kumpulkan Sampah",
    description: "Pisahkan dan kumpulkan sampah recyclable dari rumah Anda sesuai kategori.",
    step: "01"
  },
  {
    icon: Scale,
    title: "Timbang & Catat",
    description: "Bawa ke bank sampah untuk ditimbang dan dicatat dalam buku tabungan Anda.",
    step: "02"
  },
  {
    icon: Coins,
    title: "Dapatkan Poin",
    description: "Terima poin berdasarkan jenis dan berat sampah yang dapat ditukar dengan uang.",
    step: "03"
  },
  {
    icon: Users,
    title: "Dampak Komunitas",
    description: "Kontribusi Anda membantu lingkungan dan ekonomi komunitas sekitar.",
    step: "04"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Bagaimana <span className="text-primary">Cara Kerjanya?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proses sederhana yang mengubah kebiasaan membuang sampah menjadi aktivitas menghasilkan
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="card-gradient rounded-3xl p-8 shadow-card">
              <img 
                src={circularEconomyImage} 
                alt="Circular Economy Concept" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
            
            {/* Floating stats */}
            <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-primary">
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm opacity-90">Sampah Terolah</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground rounded-2xl p-6 shadow-card">
              <div className="text-2xl font-bold">Rp 2.5jt</div>
              <div className="text-sm opacity-90">Rata-rata/bulan</div>
            </div>
          </div>
          
          {/* Steps Section */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <Card key={index} className="card-gradient border-0 shadow-card hover:shadow-hover transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground">
                          <step.icon className="w-8 h-8" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                          {step.step}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;