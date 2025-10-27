import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
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
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1000);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/905515332633', '_blank');
  };

  return (
    <section id="iletisim" className="py-20 bg-gradient-to-br from-navy via-navy/95 to-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-cream mb-4">
            İletişime Geçin
          </h2>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto">
            Sorularınız için bize ulaşın. Size en kısa sürede geri dönüş yapalım.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-cream/10 backdrop-blur-sm rounded-2xl p-8 border border-gold/20">
              <h3 className="text-2xl font-bold text-gold mb-6">İletişim Bilgileri</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="text-cream font-semibold mb-1">Telefon</h4>
                    <p className="text-cream/80">+90 (551) 533 26 33</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="text-cream font-semibold mb-1">E-posta</h4>
                    <p className="text-cream/80">info@herakocluk.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="text-cream font-semibold mb-1">Adres</h4>
                    <p className="text-cream/80">
                      İstanbul, Türkiye
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleWhatsAppClick}
                className="w-full mt-8 flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
              >
                <MessageCircle size={24} />
                WhatsApp ile İletişime Geç
              </button>
            </div>

            <div className="bg-cream/10 backdrop-blur-sm rounded-2xl p-8 border border-gold/20">
              <h3 className="text-2xl font-bold text-gold mb-4">Çalışma Saatleri</h3>
              <div className="space-y-3 text-cream/80">
                <div className="flex justify-between">
                  <span>Pazartesi - Cuma:</span>
                  <span className="font-semibold text-cream">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Cumartesi:</span>
                  <span className="font-semibold text-cream">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Pazar:</span>
                  <span className="font-semibold text-cream">Kapalı</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-cream/10 backdrop-blur-sm rounded-2xl p-8 border border-gold/20">
            <h3 className="text-2xl font-bold text-gold mb-6">Mesaj Gönderin</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-cream font-semibold mb-2">
                  Adınız Soyadınız
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gold/30 text-cream placeholder-cream/50 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/50 transition-all"
                  placeholder="Adınız ve soyadınız"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-cream font-semibold mb-2">
                  E-posta Adresiniz
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gold/30 text-cream placeholder-cream/50 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/50 transition-all"
                  placeholder="ornek@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-cream font-semibold mb-2">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gold/30 text-cream placeholder-cream/50 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/50 transition-all resize-none"
                  placeholder="Mesajınızı buraya yazın..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 bg-gold hover:bg-gold/90 disabled:bg-gold/50 text-navy py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
              >
                {isSubmitting ? (
                  'Gönderiliyor...'
                ) : (
                  <>
                    <Send size={20} />
                    Mesajı Gönder
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-500/20 border border-green-500/50 text-green-200 px-4 py-3 rounded-lg">
                  Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
