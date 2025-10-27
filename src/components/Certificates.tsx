import { Award, Star, GraduationCap, Trophy } from 'lucide-react';

// const certifications = [
//   {
//     icon: Award,
//     title: 'Ulusal Eğitim Sertifikası',
//     description: 'Milli Eğitim Bakanlığı onaylı eğitim programları',
//   },
//   {
//     icon: GraduationCap,
//     title: 'Akademik Koçluk Sertifikası',
//     description: 'Uluslararası koçluk standartlarına uygun sertifikasyon',
//   },
//   {
//     icon: Star,
//     title: 'Mükemmellik Ödülü',
//     description: 'Öğrenci memnuniyeti ve başarı oranlarında liderlik',
//   },
//   {
//     icon: Trophy,
//     title: 'Başarı Garantisi',
//     description: '%95 üzeri öğrenci başarı oranı',
//   },
// ];

const testimonials = [
  {
    name: 'Zeynep K.',
    exam: 'YKS 2024',
    quote: 'Hera Koçluk sayesinde hedeflediğim üniversiteye yerleştim. Koçlarım her adımda yanımdaydı.',
    rating: 5,
  },
  {
    name: 'Mehmet A.',
    exam: 'LGS 2024',
    quote: 'Özel ders sistemi ve düzenli takip programı sayesinde başarıyı yakaladım.',
    rating: 5,
  },
  {
    name: 'Ayşe D.',
    exam: 'IELTS',
    quote: 'İngilizce sınavına hazırlanırken aldığım destek paha biçilemezdi. Teşekkürler!',
    rating: 5,
  },
];

export default function Certificates() {
  return (
    <section id="sertifikalar" className="py-20 bg-gradient-to-br from-cream to-beige/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
            Sertifikalar & Başarılar
          </h2>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto">
            Kalite ve başarı odaklı yaklaşımımızın tescilli kanıtları
          </p>
        </div> */}

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-beige/30"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-navy to-navy/80 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Icon className="text-gold" size={32} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3 text-center">
                  {cert.title}
                </h3>
                <p className="text-navy/70 text-center text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            );
          })}
        </div> */}

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-navy text-center mb-12">
            Öğrenci Yorumları
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gold/20"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-gold fill-gold" size={20} />
                  ))}
                </div>
                <p className="text-navy/80 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-beige/30 pt-4">
                  <p className="font-semibold text-navy">{testimonial.name}</p>
                  <p className="text-sm text-navy/60">{testimonial.exam}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
