import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Leaf, Award, ArrowRight } from "lucide-react";

const stats = [
  { number: "5+", label: "Tahun Pengalaman", description: "Melayani komunitas" },
  { number: "50+", label: "Mitra Komunitas", description: "Di seluruh Indonesia" },
  { number: "10,000+", label: "Anggota Aktif", description: "Bergabung dengan kami" },
  { number: "100+", label: "Ton Sampah", description: "Berhasil didaur ulang" }
];

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Komitmen penuh terhadap kelestarian lingkungan dan masa depan yang berkelanjutan.",
    color: "bg-primary"
  },
  {
    icon: Users,
    title: "Community First",
    description: "Mengutamakan kepentingan komunitas dan membangun ekosistem yang saling menguntungkan.",
    color: "bg-secondary"
  },
  {
    icon: Target,
    title: "Innovation",
    description: "Terus berinovasi dengan teknologi dan metode terbaru untuk hasil yang optimal.",
    color: "bg-success"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Memberikan pelayanan terbaik dan hasil yang berkualitas tinggi untuk semua anggota.",
    color: "bg-warning"
  }
];

const About = () => {
  return (
    <section id="tentang" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Tentang Kami
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Membangun <span className="text-primary">Masa Depan</span> Berkelanjutan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bank Sampah Inovatif hadir sebagai solusi cerdas yang menggabungkan kepedulian lingkungan 
            dengan pemberdayaan ekonomi masyarakat
          </p>
        </div>

        {/* Mission Statement */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold mb-6">Misi Kami</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Mengubah paradigma masyarakat tentang sampah dari sesuatu yang tidak berguna menjadi 
              aset berharga yang dapat meningkatkan kesejahteraan ekonomi dan kelestarian lingkungan.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Melalui sistem bank sampah yang inovatif, kami memfasilitasi masyarakat untuk berpartisipasi 
              aktif dalam program daur ulang sambil mendapatkan keuntungan finansial yang nyata.
            </p>
            <Button className="shadow-primary">
              <Users className="w-5 h-5 mr-2" />
              Bergabung dengan Misi Kami
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="card-gradient border-0 shadow-card text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Nilai-Nilai Kami</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="card-gradient border-0 shadow-card hover:shadow-hover transition-all duration-300 group text-center">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;