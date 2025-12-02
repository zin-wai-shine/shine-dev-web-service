import React from 'react';
import { FaLaptopCode, FaWrench, FaRocket, FaCogs } from 'react-icons/fa';
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
    },
    {
      icon: FaWrench,
      title: 'Website Fixes',
      price: '300–1,500 THB',
      description: 'Fix layout issues, contact forms, hosting/domain problems, responsive mobile issues.',
      features: ['Quick Turnaround', 'Bug Fixes', 'Performance Fix', 'Mobile Issues'],
    },
    {
      icon: FaRocket,
      title: 'Quick Landing Page',
      price: '1,500–4,000 THB',
      description: 'Fast delivery within 1–2 days. Perfect for promotions, events, or product launches.',
      features: ['1-2 Day Delivery', 'High Converting', 'Contact Form', 'Social Links'],
    },
    {
      icon: FaCogs,
      title: 'Custom Web Apps',
      price: '10,000+ THB',
      description: 'Small admin system, booking system, inventory system, CRM, custom features.',
      features: ['Admin Panel', 'Database', 'Custom Features', 'User Management'],
    },
  ];

  // Stars
  const stars = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    size: Math.random() > 0.7 ? 'star-large' : 'star-small',
  }));

  return (
    <section id="services" className="section-padding relative overflow-hidden bg-primary">
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
      <div className="galaxy-dust opacity-30 pointer-events-none" />

      {/* Nebulas */}
      <div className="nebula w-[400px] h-[400px] top-0 -left-32 bg-gradient-to-r from-cyan-500/8 via-teal-500/4 to-transparent" style={{ animationDelay: '0s' }} />
      <div className="nebula w-[300px] h-[300px] bottom-20 -right-20 bg-gradient-to-l from-violet-500/8 via-purple-500/4 to-transparent" style={{ animationDelay: '3s' }} />

      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-sky-400/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">What I offer</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Services <span className="gradient-text">I Offer</span>
          </h2>
          <p className="text-soft max-w-2xl mx-auto">
            Professional web development services at affordable prices. 
            Quality work, fast delivery, and excellent support.
          </p>
        </div>

        {/* Services grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`glass-card p-8 hover-glow group transition-all duration-700 ${
                cardsVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{ transitionDelay: cardsVisible ? `${index * 150}ms` : '0ms' }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center 
                              group-hover:bg-accent/30 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="text-2xl text-accent" />
                </div>
                <span className="px-4 py-2 bg-accent/10 text-accent text-sm font-semibold rounded-full">
                  {service.price}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-semibold text-slate mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-soft mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs px-3 py-1.5 rounded-full text-lightblue glass-card"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-soft mb-4">Need something specific?</p>
          <a href="#contact" className="btn-primary">
            Get Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
