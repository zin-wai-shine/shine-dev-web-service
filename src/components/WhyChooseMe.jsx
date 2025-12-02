import React from 'react';
import { FaMoneyBillWave, FaBolt, FaComments, FaPaintBrush, FaMobileAlt, FaCode, FaTools, FaLanguage } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const WhyChooseMe = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [gridRef, gridVisible] = useScrollAnimation(0.1);

  const reasons = [
    { icon: FaMoneyBillWave, text: 'Affordable Pricing' },
    { icon: FaBolt, text: 'Fast Delivery (1–5 Days)' },
    { icon: FaComments, text: 'Very Easy Communication' },
    { icon: FaPaintBrush, text: 'Modern Design' },
    { icon: FaMobileAlt, text: 'Mobile-Friendly' },
    { icon: FaCode, text: 'Clean Code' },
    { icon: FaTools, text: 'Free Basic Maintenance for 1 Month' },
    { icon: FaLanguage, text: 'Support for Thai & Myanmar Language' },
  ];

  // Stars
  const stars = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    size: Math.random() > 0.7 ? 'star-large' : 'star-small',
  }));

  return (
    <section className="section-padding relative overflow-hidden bg-primary">
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

      {/* Nebula - Center */}
      <div className="nebula w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-indigo-500/6 via-purple-500/4 to-pink-500/6" style={{ animationDelay: '1s' }} />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">Why work with me</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            Why <span className="gradient-text">Choose Me?</span>
          </h2>
        </div>

        {/* Reasons grid */}
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.text}
              className={`glass-card p-6 text-center hover-glow group cursor-default transition-all duration-500 ${
                gridVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-90'
              }`}
              style={{ transitionDelay: gridVisible ? `${index * 80}ms` : '0ms' }}
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-4
                            group-hover:bg-accent/30 group-hover:scale-110 transition-all duration-300">
                <reason.icon className="text-2xl text-accent" />
              </div>
              <p className="text-lightblue text-sm font-medium group-hover:text-slate transition-colors">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
