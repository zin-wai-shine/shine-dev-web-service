import React from 'react';
import { FaCheck, FaStar } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Pricing = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [cardsRef, cardsVisible] = useScrollAnimation(0.1);

  const plans = [
    {
      name: 'Basic Website',
      price: '3,000',
      currency: 'THB',
      description: 'Perfect for personal or small business',
      features: [
        '3 pages (Home, About, Contact)',
        'Mobile Responsive',
        'Contact Form',
        'Basic SEO',
      ],
      popular: false,
    },
    {
      name: 'Business Website',
      price: '6,000–10,000',
      currency: 'THB',
      description: 'Ideal for growing businesses',
      features: [
        '5–7 pages',
        'Content Management System',
        'Contact Form',
        'Social Media Integration',
        'Google Maps',
      ],
      popular: true,
    },
    {
      name: 'Full Company Website',
      price: '20,000+',
      currency: 'THB',
      description: 'Complete solution for companies',
      features: [
        'Custom Design',
        'Admin Features',
        'Multiple Contact Forms',
        'Blog/News Section',
        'Advanced SEO',
        'Analytics Integration',
      ],
      popular: false,
    },
    {
      name: 'Website Fixes',
      price: '300–1,500',
      currency: 'THB',
      description: 'Quick repairs and updates',
      features: [
        'Small issues fixed',
        'Fast repair',
        'Bug fixes',
        'Layout corrections',
      ],
      popular: false,
    },
  ];

  // Stars
  const stars = Array.from({ length: 35 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    size: Math.random() > 0.8 ? 'star-large' : Math.random() > 0.4 ? '' : 'star-small',
  }));

  return (
    <section className="section-padding relative bg-primary">
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
      <div className="galaxy-dust opacity-25 pointer-events-none" />

      {/* Nebulas */}
      <div className="nebula w-[400px] h-[400px] -top-20 left-1/4 bg-gradient-to-br from-teal-500/8 via-cyan-500/4 to-transparent" style={{ animationDelay: '0s' }} />
      <div className="nebula w-[350px] h-[350px] bottom-10 -right-20 bg-gradient-to-tl from-purple-500/8 via-violet-500/4 to-transparent" style={{ animationDelay: '4s' }} />

      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-400/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">Investment</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Pricing <span className="gradient-text">Plans</span>
          </h2>
          <p className="text-soft max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Choose the package that fits your needs.
          </p>
        </div>

        {/* Pricing grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`glass-card p-6 relative transition-all duration-700 ${
                plan.popular ? 'border-accent/50 md:scale-105' : ''
              } ${
                cardsVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{ transitionDelay: cardsVisible ? `${index * 120}ms` : '0ms' }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-primary 
                              text-xs font-bold rounded-full flex items-center gap-1">
                  <FaStar className="text-xs" />
                  POPULAR
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-6 pt-2">
                <h3 className="text-lg font-heading font-semibold text-slate mb-2">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-soft text-sm ml-1">{plan.currency}</span>
                </div>
                <p className="text-soft text-xs">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <FaCheck className="text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-lightblue">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`block text-center py-3 rounded-full font-medium transition-all duration-300
                          ${plan.popular 
                            ? 'btn-primary' 
                            : 'btn-outline'}`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-soft/60 text-sm mt-8">
          * Final price depends on specific requirements. Contact me for a custom quote.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
