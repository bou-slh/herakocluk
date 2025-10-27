import { BookOpen, Target, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section id="ana-sayfa" className="pt-20 bg-gradient-to-br from-cream via-cream to-beige/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-snugget" style={{ lineHeight: '1.2' }}>
              Hedefine Ulaşmak İçin{' '}
              <span className="text-gold">Doğru Yerdesin</span>
            </h1>

            <p className="text-lg sm:text-xl text-navy/80 leading-relaxed">
             LGS, YKS, YDS, IELTS ve TOEFL gibi sınavlara hazırlanırken; uzman koçlarımız, yenilikçi sistemimiz ve kişiselleştirilmiş çalışma programlarımızla hedefinin her adımında yanındayız.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#paketler"
                className="inline-flex items-center justify-center px-8 py-4 bg-navy text-cream rounded-lg hover:bg-navy/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg font-semibold"
              >
                Paketleri İncele
              </a>
              <a
                href="#iletisim"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold text-navy rounded-lg hover:bg-gold/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg font-semibold"
              >
                İletişime Geç
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-14 h-14 bg-navy/10 rounded-full flex items-center justify-center">
                  <BookOpen className="text-navy" size={28} />
                </div>
                <p className="text-sm font-semibold text-navy">Uzman Eğitmenler</p>
              </div>

              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-14 h-14 bg-navy/10 rounded-full flex items-center justify-center">
                  <Target className="text-navy" size={28} />
                </div>
                <p className="text-sm font-semibold text-navy">Kişisel Program</p>
              </div>

              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-14 h-14 bg-navy/10 rounded-full flex items-center justify-center">
                  <Award className="text-navy" size={28} />
                </div>
                <p className="text-sm font-semibold text-navy">Başarı Garantisi</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/herap.png"
                alt="Hera Koçluk"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-navy rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
