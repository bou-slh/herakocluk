import { Check } from 'lucide-react';

const packages = [
  {
    title: 'Rehberlik Paketi',
    color: 'from-beige to-beige/70',
    features: [
      'Ücretsiz seviye tespit sınavı ve analizi',
      'Haftalık deneme analizleri',
      'YKS için aylık ebeveyn raporu',
      'Haftalık ders çalışma programı',
      'Gelişim takibi + aylık detaylı rapor',
    ],
  },
  {
    title: 'Destek Paketi',
    color: 'from-gold/40 to-gold/20',
    features: [
      'Temel paketin tüm içerikleri',
      'Ayda 2 özel ders',
      '4 ders materyal desteği',
    ],
    popular: true,
  },
  {
    title: 'Mentorluk Paketi',
    color: 'from-navy/20 to-navy/10',
    features: [
      'Temel paketin tüm içerikleri',
      'Haftada bir özel ders',
      'Tüm materyaller dahil',
      'Haftada bir gün soru çözüm desteği',
    ],
  },
  {
    title: 'Koçluk Paketi',
    color: 'from-gold/60 to-gold/30',
    features: [
      'Temel paketin tüm içerikleri',
      'Koç analizine göre ihtiyaca yönelik özel ders',
      'Tüm materyaller dahil',
      'Haftada üç gün soru çözüm desteği',
      'Her gün belirli saatlerde koç ile birebir iletişim',
    ],
    premium: true,
  },
];

export default function Packages() {
  return (
    <section id="paketler" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
            Paketlerimiz
          </h2>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto">
            İhtiyacınıza uygun koçluk paketini seçin ve başarıya giden yolculuğunuza başlayın.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${pkg.color} rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-beige/30 ${
                pkg.premium ? 'lg:scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-navy px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Popüler
                </div>
              )}

              {pkg.premium && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-navy text-gold px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Premium
                </div>
              )}

              <h3 className="text-2xl font-bold text-navy mb-6 mt-2">
                {pkg.title}
              </h3>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-navy rounded-full flex items-center justify-center mt-0.5">
                      <Check size={14} className="text-cream" />
                    </div>
                    <span className="text-navy/90 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#iletisim"
                className="block w-full text-center bg-navy text-cream py-3 rounded-lg hover:bg-navy/90 transition-colors duration-200 font-semibold shadow-md hover:shadow-lg"
              >
                Hemen Başla
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
