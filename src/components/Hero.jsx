import React from 'react';

const Hero = () => {
  // Helper function to scroll to section and update URL to /sectionId
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      // Update URL to /sectionId (e.g., /home, /about)
      window.history.pushState({ section: sectionId }, '', `/${sectionId}`);
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  // Generate random stars - matching About page count and pattern
  const stars = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    size: Math.random() > 0.7 ? 'star-large' : 'star-small',
  }));

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-primary overflow-hidden max-w-full pt-20">
      {/* Enhanced Galaxy Stars - matching About page */}
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

      {/* Enhanced Nebula Effects - matching About page opacity values */}
      <div className="nebula w-[500px] h-[500px] -top-32 -right-32 bg-gradient-to-bl from-indigo-500/10 via-purple-500/6 to-transparent" style={{ animationDelay: '1s' }} />
      <div className="nebula w-[400px] h-[400px] -bottom-24 -left-24 bg-gradient-to-tr from-cyan-500/10 via-blue-500/6 to-transparent" style={{ animationDelay: '3s' }} />
      <div className="nebula w-[350px] h-[350px] top-1/3 right-1/4 bg-gradient-to-br from-pink-500/8 via-rose-500/4 to-transparent" style={{ animationDelay: '5s' }} />

      {/* Enhanced Animated Background Orbs - matching About page */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-500/15 via-blue-500/8 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-purple-500/15 via-pink-500/8 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent/8 via-sky-400/5 to-accent/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-indigo-500/10 to-purple-500/5 rounded-full blur-3xl animate-float" />
      </div>

      {/* Enhanced Grid Pattern Overlay - matching About page */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(rgba(100, 255, 218, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 255, 218, 0.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center pb-24 md:pb-0">
        <div className="space-y-6 md:space-y-8">
          {/* Enhanced Badge - matching About page style */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-card text-accent text-sm font-mono animate-fade-in rounded-full border border-accent/20 hover:border-accent/40 transition-all">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Available for Projects
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight animate-slide-up mb-6">
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
            high-quality websites quickly.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <a href="/contact" onClick={(e) => scrollToSection(e, 'contact')} className="btn-primary inline-flex items-center justify-center gap-2 group relative overflow-hidden">
              <span className="relative z-10">Get Your Website Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
            <a href="/services" onClick={(e) => scrollToSection(e, 'services')} className="btn-outline group relative overflow-hidden">
              <span className="relative z-10">View Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-0 right-0 z-10 flex justify-center">
        <a href="/about" onClick={(e) => scrollToSection(e, 'about')} className="group flex flex-col items-center gap-2 cursor-pointer">
          <span className="text-soft/70 text-xs font-mono tracking-widest uppercase group-hover:text-accent transition-all duration-300 group-hover:scale-110">
            Scroll
          </span>
          <div className="relative w-7 h-11 rounded-full border-2 border-accent/40 group-hover:border-accent/80 transition-all duration-300 flex justify-center items-start pt-2 scroll-mouse-container">
            <div className="w-1.5 h-3 bg-gradient-to-b from-accent to-sky-400 rounded-full scroll-mouse-wheel animate-bounce" />
            <div className="absolute inset-0 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-all duration-300 blur-sm" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
