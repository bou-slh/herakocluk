import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="font-pacifico text-2xl text-gold">Hera Koçluk</h3>
            <p className="text-cream/70 text-sm leading-relaxed">
              Akademik başarınız için profesyonel koçluk ve rehberlik hizmetleri.
            </p>
          </div>

          <div>
            <h4 className="text-cream font-semibold mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#ana-sayfa"
                  className="text-cream/70 hover:text-gold transition-colors text-sm"
                >
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a
                  href="#paketler"
                  className="text-cream/70 hover:text-gold transition-colors text-sm"
                >
                  Paketlerimiz
                </a>
              </li>
              <li>
                <a
                  href="#hakkimizda"
                  className="text-cream/70 hover:text-gold transition-colors text-sm"
                >
                  Hakkımızda
                </a>
              </li>
              <li>
                <a
                  href="#sertifikalar"
                  className="text-cream/70 hover:text-gold transition-colors text-sm"
                >
                  Sertifikalar
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-cream font-semibold mb-4">Sınavlar</h4>
            <ul className="space-y-2 text-cream/70 text-sm">
              <li>YKS Hazırlık</li>
              <li>DGS Hazırlık</li>
              <li>YDS Hazırlık</li>
              <li>IELTS Hazırlık</li>
              <li>TOEFL Hazırlık</li>
            </ul>
          </div>

          <div>
            <h4 className="text-cream font-semibold mb-4">İletişim</h4>
            <div className="space-y-3">
              <a
                href="mailto:info@herakocluk.com"
                className="flex items-center gap-2 text-cream/70 hover:text-gold transition-colors text-sm"
              >
                <Mail size={16} />
                info@herakocluk.com
              </a>
              <a
                href="tel:+905XXXXXXXXX"
                className="flex items-center gap-2 text-cream/70 hover:text-gold transition-colors text-sm"
              >
                <Phone size={16} />
                +90 (5XX) XXX XX XX
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/60 text-sm">
              © {currentYear} Hera Koçluk. Tüm hakları saklıdır.
            </p>

            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-cream/10 hover:bg-gold/20 rounded-full flex items-center justify-center transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook size={20} className="text-cream/70 group-hover:text-gold transition-colors" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-cream/10 hover:bg-gold/20 rounded-full flex items-center justify-center transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-cream/70 group-hover:text-gold transition-colors" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-cream/10 hover:bg-gold/20 rounded-full flex items-center justify-center transition-all duration-300 group"
                aria-label="Twitter"
              >
                <Twitter size={20} className="text-cream/70 group-hover:text-gold transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-cream/10 hover:bg-gold/20 rounded-full flex items-center justify-center transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-cream/70 group-hover:text-gold transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
