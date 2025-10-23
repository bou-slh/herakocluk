import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PriceRow {
  paket: string;
  sure: string;
  fiyat: string;
  icerik: string;
}

interface ExamPricing {
  title: string;
  emoji: string;
  data: PriceRow[];
}

const pricingData: ExamPricing[] = [
  {
    title: 'YKS KOÇLUK PAKETLERİ',
    emoji: '🧠',
    data: [
      { paket: 'Rehberlik Paket', sure: '1 Ay', fiyat: '4.000', icerik: 'Haftalık plan + deneme analizi + rapor' },
      { paket: 'Rehberlik Paket', sure: '3 Ay', fiyat: '10.000', icerik: 'Gelişim takibi + ebeveyn raporu' },
      { paket: 'Rehberlik Paket', sure: '6 Ay', fiyat: '18.000', icerik: 'Uzun dönem hedef takibi' },
      { paket: 'Destek Paket', sure: '1 Ay', fiyat: '6.000', icerik: '2 özel ders + kısmi materyal' },
      { paket: 'Destek Paket', sure: '3 Ay', fiyat: '15.500', icerik: '6 dersten kaynak + koç takibi' },
      { paket: 'Destek Paket', sure: '6 Ay', fiyat: '28.000', icerik: 'Tam ders seti + aylık detay rapor' },
      { paket: 'Mentorluk Paket', sure: '1 Ay', fiyat: '7.500', icerik: 'Haftalık özel ders + soru çözüm desteği' },
      { paket: 'Mentorluk Paket', sure: '3 Ay', fiyat: '20.000', icerik: 'Tüm materyaller dahil + deneme takibi' },
      { paket: 'Mentorluk Paket', sure: '6 Ay', fiyat: '36.000', icerik: 'Haftalık 1 ders + tam kaynak seti' },
      { paket: 'Koçluk Paket', sure: '1 Ay', fiyat: '11.000', icerik: 'Günlük iletişim + 3 gün soru çözümü' },
      { paket: 'Koçluk Paket', sure: '3 Ay', fiyat: '30.000', icerik: 'Koç analizine göre özel ders planı' },
      { paket: 'Koçluk Paket', sure: '6 Ay', fiyat: '58.000', icerik: 'Tüm materyaller + full destek' },
    ],
  },
  {
    title: 'YDS KOÇLUK PAKETLERİ',
    emoji: '📘',
    data: [
      { paket: 'Rehberlik Paket', sure: '1 Ay', fiyat: '3.500', icerik: 'Seviye tespit + haftalık analiz' },
      { paket: 'Rehberlik Paket', sure: '3 Ay', fiyat: '9.000', icerik: 'Planlama + kaynak önerisi' },
      { paket: 'Rehberlik Paket', sure: '6 Ay', fiyat: '16.000', icerik: 'Deneme takibi + gelişim raporu' },
      { paket: 'Destek Paket', sure: '1 Ay', fiyat: '5.000', icerik: '2 özel ders + materyal desteği' },
      { paket: 'Destek Paket', sure: '3 Ay', fiyat: '13.000', icerik: 'Okuma + kelime kaynakları dahil' },
      { paket: 'Destek Paket', sure: '6 Ay', fiyat: '24.000', icerik: 'Grammar + Reading full sistem' },
      { paket: 'Mentorluk Paket', sure: '1 Ay', fiyat: '6.500', icerik: 'Haftalık özel ders + soru analizi' },
      { paket: 'Mentorluk Paket', sure: '3 Ay', fiyat: '17.000', icerik: 'Writing + Listening modülü dahil' },
      { paket: 'Mentorluk Paket', sure: '6 Ay', fiyat: '31.000', icerik: 'Tüm beceriler + yoğun takip' },
      { paket: 'Koçluk Paket', sure: '1 Ay', fiyat: '9.000', icerik: 'Günlük iletişim + 3 soru günü' },
      { paket: 'Koçluk Paket', sure: '3 Ay', fiyat: '25.000', icerik: 'Becerilere özel ders planı' },
      { paket: 'Koçluk Paket', sure: '6 Ay', fiyat: '48.000', icerik: 'Tam materyal + her gün iletişim' },
    ],
  },
  {
    title: 'IELTS KOÇLUK PAKETLERİ',
    emoji: '🌍',
    data: [
      { paket: 'Rehberlik Paket', sure: '1 Ay', fiyat: '4.000', icerik: 'Seviye tespit + 4 skills planı' },
      { paket: 'Rehberlik Paket', sure: '3 Ay', fiyat: '10.500', icerik: 'Task planlama + practice takip' },
      { paket: 'Rehberlik Paket', sure: '6 Ay', fiyat: '18.500', icerik: 'Deneme & feedback sistemi' },
      { paket: 'Destek Paket', sure: '1 Ay', fiyat: '6.000', icerik: '2 özel ders + materyal seti' },
      { paket: 'Destek Paket', sure: '3 Ay', fiyat: '15.000', icerik: 'Writing ve Speaking yoğunluklu' },
      { paket: 'Destek Paket', sure: '6 Ay', fiyat: '27.000', icerik: '8 özel ders + tam kaynak paketi' },
      { paket: 'Mentorluk Paket', sure: '1 Ay', fiyat: '8.000', icerik: 'Haftalık ders + essay analizleri' },
      { paket: 'Mentorluk Paket', sure: '3 Ay', fiyat: '21.000', icerik: 'Listening + Writing yoğunlaştırılmış' },
      { paket: 'Mentorluk Paket', sure: '6 Ay', fiyat: '39.000', icerik: 'Full skill development programı' },
      { paket: 'Koçluk Paket', sure: '1 Ay', fiyat: '11.500', icerik: 'Her gün iletişim + 3 skill day' },
      { paket: 'Koçluk Paket', sure: '3 Ay', fiyat: '31.000', icerik: '1:1 coaching + kaynak dahil' },
      { paket: 'Koçluk Paket', sure: '6 Ay', fiyat: '58.000', icerik: 'Sınava kadar tam destek' },
    ],
  },
  {
    title: 'TOEFL KOÇLUK PAKETLERİ',
    emoji: '🇺🇸',
    data: [
      { paket: 'Rehberlik Paket', sure: '1 Ay', fiyat: '4.500', icerik: 'Skill analizi + planlama' },
      { paket: 'Rehberlik Paket', sure: '3 Ay', fiyat: '11.000', icerik: 'Grammar + essay temeli' },
      { paket: 'Rehberlik Paket', sure: '6 Ay', fiyat: '20.000', icerik: 'Reading & Listening analizi' },
      { paket: 'Destek Paket', sure: '1 Ay', fiyat: '6.500', icerik: '2 özel ders + materyal seti' },
      { paket: 'Destek Paket', sure: '3 Ay', fiyat: '16.000', icerik: 'Speaking practice dahil' },
      { paket: 'Destek Paket', sure: '6 Ay', fiyat: '29.000', icerik: '10 özel ders + tam kaynak' },
      { paket: 'Mentorluk Paket', sure: '1 Ay', fiyat: '8.500', icerik: 'Haftalık ders + soru analizi' },
      { paket: 'Mentorluk Paket', sure: '3 Ay', fiyat: '22.000', icerik: 'Writing yoğunluklu takip' },
      { paket: 'Mentorluk Paket', sure: '6 Ay', fiyat: '41.000', icerik: 'Full exam simülasyonu' },
      { paket: 'Koçluk Paket', sure: '1 Ay', fiyat: '12.000', icerik: 'Günlük destek + speaking mentorluğu' },
      { paket: 'Koçluk Paket', sure: '3 Ay', fiyat: '33.000', icerik: 'Tam sistem + birebir analiz' },
      { paket: 'Koçluk Paket', sure: '6 Ay', fiyat: '61.000', icerik: 'Sınava kadar yoğun coaching' },
    ],
  },
  {
    title: 'LGS KOÇLUK PAKETLERİ',
    emoji: '🧩',
    data: [
      { paket: 'Rehberlik Paket', sure: '1 Ay', fiyat: '3.000', icerik: 'Haftalık plan + deneme takibi' },
      { paket: 'Rehberlik Paket', sure: '3 Ay', fiyat: '8.000', icerik: 'Gelişim raporu + veli bilgilendirme' },
      { paket: 'Rehberlik Paket', sure: '6 Ay', fiyat: '15.000', icerik: 'Deneme + çalışma programı' },
      { paket: 'Destek Paket', sure: '1 Ay', fiyat: '4.500', icerik: '2 özel ders + materyal' },
      { paket: 'Destek Paket', sure: '3 Ay', fiyat: '11.000', icerik: 'Temel branş kaynakları dahil' },
      { paket: 'Destek Paket', sure: '6 Ay', fiyat: '20.000', icerik: 'Tam kaynak seti + aylık rapor' },
      { paket: 'Mentorluk Paket', sure: '1 Ay', fiyat: '6.000', icerik: 'Haftalık özel ders + soru çözümü' },
      { paket: 'Mentorluk Paket', sure: '3 Ay', fiyat: '15.000', icerik: 'Tam materyal + branş koçluğu' },
      { paket: 'Mentorluk Paket', sure: '6 Ay', fiyat: '27.000', icerik: '6 dersten tam destek' },
      { paket: 'Koçluk Paket', sure: '1 Ay', fiyat: '9.000', icerik: 'Günlük iletişim + 3 soru günü' },
      { paket: 'Koçluk Paket', sure: '3 Ay', fiyat: '24.000', icerik: 'Birebir takiple sınava hazırlık' },
      { paket: 'Koçluk Paket', sure: '6 Ay', fiyat: '45.000', icerik: 'Full sistem + koç + veli raporu' },
    ],
  },
];

