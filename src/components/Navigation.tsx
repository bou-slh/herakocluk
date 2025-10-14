import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  isScrolled: boolean;
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#ana-sayfa', label: 'Ana Sayfa' },
    { href: '#paketler', label: 'Paketlerimiz' },
    { href: '#hakkimizda', label: 'Hakkımızda' },
    { href: '#sertifikalar', label: 'Sertifikalar' },
    { href: '#iletisim', label: 'İletişim' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy shadow-lg' : 'bg-navy/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a
            href="#ana-sayfa"
            className="font-pacifico text-2xl sm:text-3xl text-gold hover:text-gold/80 transition-colors"
          >
            Hera Koçluk
          </a>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-cream hover:text-gold transition-colors duration-200 text-sm lg:text-base"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-cream hover:text-gold transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-navy border-t border-gold/30">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-cream hover:text-gold transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
