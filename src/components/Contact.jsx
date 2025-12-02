import React from 'react';
import { FaWhatsapp, FaLine, FaTelegramPlane, FaMapMarkerAlt } from 'react-icons/fa';
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
  ];

  // Stars - more for the final section
  const stars = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    size: Math.random() > 0.8 ? 'star-large' : Math.random() > 0.5 ? '' : 'star-small',
  }));

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-primary">
      {/* Galaxy Stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className={`star ${star.size}`}
            style={{ left: star.left, top: star.top, animationDelay: star.delay }}
          />
        ))}
      </div>

      {/* Galaxy Dust */}
      <div className="galaxy-dust opacity-35 pointer-events-none" />

      {/* Nebulas - multiple for grand finale */}
      <div className="nebula w-[450px] h-[450px] -bottom-32 -left-32 bg-gradient-to-tr from-purple-500/10 via-pink-500/5 to-transparent" style={{ animationDelay: '0s' }} />
      <div className="nebula w-[400px] h-[400px] -bottom-20 -right-20 bg-gradient-to-tl from-cyan-500/10 via-teal-500/5 to-transparent" style={{ animationDelay: '3s' }} />
      <div className="nebula w-[300px] h-[300px] top-10 left-1/3 bg-gradient-to-b from-indigo-500/6 via-blue-500/3 to-transparent" style={{ animationDelay: '6s' }} />

      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={`text-center mb-10 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">Get in touch</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Let's <span className="gradient-text">Talk</span>
          </h2>
          
          {/* Available Status */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-green-400 text-sm font-medium">Available Now</span>
          </div>
        </div>

        {/* Contact Grid */}
        <div ref={cardsRef} className="flex flex-wrap justify-center gap-3 max-w-xl mx-auto">
          {contacts.map((contact, index) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`group flex items-center gap-3 rounded-full glass-card px-5 py-3
                         hover:border-accent/30 transition-all duration-300 hover:scale-105
                         ${cardsVisible 
                           ? 'opacity-100 translate-y-0 scale-100' 
                           : 'opacity-0 translate-y-8 scale-95'
                         }`}
              style={{ transitionDelay: cardsVisible ? `${index * 80}ms` : '0ms' }}
            >
              {/* Icon */}
              <div className={`w-9 h-9 rounded-full ${contact.iconBg} flex items-center justify-center
                            group-hover:scale-110 transition-transform duration-300`}>
                <contact.icon className={`text-base ${contact.text}`} />
              </div>
              
              {/* Text */}
              <div>
                <p className="text-slate font-medium text-sm leading-tight">{contact.label}</p>
                <p className={`text-xs ${contact.text}`}>{contact.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Location & Message */}
        <div className={`mt-8 text-center transition-all duration-700 delay-500 ${
          cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-soft mb-3">
            Message me anytime — I reply within hours!
          </p>
          <div className="flex items-center justify-center gap-2 text-soft/70 text-sm">
            <FaMapMarkerAlt className="text-accent" />
            <span>Based in Thailand</span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-highlight text-center">
          <p className="text-soft text-sm">
            © {new Date().getFullYear()} Zin Wai Shine. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
