import { useState } from 'react';
import { Mail, Phone, MessageCircle, Instagram, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const turkishCities = [
  'Adana', 'Adıyaman', 'Afyonkarahisar', 'Ağrı', 'Aksaray', 'Amasya', 'Ankara', 'Antalya', 'Ardahan', 'Artvin',
  'Aydın', 'Balıkesir', 'Bartın', 'Batman', 'Bayburt', 'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur',
  'Bursa', 'Çanakkale', 'Çankırı', 'Çorum', 'Denizli', 'Diyarbakır', 'Düzce', 'Edirne', 'Elazığ', 'Erzincan',
  'Erzurum', 'Eskişehir', 'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkâri', 'Hatay', 'Iğdır', 'Isparta', 'İstanbul',
  'İzmir', 'Kahramanmaraş', 'Karabük', 'Karaman', 'Kars', 'Kastamonu', 'Kayseri', 'Kırıkkale', 'Kırklareli', 'Kırşehir',
  'Kilis', 'Kocaeli', 'Konya', 'Kütahya', 'Malatya', 'Manisa', 'Mardin', 'Mersin', 'Muğla', 'Muş',
  'Nevşehir', 'Niğde', 'Ordu', 'Osmaniye', 'Rize', 'Sakarya', 'Samsun', 'Şanlıurfa', 'Siirt', 'Sinop',
  'Sivas', 'Şırnak', 'Tekirdağ', 'Tokat', 'Trabzon', 'Tunceli', 'Uşak', 'Van', 'Yalova', 'Yozgat', 'Zonguldak'
];

export default function Iletisim() {
  const [formData, setFormData] = useState({
    fullName: '',
    exam: '',
    isStudent: '',
    studentGrade: '',
    city: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        exam: '',
        isStudent: '',
        studentGrade: '',
        city: '',
        phone: '',
        email: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1000);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/905515332633', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/herakocluk?igsh=dTBnMWJjeHd3eGQ1&utm_source=qr', '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+905515332633';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@herakocluk.com';
  };

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
            İletişim
          </h1>
          <p className="text-lg text-navy/70 max-w-3xl mx-auto leading-relaxed mb-4">
            Bizimle iletişime geçin! Sizin için en uygun programı birlikte belirleyelim.
          </p>
          <p className="text-base text-navy/60 max-w-2xl mx-auto">
            Formu doldurabilir veya aşağıdaki iletişim simgelerimizden birini kullanarak doğrudan bizimle iletişime geçebilirsiniz.
          </p>
        </div>

        <div className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-beige/30 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">İletişim Formu</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-navy font-semibold mb-2">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-beige/50 text-navy placeholder-navy/40 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/50 transition-all"
                  placeholder="Adınız ve soyadınız"
                />
              </div>

              <div>
                <label htmlFor="exam" className="block text-navy font-semibold mb-2">
                  Hangi sınava hazırlanmak istiyorsunuz?
                </label>
                <select
                  id="exam"
                  required
                  value={formData.exam}
                  onChange={(e) => setFormData({ ...formData, exam: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-beige/50 text-navy focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/50 transition-all"
                >
                  <option value="">Seçiniz...</option>
                  <option value="YKS">YKS</option>
                  <option value="LGS">LGS</option>
                  <option value="YDT">YDT</option>
                  <option value="DGS">DGS</option>
                  <option value="YDS">YDS</option>
                  <option value="IELTS">IELTS</option>
                  <option value="TOEFL">TOEFL</option>
                  <option value="Diğer">Diğer</option>
                </select>
              </div>

              <div>
                <label htmlFor="isStudent" className="block text-navy font-semibold mb-2">
                  Öğrenci misiniz?
                </label>
                <select
                  id="isStudent"
                  required
                  value={formData.isStudent}
                  onChange={(e) => {
                    setFormData({ ...formData, isStudent: e.target.value, studentGrade: '' });
                  }}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-beige/50 text-navy focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/50 transition-all"
                >
                  <option value="">Seçiniz...</option>
                  <option value="Evet">Evet</option>
                  <option value="Hayır">Hayır</option>
                </select>
              </div>

              {formData.isStudent === 'Evet' && (
                <div>
                  <label htmlFor="studentGrade" className="block text-navy font-semibold mb-2">
                    Hangi sınıftasınız?
                  </label>
                  <select
                    id="studentGrade"
                    required
                    value={formData.studentGrade}
                    onChange={(e) => setFormData({ ...formData, studentGrade: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-beige/50 text-navy focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/50 transition-all"
                  >
                    <option value="">Seçiniz...</option>
                    <optgroup label="Ortaokul">
                      <option value="5. Sınıf">5. Sınıf</option>
                      <option value="6. Sınıf">6. Sınıf</option>
                      <option value="7. Sınıf">7. Sınıf</option>
                      <option value="8. Sınıf">8. Sınıf</option>
                    </optgroup>
                    <optgroup label="Lise">
                      <option value="9. Sınıf">9. Sınıf</option>
                      <option value="10. Sınıf">10. Sınıf</option>
                      <option value="11. Sınıf">11. Sınıf</option>
                      <option value="12. Sınıf">12. Sınıf</option>
                    </optgroup>
                  </select>
                </div>
              )}

              <div>
                <label htmlFor="city" className="block text-navy font-semibold mb-2">
                  Şehir
                </label>
                <select
                  id="city"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-beige/50 text-navy focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/50 transition-all"
                >
                  <option value="">Seçiniz...</option>
                  {turkishCities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="phone" className="block text-navy font-semibold mb-2">
                  Telefon Numarası
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-beige/50 text-navy placeholder-navy/40 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/50 transition-all"
                  placeholder="0555 555 55 55"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-navy font-semibold mb-2">
                  E-posta Adresi
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-beige/50 text-navy placeholder-navy/40 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/50 transition-all"
                  placeholder="ornek@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-navy font-semibold mb-2">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-beige/50 text-navy placeholder-navy/40 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/50 transition-all resize-none"
                  placeholder="Mesajınızı buraya yazın... (Opsiyonel)"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-navy hover:bg-navy/90 disabled:bg-navy/50 text-cream py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg"
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-center">
                  <p className="font-semibold">Teşekkürler! En kısa sürede sizinle iletişime geçeceğiz.</p>
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="bg-gradient-to-br from-navy to-navy/90 rounded-2xl p-8 md:p-12 shadow-2xl">
          <h2 className="text-3xl font-bold text-gold mb-4 text-center">
            Hemen İletişime Geçmek İçin
          </h2>
          <p className="text-cream/80 mb-8 text-center max-w-2xl mx-auto">
            Aşağıdaki simgelerden birini seçerek doğrudan bizimle iletişime geçebilirsiniz!
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <button
              onClick={handleWhatsAppClick}
              className="flex flex-col items-center justify-center gap-4 bg-gold hover:bg-gold/90 text-navy p-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <MessageCircle size={48} />
              <span className="font-semibold text-lg">WhatsApp</span>
            </button>

            <button
              onClick={handleInstagramClick}
              className="flex flex-col items-center justify-center gap-4 bg-gold hover:bg-gold/90 text-navy p-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Instagram size={48} />
              <span className="font-semibold text-lg">Instagram</span>
            </button>

            <button
              onClick={handleCallClick}
              className="flex flex-col items-center justify-center gap-4 bg-gold hover:bg-gold/90 text-navy p-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Phone size={48} />
              <span className="font-semibold text-lg">Telefon</span>
            </button>

            <button
              onClick={handleEmailClick}
              className="flex flex-col items-center justify-center gap-4 bg-gold hover:bg-gold/90 text-navy p-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Mail size={48} />
              <span className="font-semibold text-lg">E-posta</span>
            </button>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-cream/10 backdrop-blur-sm rounded-xl p-6 border border-gold/20">
              <h3 className="text-xl font-bold text-gold mb-4 flex items-center gap-2">
                <Phone size={24} />
                İletişim Bilgileri
              </h3>
              <div className="space-y-2 text-cream/90">
                <p>Telefon: +90 (551) 533 26 33</p>
                <p>E-posta: info@herakocluk.com</p>
              </div>
            </div>

            <div className="bg-cream/10 backdrop-blur-sm rounded-xl p-6 border border-gold/20">
              <h3 className="text-xl font-bold text-gold mb-4">Çalışma Saatleri</h3>
              <div className="space-y-2 text-cream/90 text-sm">
                <div className="flex justify-between">
                  <span>Pazartesi - Cuma:</span>
                  <span className="font-semibold">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Cumartesi:</span>
                  <span className="font-semibold">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Pazar:</span>
                  <span className="font-semibold">Kapalı</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
