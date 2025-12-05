import React from 'react';
import { FaLaptopCode, FaWrench, FaRocket, FaCogs, FaCheckCircle } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Services = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [cardsRef, cardsVisible] = useScrollAnimation(0.1);

  const services = [
    {
      icon: FaLaptopCode,
      title: 'Website Development',
      price: '3,000–20,000 THB',
      description: 'Perfect for shops, salons, cafes, real estate agents, online sellers, freelancers, and small businesses.',
      features: ['Modern Design', 'Mobile Responsive', 'Fast Loading', 'SEO Ready'],
      color: 'from-cyan-500 to-blue-500',
      bg: 'from-cyan-500/20 to-blue-500/10',
      iconBg: 'from-cyan-500/30 to-blue-500/20',
    },
    {
      icon: FaWrench,
      title: 'Website Fixes',
      price: '300–1,500 THB',
      description: 'Fix layout issues, contact forms, hosting/domain problems, responsive mobile issues.',
      features: ['Quick Turnaround', 'Bug Fixes', 'Performance Fix', 'Mobile Issues'],
      color: 'from-orange-500 to-red-500',
      bg: 'from-orange-500/20 to-red-500/10',
      iconBg: 'from-orange-500/30 to-red-500/20',
    },
    {
      icon: FaRocket,
      title: 'Quick Landing Page',
      price: '1,500–4,000 THB',
      description: 'Fast delivery within 1–2 days. Perfect for promotions, events, or product launches.',
      features: ['1-2 Day Delivery', 'High Converting', 'Contact Form', 'Social Links'],
      color: 'from-purple-500 to-pink-500',
      bg: 'from-purple-500/20 to-pink-500/10',
      iconBg: 'from-purple-500/30 to-pink-500/20',
    },
    {
      icon: FaCogs,
      title: 'Custom Web Apps',
      price: '10,000+ THB',
      description: 'Small admin system, booking system, inventory system, CRM, custom features.',
      features: ['Admin Panel', 'Database', 'Custom Features', 'User Management'],
      color: 'from-indigo-500 to-purple-500',
      bg: 'from-indigo-500/20 to-purple-500/10',
      iconBg: 'from-indigo-500/30 to-purple-500/20',
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
    <section id="services" className="section-padding relative overflow-hidden bg-primary">
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
            Services I Offer
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
            Services <span className="gradient-text">I Offer</span>
          </h2>
          <p className="text-soft text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Professional web development services at affordable prices. 
            Quality work, fast delivery, and excellent support.
          </p>
        </div>

        {/* Enhanced Services grid */}
        <div 
          ref={cardsRef} 
          className={`grid md:grid-cols-2 gap-6 lg:gap-8 transition-all duration-700 ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative glass-card p-8 md:p-10 rounded-3xl hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 overflow-hidden"
              style={{ transitionDelay: cardsVisible ? `${index * 150}ms` : '0ms' }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
              
              <div className="relative z-10">
                {/* Header with icon and price */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}>
                    <service.icon className="text-white text-2xl" />
                  </div>
                  <span className={`px-5 py-2.5 bg-gradient-to-br ${service.iconBg} text-accent text-sm font-bold rounded-full border border-accent/20 group-hover:border-accent/40 transition-all`}>
                    {service.price}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-soft mb-6 leading-relaxed text-base md:text-lg">
                  {service.description}
                </p>

                {/* Enhanced Features */}
                <div className="flex flex-wrap gap-3">
                  {service.features.map((feature, idx) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-card border border-accent/20 hover:border-accent/40 hover:scale-105 text-accent text-sm font-medium transition-all"
                    >
                      <FaCheckCircle className="text-xs" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA */}
        <div 
          className={`text-center mt-16 md:mt-20 transition-all duration-700 delay-500 ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-soft text-lg mb-6">Need something specific or have questions?</p>
          <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2 group relative overflow-hidden">
            <span className="relative z-10">Get Custom Quote</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
