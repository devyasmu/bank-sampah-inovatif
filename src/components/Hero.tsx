import { Button } from "@/components/ui/button";
import { ArrowRight, Recycle, Coins } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-bank-sampah.jpg";
const Hero = () => {
  const navigate = useNavigate();
  const handleStartSaving = () => {
    navigate('/auth');
  };
  const handleLearnMore = () => {
    const aboutSection = document.getElementById('tentang');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 hero-gradient opacity-90"></div>
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{
      backgroundImage: `url(${heroImage})`
    }}></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <Recycle className="w-5 h-5" />
            <span className="text-sm font-medium">Transformasi Sampah Jadi Berkah</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Bank Sampah
            <span className="block text-secondary-light">Inovatif</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Wujudkan lingkungan bersih sambil meraih keuntungan finansial. 
            Bergabunglah dengan komunitas yang mengubah sampah menjadi tabungan.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">1000+</div>
              <div className="text-white/80">Anggota Aktif</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">50 Ton</div>
              <div className="text-white/80">Sampah Terkumpul</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">500 Juta</div>
              <div className="text-white/80">Rupiah Tersalurkan</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={handleStartSaving} className="bg-white text-primary hover:bg-white/90 shadow-hover transition-all duration-300 font-semibold px-8 py-4 rounded-full">
              <Coins className="w-5 h-5 mr-2" />
              Mulai Menabung Sampah
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" onClick={handleLearnMore} className="border-white hover:bg-white transition-all duration-300 font-semibold px-8 py-4 rounded-full text-[#177c0e]">
              Pelajari Selengkapnya
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-secondary/20 rounded-full backdrop-blur-sm animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-5 w-12 h-12 bg-white/5 rounded-full backdrop-blur-sm animate-pulse delay-500"></div>
    </section>;
};
export default Hero;