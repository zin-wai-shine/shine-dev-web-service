import React from 'react';
import { FaMoneyBillWave, FaBolt, FaComments, FaPaintBrush, FaMobileAlt, FaCode, FaTools } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const WhyChooseMe = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [gridRef, gridVisible] = useScrollAnimation(0.1);

  const reasons = [
    { 
      icon: FaMoneyBillWave, 
      text: 'Affordable Pricing', 
      desc: 'Budget-friendly solutions',
      color: 'from-green-500 to-emerald-500',
      bg: 'from-green-500/20 to-emerald-500/10'
    },
    { 
      icon: FaBolt, 
      text: 'Fast Delivery', 
      desc: '1–5 Days turnaround',
      color: 'from-yellow-500 to-orange-500',
      bg: 'from-yellow-500/20 to-orange-500/10'
    },
    { 
      icon: FaComments, 
      text: 'Easy Communication', 
      desc: 'Clear & responsive',
      color: 'from-blue-500 to-cyan-500',
      bg: 'from-blue-500/20 to-cyan-500/10'
    },
    { 
      icon: FaPaintBrush, 
      text: 'Modern Design', 
      desc: 'Trending aesthetics',
      color: 'from-purple-500 to-pink-500',
      bg: 'from-purple-500/20 to-pink-500/10'
    },
    { 
      icon: FaMobileAlt, 
      text: 'Mobile-Friendly', 
      desc: 'Responsive everywhere',
      color: 'from-indigo-500 to-purple-500',
      bg: 'from-indigo-500/20 to-purple-500/10'
    },
    { 
      icon: FaCode, 
      text: 'Clean Code', 
      desc: 'Maintainable & scalable',
      color: 'from-cyan-500 to-blue-500',
      bg: 'from-cyan-500/20 to-blue-500/10'
    },
    { 
      icon: FaTools, 
      text: 'Free Maintenance', 
      desc: '1 Month support included',
      color: 'from-rose-500 to-red-500',
      bg: 'from-rose-500/20 to-red-500/10'
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
    <section id="why-choose-me" className="section-padding relative overflow-hidden bg-primary">
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
            What I Care
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
            Why <span className="gradient-text">Choose Me?</span>
          </h2>
          <p className="text-soft text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Quality service, affordable pricing, and a commitment to your success
          </p>
        </div>

        {/* Enhanced Reasons grid */}
        <div 
          ref={gridRef} 
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-700 ${
            gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {reasons.map((reason, index) => (
            <div
              key={reason.text}
              className="group relative glass-card p-6 md:p-8 rounded-3xl hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 cursor-pointer overflow-hidden"
              style={{ transitionDelay: gridVisible ? `${index * 80}ms` : '0ms' }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
              
              <div className="relative z-10 text-center">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}>
                  <reason.icon className="text-white text-2xl" />
                </div>
                
                {/* Text content */}
                <h3 className="text-slate group-hover:text-accent font-bold text-lg mb-2 transition-colors">
                  {reason.text}
                </h3>
                <p className="text-soft text-sm opacity-80">
                  {reason.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
