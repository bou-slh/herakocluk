import { Users, Heart, TrendingUp, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="hakkimizda" className="py-20 bg-gradient-to-br from-navy to-navy/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-cream mb-6">
                Hakkımızda
              </h2>
              <div className="w-24 h-1 bg-gold rounded-full mb-8"></div>
            </div>

            <p className="text-lg text-cream/90 leading-relaxed">
              Hera Koçluk olarak, öğrencilerimizin akademik hedeflerine ulaşmalarını sağlamak için bireysel ihtiyaçlarına özel, profesyonel ve etkili koçluk hizmetleri sunuyoruz.
            </p>

            <p className="text-lg text-cream/90 leading-relaxed">
              Deneyimli koçlarımız ve alanında uzman öğretmenlerimizle; LGS, YKS, YDS, IELTS ve TOEFL gibi kritik sınavlara hazırlanan öğrencilerimize rehberlik ediyor, başarı oranlarını en üst seviyeye taşıyoruz.
            </p>

            <p className="text-lg text-cream/90 leading-relaxed">
             Sadece akademik başarıya değil, aynı zamanda öğrencilerimizin kişisel gelişimine de önem veriyoruz.
Motivasyon, disiplin ve doğru planlama alışkanlıkları kazandırarak hedeflerine istikrarlı bir şekilde ulaşmalarını sağlıyoruz.

            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center">
                  <Users className="text-gold" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gold">Uzman Kadro</h3>
                <p className="text-cream/80 text-sm">
                  Alanında deneyimli koçlar ve öğretmenler
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center">
                  <Heart className="text-gold" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gold">Öğrenci Odaklı</h3>
                <p className="text-cream/80 text-sm">
                  Kişiselleştirilmiş eğitim programları
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-gold" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gold">Sürekli Takip ve Destek</h3>
                <p className="text-cream/80 text-sm">
                  Motivasyonun sürekliliği
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center">
                  <Sparkles className="text-gold" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gold">Prestijli Hizmet</h3>
                <p className="text-cream/80 text-sm">
                 Güncel ve Güvenilir Kaynaklar
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gold/10 backdrop-blur-sm rounded-2xl p-8 border border-gold/30 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-6 bg-cream/10 rounded-xl backdrop-blur-sm">
                  <div className="text-4xl font-bold text-gold">01</div>
                  <div>
                    <h4 className="text-xl font-semibold text-cream mb-1">Vizyon</h4>
                    <p className="text-cream/80">
                      Türkiye’de öğrencilerin hedeflerine emin adımlarla ilerleyebileceği güvenilir bir koçluk platformu olmayı hedefliyoruz
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 bg-cream/10 rounded-xl backdrop-blur-sm">
                  <div className="text-4xl font-bold text-gold">02</div>
                  <div>
                    <h4 className="text-xl font-semibold text-cream mb-1">Misyon</h4>
                    <p className="text-cream/80">
                      Her öğrencinin potansiyelini ortaya çıkararak hayallerine ulaşmasını sağlamak
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 bg-cream/10 rounded-xl backdrop-blur-sm">
                  <div className="text-4xl font-bold text-gold">03</div>
                  <div>
                    <h4 className="text-xl font-semibold text-cream mb-1">Değerler</h4>
                    <p className="text-cream/80">
                      Profesyonellik, güven, başarı ve sürekli gelişim
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gold rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-cream rounded-full opacity-10 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