function PricingTable({ exam }: { exam: ExamPricing }) {
  const uniquePackages = Array.from(new Set(exam.data.map(row => row.paket)));

  return (
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-navy mb-8 flex items-center gap-3">
        <span className="text-4xl">{exam.emoji}</span>
        {exam.title}
      </h3>
      <p className="text-navy/70 mb-6 text-sm">
        (Sayısal / Sözel / Eşit Ağırlık / Dil için geçerlidir)
      </p>

      <div className="overflow-x-auto">
        <table className="w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-beige/30 overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-navy to-navy/90 text-cream">
              <th className="px-6 py-4 text-left font-semibold">Paket</th>
              <th className="px-6 py-4 text-left font-semibold">Süre</th>
              <th className="px-6 py-4 text-left font-semibold">Fiyat (₺)</th>
              <th className="px-6 py-4 text-left font-semibold">İçerik Özeti</th>
            </tr>
          </thead>
          <tbody>
            {uniquePackages.map((packageName, pkgIndex) => {
              const packageRows = exam.data.filter(row => row.paket === packageName);
              return packageRows.map((row, rowIndex) => (
                <tr
                  key={`${pkgIndex}-${rowIndex}`}
                  className={`border-t border-beige/30 hover:bg-gold/10 transition-colors ${
                    pkgIndex % 2 === 0 ? 'bg-cream/30' : 'bg-white/50'
                  }`}
                >
                  {rowIndex === 0 ? (
                    <td
                      className="px-6 py-4 font-bold text-navy border-r border-beige/30"
                      rowSpan={packageRows.length}
                    >
                      {row.paket}
                    </td>
                  ) : null}
                  <td className="px-6 py-4 text-navy/90 border-r border-beige/30">{row.sure}</td>
                  <td className="px-6 py-4 text-gold font-bold border-r border-beige/30">{row.fiyat}</td>
                  <td className="px-6 py-4 text-navy/80 text-sm">{row.icerik}</td>
                </tr>
              ));
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/?scroll=iletisim"
          className="inline-flex items-center justify-center px-6 py-3 bg-navy text-cream rounded-lg hover:bg-navy/90 transition-all duration-300 shadow-md hover:shadow-lg font-semibold"
        >
          Hemen Başvur
        </Link>
      </div>
    </div>
  );
}

export default function Fiyatlar() {
  return (
    <div className="min-h-screen bg-cream pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-navy hover:text-gold transition-colors duration-200 font-semibold"
          >
            <ArrowLeft size={20} />
            Geri Dön
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6">
            Fiyatlar
          </h1>
          <p className="text-lg text-navy/70 max-w-3xl mx-auto leading-relaxed">
            Tüm sınav türleri için detaylı paket fiyatlarımız ve içeriklerimiz.
            Size en uygun paketi seçin ve başarıya giden yolculuğunuza başlayın.
          </p>
        </div>

        <div className="space-y-16">
          {pricingData.map((exam, index) => (
            <PricingTable key={index} exam={exam} />
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-navy to-navy/90 rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gold mb-4">
              Özel İndirimler ve Kampanyalar
            </h3>
            <p className="text-cream/90 mb-6 leading-relaxed max-w-2xl mx-auto">
              6 aylık paketlerde %15 indirim! Kardeş indirimi ve erken kayıt avantajları için
              bizimle iletişime geçin.
            </p>
            <Link
              to="/?scroll=iletisim"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-navy rounded-lg hover:bg-gold/90 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
