import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CerezPolitikasi() {
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
            Çerez Politikası
          </h1>
          <p className="text-lg text-navy/70 max-w-3xl mx-auto leading-relaxed">
            Hera Koçluk web sitesinin çerez kullanım politikası hakkında detaylı bilgi.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-beige/30 p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">Çerez (Cookie) Nedir?</h2>
            <p className="text-navy/80 leading-relaxed">
              Çerezler, web sitemizi ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza depolanan küçük metin dosyalarıdır. Bu dosyalar size daha iyi bir kullanıcı deneyimi sunmamıza yardımcı olur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">Çerezleri Nasıl Kullanıyoruz?</h2>
            <p className="text-navy/80 leading-relaxed mb-4">
              Web sitemizde aşağıdaki amaçlar için çerezler kullanılmaktadır:
            </p>
            <ul className="list-disc list-inside space-y-2 text-navy/80 ml-4">
              <li>Oturum yönetimi ve güvenlik</li>
              <li>Kullanıcı tercihlerinin hatırlanması</li>
              <li>Web sitesi performansının analizi</li>
              <li>Kullanıcı deneyiminin iyileştirilmesi</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">Çerez Türleri</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-navy mb-2">Zorunlu Çerezler</h3>
                <p className="text-navy/80">Web sitesinin temel işlevleri için gerekli olan çerezlerdir.</p>
              </div>
              <div>
                <h3 className="font-semibold text-navy mb-2">Performans Çerezleri</h3>
                <p className="text-navy/80">Sitemizin performansını ölçmek ve iyileştirmek için kullanılır.</p>
              </div>
              <div>
                <h3 className="font-semibold text-navy mb-2">İşlevsellik Çerezleri</h3>
                <p className="text-navy/80">Tercihlerinizi hatırlamak ve size özelleştirilmiş bir deneyim sunmak için kullanılır.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">Çerez Tercihleri</h2>
            <p className="text-navy/80 leading-relaxed">
              Tarayıcınızın ayarlarından çerezleri kontrol edebilir veya silebilirsiniz. Ancak bunun web sitemizin kullanımını etkileyebileceğini unutmayın.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">Çerez Politikası Güncellemeleri</h2>
            <p className="text-navy/80 leading-relaxed">
              Bu politikayı dilediğimiz zaman güncelleme hakkını saklı tutarız. Güncellemeler web sitemizde yayınlandığı tarihte yürürlüğe girer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">İletişim</h2>
            <p className="text-navy/80 leading-relaxed">
              Çerez politikamızla ilgili sorularınız için bizimle iletişime geçebilirsiniz.
            </p>
            <Link
              to="/iletisim"
              className="inline-block mt-4 px-6 py-3 bg-navy text-cream rounded-lg hover:bg-navy/90 transition-all duration-300 shadow-md hover:shadow-lg font-semibold"
            >
              İletişime Geç
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}