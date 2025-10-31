import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GizlilikPolitikasi() {
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
            Gizlilik Politikası
          </h1>
          <p className="text-lg text-navy/70 max-w-3xl mx-auto leading-relaxed">
            Hera Koçluk olarak kişisel verilerinizin güvenliği ve gizliliği en önemli önceliklerimizdendir.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-beige/30 p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">Kişisel Verilerin Korunması</h2>
            <p className="text-navy/80 leading-relaxed">
              Bu gizlilik politikası, Hera Koçluk'un öğrenci ve velilerden topladığı bilgilerin nasıl kullanıldığını ve korunduğunu açıklar. 
              6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında, verileriniz güvenli bir şekilde işlenmekte ve saklanmaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">Toplanan Bilgiler</h2>
            <p className="text-navy/80 leading-relaxed mb-4">
              Aşağıdaki kişisel bilgileri toplamaktayız:
            </p>
            <ul className="list-disc list-inside space-y-2 text-navy/80 ml-4">
              <li>İsim, soyisim ve iletişim bilgileri</li>
              <li>Eğitim geçmişi ve akademik hedefler</li>
              <li>Deneme sınavı sonuçları ve akademik performans verileri</li>
              <li>Veli iletişim bilgileri</li>
              <li>Eğitim sürecinde yapılan değerlendirmeler ve raporlar</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">Bilgilerin Kullanımı</h2>
            <div className="space-y-4">
              <p className="text-navy/80">
                Topladığımız bilgiler aşağıdaki amaçlarla kullanılmaktadır:
              </p>
              <ul className="list-disc list-inside space-y-2 text-navy/80 ml-4">
                <li>Kişiselleştirilmiş eğitim programları oluşturma</li>
                <li>Akademik gelişim takibi ve raporlama</li>
                <li>Veli bilgilendirme ve iletişim</li>
                <li>Eğitim hizmetlerimizin iyileştirilmesi</li>
                <li>Yasal yükümlülüklerimizin yerine getirilmesi</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">Veri Güvenliği</h2>
            <p className="text-navy/80 leading-relaxed">
              Kişisel verilerinizi korumak için endüstri standardı güvenlik önlemleri kullanmaktayız. 
              Verileriniz şifreleme ve güvenli sunucularda saklama gibi teknik önlemlerle korunmaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">Veri Paylaşımı</h2>
            <p className="text-navy/80 leading-relaxed">
              Kişisel verileriniz, yasal zorunluluklar dışında üçüncü taraflarla paylaşılmamaktadır. 
              Eğitim hizmetlerimizin sağlanması için gerekli olan durumlarda, verileriniz sadece hizmet sağlayıcılarımızla ve yasal yükümlülüklerimiz kapsamında paylaşılabilir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">Veri Saklama Süresi</h2>
            <p className="text-navy/80 leading-relaxed">
              Kişisel verileriniz, hizmet ilişkimiz devam ettiği sürece ve yasal saklama sürelerince sistemlerimizde güvenli bir şekilde saklanmaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">Haklarınız</h2>
            <p className="text-navy/80 leading-relaxed mb-4">
              KVKK kapsamında aşağıdaki haklara sahipsiniz:
            </p>
            <ul className="list-disc list-inside space-y-2 text-navy/80 ml-4">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>Kişisel verileriniz işlenmişse bilgi talep etme</li>
              <li>Verilerinizin işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içinde veya yurt dışında verilerinizin aktarıldığı üçüncü kişileri bilme</li>
              <li>Verilerinizin eksik veya yanlış işlenmiş olması hâlinde düzeltilmesini isteme</li>
              <li>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde verilerinizin silinmesini isteme</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4">İletişim</h2>
            <p className="text-navy/80 leading-relaxed">
              Gizlilik politikamız veya kişisel verilerinizle ilgili herhangi bir sorunuz için bizimle iletişime geçebilirsiniz.
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