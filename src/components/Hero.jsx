import React from 'react';

const Hero = () => {
  // Generate random stars
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    size: Math.random() > 0.8 ? 'star-large' : Math.random() > 0.5 ? '' : 'star-small',
  }));

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-pattern overflow-hidden max-w-full pt-20">
      {/* Galaxy Stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className={`star ${star.size}`}
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Galaxy Dust Layer */}
      <div className="galaxy-dust opacity-40 pointer-events-none" />

      {/* Nebula Effects */}
      <div className="nebula w-[500px] h-[500px] -top-32 -right-32 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent" style={{ animationDelay: '0s' }} />
      <div className="nebula w-[400px] h-[400px] -bottom-20 -left-20 bg-gradient-to-tr from-cyan-500/10 via-teal-500/5 to-transparent" style={{ animationDelay: '2s' }} />
      <div className="nebula w-[300px] h-[300px] top-1/3 right-1/4 bg-gradient-to-bl from-blue-500/8 via-indigo-500/4 to-transparent" style={{ animationDelay: '4s' }} />

      {/* Soft glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-sky-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-highlight/20 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(rgba(100, 255, 218, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 255, 218, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center pb-24 md:pb-0">
        <div className="space-y-6 md:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card text-accent text-sm font-mono animate-fade-in rounded-full">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Available for Projects
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight animate-slide-up">
            <span className="text-slate">Professional Web Developer</span>
            <br />
            <span className="gradient-text">for Your Business</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-soft font-light animate-slide-up max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
            <span className="text-accent font-medium">Affordable, Fast, Reliable</span>
          </p>

          {/* Description */}
          <p className="text-soft max-w-2xl mx-auto leading-relaxed animate-slide-up text-base md:text-lg" style={{ animationDelay: '0.4s' }}>
            I help small businesses, shops, and startups get modern, fast, mobile-friendly websites 
            starting from only <span className="text-accent font-semibold">3,000 THB</span>. I create clean, 
            high-quality websites quickly with 5+ years of experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2">
              Get Your Website Today
            </a>
            <a href="#services" className="btn-outline">
              View Services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-0 right-0 z-10 flex justify-center">
        <a href="#about" className="group flex flex-col items-center gap-2">
          <span className="text-soft/60 text-xs font-mono tracking-widest uppercase group-hover:text-accent transition-colors">
            Scroll
          </span>
          <div className="relative w-8 h-12 rounded-full border-2 border-accent/30 group-hover:border-accent/60 transition-all duration-300 flex justify-center">
            <div className="w-1.5 h-3 bg-accent rounded-full mt-2 animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
