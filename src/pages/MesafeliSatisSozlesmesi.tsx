import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MesafeliSatisSozlesmesi() {
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
            Mesafeli Satış Sözleşmesi
          </h1>
          <p className="text-lg text-navy/70 max-w-3xl mx-auto leading-relaxed">
            Bu sayfada Hera Koçluk tarafından sunulan mesafeli satış sözleşmesine ilişkin bilgiler yer almaktadır.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-beige/30 p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">Taraflar</h2>
            <p className="text-navy/80 leading-relaxed">
              İşbu sözleşme, hizmet sağlayıcı (Hera Koçluk) ile hizmeti satın alan tüketici arasında mesafeli satış kapsamında düzenlenmiştir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">Sözleşmenin Konusu</h2>
            <p className="text-navy/80 leading-relaxed">
              Sözleşme, internet üzerinden sunulan koçluk ve rehberlik hizmetlerinin satışına ilişkin hükümleri kapsar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">Ödeme ve Teslimat</h2>
            <p className="text-navy/80 leading-relaxed">
              Ödeme koşulları, iptal ve iadeye ilişkin süreçler bu bölümde açıklanır. Hizmetler dijital veya uzaktan sağlandığı için fiziksel teslimat söz konusu değildir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">Cayma Hakkı</h2>
            <p className="text-navy/80 leading-relaxed">
              Tüketicinin mesafeli sözleşmelerde sahip olduğu cayma hakkı ve kullanılmasına ilişkin talimatlar burada yer alır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">Sorumluluk ve İade</h2>
            <p className="text-navy/80 leading-relaxed">
              Hizmetin ifası sırasında doğabilecek sorumluluklar ve varsa iade politikası hakkında bilgiler.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">İletişim</h2>
            <p className="text-navy/80 leading-relaxed">
              Mesafeli satış sözleşmesi ile ilgili sorularınız için lütfen bizimle iletişime geçin.
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
