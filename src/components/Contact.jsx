import React from 'react';
import { FaWhatsapp, FaLine, FaTelegramPlane, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [cardsRef, cardsVisible] = useScrollAnimation(0.1);

  const contacts = [
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: '+66 62-718-8699',
      href: 'https://wa.me/66627188699',
      iconBg: 'bg-green-500/20',
      text: 'text-green-400',
    },
    {
      icon: FaLine,
      label: 'Line',
      value: '@zinwaishine',
      href: 'https://line.me/ti/p/~zinwaishine',
      iconBg: 'bg-green-400/20',
      text: 'text-green-300',
    },
    {
      icon: FaTelegramPlane,
      label: 'Telegram',
      value: '@zinwaishine',
      href: 'https://t.me/zinwaishine',
      iconBg: 'bg-sky-500/20',
      text: 'text-sky-400',
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'zinwaishine9@gmail.com',
      href: 'mailto:zinwaishine9@gmail.com',
      iconBg: 'bg-red-500/20',
      text: 'text-red-400',
      color: 'from-red-500 to-rose-500',
    },
  ];

  // Enhanced Stars - matching About page
  const stars = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    size: Math.random() > 0.7 ? 'star-large' : 'star-small',
  }));

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-primary">
      {/* Enhanced Galaxy Stars - matching About page */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className={`star ${star.size}`}
            style={{ left: star.left, top: star.top, animationDelay: star.delay }}
          />
        ))}
      </div>

      {/* Enhanced Animated Background Orbs - matching About page */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-500/15 via-blue-500/8 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-purple-500/15 via-pink-500/8 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent/8 via-sky-400/5 to-accent/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-indigo-500/10 to-purple-500/5 rounded-full blur-3xl animate-float" />
      </div>

      {/* Enhanced Nebula Effects - matching About page */}
      <div className="nebula w-[500px] h-[500px] -top-32 -right-32 bg-gradient-to-bl from-indigo-500/10 via-purple-500/6 to-transparent" style={{ animationDelay: '1s' }} />
      <div className="nebula w-[400px] h-[400px] -bottom-24 -left-24 bg-gradient-to-tr from-cyan-500/10 via-blue-500/6 to-transparent" style={{ animationDelay: '3s' }} />
      <div className="nebula w-[350px] h-[350px] top-1/3 left-1/3 bg-gradient-to-br from-pink-500/8 via-rose-500/4 to-transparent" style={{ animationDelay: '5s' }} />

      {/* Enhanced Grid Pattern Overlay - matching About page */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(rgba(100, 255, 218, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 255, 218, 0.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section header - matching About page style */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 md:mb-20 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-card text-accent text-xs font-mono tracking-widest uppercase mb-6 rounded-full border border-accent/20 hover:border-accent/40 transition-all">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Get in Touch
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
            Let's <span className="gradient-text">Talk</span>
          </h2>
          <p className="text-soft text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-6">
            Ready to start your project? Get in touch and let's discuss how I can help bring your vision to life.
          </p>
          
          {/* Enhanced Available Status */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-card rounded-full border border-green-500/30 hover:border-green-500/50 transition-all">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50" />
            <span className="text-green-400 text-sm font-semibold">Available Now</span>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>

        {/* Enhanced Contact Grid */}
        <div 
          ref={cardsRef} 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto transition-all duration-700 ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {contacts.map((contact, index) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith('http') || contact.href.startsWith('mailto') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group relative glass-card p-6 md:p-8 rounded-3xl hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 overflow-hidden"
              style={{ transitionDelay: cardsVisible ? `${index * 150}ms` : '0ms' }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${
                contact.label === 'WhatsApp' ? 'from-green-500/20 to-emerald-500/10' : 
                contact.label === 'Line' ? 'from-green-500/20 to-lime-500/10' : 
                contact.label === 'Telegram' ? 'from-sky-500/20 to-blue-500/10' :
                'from-red-500/20 to-rose-500/10'
              } opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
              
              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${
                  contact.label === 'WhatsApp' ? 'bg-gradient-to-br from-green-500 to-emerald-500' : 
                  contact.label === 'Line' ? 'bg-gradient-to-br from-green-400 to-lime-500' : 
                  contact.label === 'Telegram' ? 'bg-gradient-to-br from-sky-500 to-blue-500' :
                  'bg-gradient-to-br from-red-500 to-rose-500'
                } flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}>
                  <contact.icon className="text-white text-2xl" />
                </div>
                
                {/* Text */}
                <h3 className="text-xl md:text-2xl font-heading font-bold text-slate mb-2 group-hover:text-accent transition-colors">
                  {contact.label}
                </h3>
                <p className={`text-sm md:text-base font-semibold ${contact.text} mb-1 break-all`}>
                  {contact.value}
                </p>
                <p className="text-soft text-xs md:text-sm mt-2">
                  {contact.label === 'Email' ? 'Click to email' : 'Click to message'}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Enhanced Location & Message */}
        <div 
          className={`mt-12 md:mt-16 text-center transition-all duration-700 delay-500 ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="glass-card p-6 md:p-8 rounded-3xl max-w-2xl mx-auto border border-accent/20 hover:border-accent/40 transition-all">
            <p className="text-soft text-base md:text-lg mb-4 leading-relaxed">
              Message me anytime — I reply within <span className="text-accent font-semibold">hours!</span>
            </p>
            <div className="flex items-center justify-center gap-3 text-soft text-sm md:text-base">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-sky-400/20 flex items-center justify-center">
                <FaMapMarkerAlt className="text-accent text-lg" />
              </div>
              <span className="font-medium">Based in Thailand</span>
            </div>
          </div>
        </div>

        {/* Enhanced Footer */}
        <div className="mt-16 md:mt-20 pt-8 md:pt-12 border-t border-accent/20 text-center">
          <p className="text-soft text-sm md:text-base">
            © {new Date().getFullYear()} Zin Wai Shine. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
