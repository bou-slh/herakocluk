import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  isScrolled: boolean;
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navLinks = [
    { href: isHomePage ? '#ana-sayfa' : '/#ana-sayfa', label: 'Ana Sayfa', isHash: true },
    { href: isHomePage ? '#paketler' : '/#paketler', label: 'Paketlerimiz', isHash: true },
    { href: '/fiyatlar', label: 'Fiyatlar', isHash: false },
    { href: isHomePage ? '#hakkimizda' : '/#hakkimizda', label: 'Hakkımızda', isHash: true },
    // { href: isHomePage ? '#sertifikalar' : '/#sertifikalar', label: 'Sertifikalar', isHash: true },
    { href: '/iletisim', label: 'İletişim', isHash: false },
  ];

  return (
     <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy shadow-lg' : 'bg-navy/90 backdrop-blur-sm'
      }`}
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
  <div className="flex justify-between items-center h-20">
          <Link
            to="/"
            className="flex items-center gap-5 sm:gap-6 font-pacifico text-2xl sm:text-3xl text-gold hover:text-gold/80 transition-colors"
            aria-label="Hera Koçluk ana sayfa"
          >
            {/* Logo image served from public/hera.jpg */}
            {/* Prefer a transparent PNG logo if available, fall back to the existing JPG */}
            <img
              src={'/hera.png'}
              alt="Hera Koçluk logo"
              className="w-auto h-auto max-h-20 object-contain"
              style={{ display: 'block' }}
              loading="lazy"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                if (target.src.endsWith('/hera.png')) target.src = '/hera.jpg';
              }}
            />

            <span>Hera Koçluk</span>
          </Link>

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
              link.isHash ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-cream hover:text-gold transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-cream hover:text-gold transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
