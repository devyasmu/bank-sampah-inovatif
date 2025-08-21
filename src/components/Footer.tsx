import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Recycle, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubscribing(true);
    
    // Simulate newsletter subscription
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Berhasil berlangganan!",
      description: "Terima kasih telah berlangganan newsletter kami.",
    });
    
    setEmail("");
    setIsSubscribing(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" }
  ];

  const quickLinks = [
    { label: "Cara Kerja", sectionId: "cara-kerja" },
    { label: "Manfaat", sectionId: "manfaat" },
    { label: "Tentang Kami", sectionId: "tentang" },
    { label: "Kontak", sectionId: "kontak" }
  ];

  const contactInfo = [
    { icon: Mail, text: "info@banksampah.id" },
    { icon: Phone, text: "+62 21 1234 5678" },
    { icon: MapPin, text: "Jakarta, Indonesia" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <Recycle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Bank Sampah</h3>
                <p className="text-sm opacity-80">Inovatif</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Transformasi sampah menjadi berkah melalui sistem bank sampah yang inovatif dan berkelanjutan.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="w-10 h-10 p-0 hover:bg-white/20"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.sectionId)}
                    className="text-sm opacity-90 hover:opacity-100 transition-opacity duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-center gap-3">
                  <contact.icon className="w-5 h-5 opacity-80" />
                  <span className="text-sm opacity-90">{contact.text}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-sm opacity-90 mb-4">
              Dapatkan update terbaru tentang program bank sampah
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Email Anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/20 border-white/30 placeholder:text-white/70 text-white"
                required
              />
              <Button
                type="submit"
                size="sm"
                className="w-full bg-white text-primary hover:bg-white/90"
                disabled={isSubscribing}
              >
                {isSubscribing ? "Berlangganan..." : "Berlangganan"}
              </Button>
            </form>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-80">
            © 2024 Bank Sampah Inovatif. Semua hak cipta dilindungi.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity duration-200">
              Kebijakan Privasi
            </a>
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity duration-200">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;