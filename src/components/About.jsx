import React from 'react';
import { FaGlobe, FaFileCode, FaShoppingCart, FaDatabase, FaMobileAlt, FaRocket } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [leftRef, leftVisible] = useScrollAnimation(0.2);
  const [rightRef, rightVisible] = useScrollAnimation(0.2);

  const services = [
    { icon: FaGlobe, text: 'Business Websites' },
    { icon: FaFileCode, text: 'Landing Pages' },
    { icon: FaMobileAlt, text: 'Booking / Contact Websites' },
    { icon: FaShoppingCart, text: 'Ecommerce (Basic Shop Pages)' },
    { icon: FaDatabase, text: 'Custom Admin Systems' },
    { icon: FaRocket, text: 'Modern Responsive Websites' },
  ];

  const highlights = [
    'Fast delivery',
    'Clear communication',
    'Affordable pricing',
    '5+ years experience',
  ];

  // Generate stars for this section
  const stars = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    size: Math.random() > 0.7 ? 'star-large' : 'star-small',
  }));

  return (
    <section id="about" className="section-padding relative bg-primary">
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

      {/* Nebula - Top Right */}
      <div className="nebula w-[350px] h-[350px] -top-20 -right-20 bg-gradient-to-bl from-indigo-500/8 via-purple-500/4 to-transparent" style={{ animationDelay: '1s' }} />

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-400/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">Get to know me</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - About content */}
          <div 
            ref={leftRef}
            className={`space-y-6 transition-all duration-700 delay-200 ${
              leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="glass-card p-8">
              <p className="text-xl text-slate font-heading font-medium mb-4">
                Hi! I'm <span className="gradient-text">Zin Wai Shine</span>
              </p>
              <p className="text-soft leading-relaxed mb-6">
                A Web Developer with <span className="text-accent font-semibold">5+ years of experience</span> building 
                websites for companies and individuals. I create professional, modern websites 
                that help businesses grow online.
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-3">
                {highlights.map((item) => (
                  <span 
                    key={item}
                    className="px-4 py-2 text-accent text-sm rounded-full glass-card"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - What I Create */}
          <div 
            ref={rightRef}
            className={`glass-card p-8 transition-all duration-700 delay-300 ${
              rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <h3 className="text-xl font-heading font-semibold text-slate mb-6">
              What I Create
            </h3>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div 
                  key={service.text}
                  className={`flex items-center gap-4 p-3 rounded-xl glass-card hover:border-accent/30 transition-all group ${
                    rightVisible ? 'animate-bounce-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: rightVisible ? `${index * 100}ms` : '0ms' }}
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <service.icon className="text-accent" />
                  </div>
                  <span className="text-lightblue group-hover:text-slate transition-colors">
                    {service.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
