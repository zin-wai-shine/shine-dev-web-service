import React, { useState, useEffect } from 'react';
import { FaGlobe, FaFileCode, FaShoppingCart, FaDatabase, FaMobileAlt, FaRocket, FaCode, FaUsers, FaAward, FaClock, FaHeart, FaHandshake, FaSeedling, FaChartLine, FaTrophy, FaRocket as FaRocketIcon } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [profileRef, profileVisible] = useScrollAnimation(0.2);
  const [statsRef, statsVisible] = useScrollAnimation(0.2);
  const [servicesRef, servicesVisible] = useScrollAnimation(0.2);
  const [journeyRef, journeyVisible] = useScrollAnimation(0.2);

  const [counters, setCounters] = useState({ projects: 0, experience: 0, clients: 0, delivery: 0 });

  const services = [
    { icon: FaGlobe, text: 'Business Websites', color: 'from-cyan-500 to-blue-500', desc: 'Professional corporate sites' },
    { icon: FaFileCode, text: 'Landing Pages', color: 'from-purple-500 to-pink-500', desc: 'High-converting pages' },
    { icon: FaMobileAlt, text: 'Booking / Contact', color: 'from-green-500 to-emerald-500', desc: 'Interactive contact forms' },
    { icon: FaShoppingCart, text: 'Ecommerce Shops', color: 'from-orange-500 to-red-500', desc: 'Online store solutions' },
    { icon: FaDatabase, text: 'Admin Systems', color: 'from-indigo-500 to-purple-500', desc: 'Custom dashboards' },
    { icon: FaRocket, text: 'Responsive Sites', color: 'from-blue-500 to-cyan-500', desc: 'Mobile-first design' },
  ];

  const stats = [
    { icon: FaCode, label: 'Projects Completed', value: 50, suffix: '+', color: 'text-cyan-400', key: 'projects', bg: 'from-cyan-500/20 to-blue-500/10' },
    { icon: FaUsers, label: 'Happy Clients', value: 40, suffix: '+', color: 'text-green-400', key: 'clients', bg: 'from-green-500/20 to-emerald-500/10' },
    { icon: FaClock, label: 'Fast Delivery', value: 7, suffix: ' Days', color: 'text-orange-400', key: 'delivery', bg: 'from-orange-500/20 to-red-500/10' },
  ];

  const values = [
    { icon: FaRocket, text: 'Fast Delivery', desc: 'Quick turnaround times' },
    { icon: FaHandshake, text: 'Clear Communication', desc: 'Transparent process' },
    { icon: FaHeart, text: 'Affordable Pricing', desc: 'Budget-friendly solutions' },
    { icon: FaAward, text: 'Quality Work', desc: 'Proven track record' },
  ];

  const journey = [
    { 
      year: '2019', 
      title: 'Started Journey', 
      desc: 'Began as a freelance developer, learning the fundamentals of web development',
      icon: FaSeedling,
      color: 'from-green-500 to-emerald-500',
      bg: 'from-green-500/20 to-emerald-500/10',
      lightBg: 'from-green-500/10 to-emerald-500/5',
      achievements: ['First Client', 'Learning Phase', 'Building Portfolio']
    },
    { 
      year: '2021', 
      title: 'Expanded Services', 
      desc: 'Added ecommerce solutions and advanced features to serve more clients',
      icon: FaChartLine,
      color: 'from-blue-500 to-cyan-500',
      bg: 'from-blue-500/20 to-cyan-500/10',
      lightBg: 'from-blue-500/10 to-cyan-500/5',
      achievements: ['Ecommerce Solutions', '20+ Projects', 'Growing Client Base']
    },
    { 
      year: '2023', 
      title: '50+ Projects', 
      desc: 'Reached a major milestone with 50+ successful projects completed',
      icon: FaTrophy,
      color: 'from-yellow-500 to-orange-500',
      bg: 'from-yellow-500/20 to-orange-500/10',
      lightBg: 'from-yellow-500/10 to-orange-500/5',
      achievements: ['50+ Projects', '40+ Happy Clients', 'Quality Service']
    },
    { 
      year: '2024', 
      title: 'Growing Strong', 
      desc: 'Continuing to serve clients with modern solutions and excellent service',
      icon: FaRocketIcon,
      color: 'from-purple-500 to-pink-500',
      bg: 'from-purple-500/20 to-pink-500/10',
      lightBg: 'from-purple-500/10 to-pink-500/5',
      achievements: ['Modern Tech Stack', 'Fast Delivery', 'Ongoing Growth']
    },
    { 
      year: '2025', 
      title: 'Future Vision', 
      desc: 'Expanding services and reaching new heights in web development excellence',
      icon: FaRocketIcon,
      color: 'from-indigo-500 to-purple-500',
      bg: 'from-indigo-500/20 to-purple-500/10',
      lightBg: 'from-indigo-500/10 to-purple-500/5',
      achievements: ['AI Integration', 'Advanced Solutions', 'Global Reach']
    },
  ];

  // Animate counters
  useEffect(() => {
    if (statsVisible) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      const animateCounter = (key, target) => {
        let current = 0;
        const increment = target / steps;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCounters(prev => ({ ...prev, [key]: target }));
            clearInterval(timer);
          } else {
            setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
          }
        }, interval);
      };

      animateCounter('projects', 50);
      animateCounter('experience', 5);
      animateCounter('clients', 40);
      animateCounter('delivery', 7);
    }
  }, [statsVisible]);

  // Generate stars for this section
  const stars = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    size: Math.random() > 0.7 ? 'star-large' : 'star-small',
  }));

  return (
    <section id="about" className="section-padding relative bg-primary overflow-hidden">
      {/* Enhanced Galaxy Stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className={`star ${star.size}`}
            style={{ left: star.left, top: star.top, animationDelay: star.delay }}
          />
        ))}
      </div>

      {/* Enhanced Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-500/15 via-blue-500/8 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-purple-500/15 via-pink-500/8 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent/8 via-sky-400/5 to-accent/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-indigo-500/10 to-purple-500/5 rounded-full blur-3xl animate-float" />
      </div>

      {/* Enhanced Nebula Effects */}
      <div className="nebula w-[500px] h-[500px] -top-32 -right-32 bg-gradient-to-bl from-indigo-500/10 via-purple-500/6 to-transparent" style={{ animationDelay: '1s' }} />
      <div className="nebula w-[400px] h-[400px] -bottom-24 -left-24 bg-gradient-to-tr from-cyan-500/10 via-blue-500/6 to-transparent" style={{ animationDelay: '3s' }} />
      <div className="nebula w-[350px] h-[350px] top-1/3 left-1/3 bg-gradient-to-br from-pink-500/8 via-rose-500/4 to-transparent" style={{ animationDelay: '5s' }} />

      {/* Enhanced Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(rgba(100, 255, 218, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 255, 218, 0.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 md:mb-24 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-card text-accent text-xs font-mono tracking-widest uppercase mb-6 rounded-full border border-accent/20 hover:border-accent/40 transition-all">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            About Me
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-soft text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences that drive business growth and transform ideas into reality
          </p>
        </div>

        {/* Enhanced Profile Section */}
        <div 
          ref={profileRef}
          className={`mb-20 transition-all duration-700 delay-100 ${
            profileVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden group hover:border-accent/50 transition-all duration-500">
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 blur-2xl animate-pulse" />
            </div>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" style={{ animation: 'shimmer 3s infinite' }} />
            </div>
            
            <div className="relative z-10">
              {/* Enhanced Profile Header */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
                <div className="relative group/avatar">
                  {/* Animated rings */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/30 via-purple-500/30 to-pink-500/30 blur-xl animate-pulse" />
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-cyan-500/40 via-purple-500/40 to-pink-500/40 flex items-center justify-center border-4 border-accent/40 group-hover/avatar:border-accent/80 transition-all duration-500 shadow-2xl shadow-accent/20 group-hover/avatar:scale-105 group-hover/avatar:rotate-3">
                    <div className="text-5xl md:text-6xl font-heading font-bold gradient-text">ZW</div>
                  </div>
                  {/* Status indicator */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full border-4 border-primary animate-pulse shadow-lg shadow-green-500/50 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  {/* Floating particles */}
                  <div className="absolute -top-2 -left-2 w-3 h-3 bg-cyan-400 rounded-full animate-float opacity-70" style={{ animationDelay: '0s' }} />
                  <div className="absolute -top-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-float opacity-70" style={{ animationDelay: '1s' }} />
                  <div className="absolute -bottom-4 left-4 w-2.5 h-2.5 bg-pink-400 rounded-full animate-float opacity-70" style={{ animationDelay: '2s' }} />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-card text-accent text-xs font-mono mb-4 rounded-full border border-accent/20">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                    Available for Projects
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate mb-3">
                    Hi! I'm <span className="gradient-text">Zin Wai Shine</span>
                  </h3>
                  <p className="text-accent font-mono text-base md:text-lg mb-4">Full Stack Web Developer</p>
                  <p className="text-soft leading-relaxed text-base md:text-lg max-w-2xl">
                    A passionate Web Developer building 
                    modern, scalable websites for companies and individuals. I specialize in creating 
                    professional, high-performance websites that help businesses establish a strong 
                    online presence and drive growth.
                  </p>
                </div>
              </div>

              {/* Enhanced Values Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {values.map((value, index) => (
                  <div 
                    key={value.text}
                    className="group/value relative p-5 rounded-2xl glass-card border border-accent/20 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 text-center hover:scale-105 hover:shadow-lg hover:shadow-accent/10"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 mb-3 group-hover/value:scale-110 transition-transform">
                      <value.icon className="text-accent text-xl" />
                    </div>
                    <p className="text-accent font-semibold text-sm md:text-base mb-1">{value.text}</p>
                    <p className="text-soft text-xs opacity-80">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div 
          ref={statsRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20 transition-all duration-700 delay-200 ${
            statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative glass-card p-6 md:p-8 rounded-2xl hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${stat.bg} mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <stat.icon className={`${stat.color} text-2xl`} />
              </div>
                <div className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-2">
                {counters[stat.key] || 0}{stat.suffix}
                </div>
                <p className="text-soft text-sm md:text-base font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Services Section */}
        <div 
          ref={servicesRef}
          className={`mb-20 transition-all duration-700 delay-300 ${
            servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate">
                What I <span className="gradient-text">Create</span>
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
            </div>
            <p className="text-soft text-lg max-w-2xl mx-auto">
              Professional web solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={service.text}
                className="group relative p-6 rounded-3xl glass-card hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 cursor-pointer overflow-hidden"
                style={{ animationDelay: servicesVisible ? `${index * 50}ms` : '0ms' }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500`} />
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
              
              <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}>
                    <service.icon className="text-white text-2xl" />
                  </div>
                  <h4 className="text-slate group-hover:text-accent font-bold text-lg mb-2 transition-colors">
                    {service.text}
                  </h4>
                  <p className="text-soft text-sm opacity-80">{service.desc}</p>
                </div>
                    </div>
                  ))}
                </div>
              </div>

        {/* Enhanced Journey Timeline Section */}
        <div 
          ref={journeyRef}
          className={`transition-all duration-700 delay-400 ${
            journeyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-card text-accent text-xs font-mono tracking-widest uppercase mb-6 rounded-full border border-accent/20 hover:border-accent/40 transition-all">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              My Journey
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
              My <span className="gradient-text">Journey</span>
            </h3>
            <p className="text-soft text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              A timeline of growth, achievements, and continuous learning
            </p>
          </div>

          <div className="relative">
            {/* Enhanced Timeline line with animated gradient */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent/20 via-accent/60 to-accent/20 transform md:-translate-x-1/2 rounded-full">
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/30 via-purple-500/50 to-pink-500/30 rounded-full animate-pulse" />
            </div>
            
            {/* Animated particles along timeline */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 transform md:-translate-x-1/2 pointer-events-none">
              {[...Array(journey.length)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-accent rounded-full animate-pulse"
                  style={{
                    top: `${(i + 1) * (100 / (journey.length + 1))}%`,
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
              ))}
            </div>
            
            <div className="space-y-12 md:space-y-16">
              {journey.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ 
                    animationDelay: journeyVisible ? `${index * 200}ms` : '0ms',
                    transition: 'all 0.7s ease-out'
                  }}
                >
                  {/* Enhanced Timeline dot with icon */}
                  <div className="relative z-10 flex-shrink-0 group/dot">
                    {/* Outer glow ring */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${milestone.color} opacity-0 group-hover/dot:opacity-30 blur-xl transition-opacity duration-500`} />
                    
                    {/* Main dot - ensure gradient is always visible */}
                    <div className={`relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br ${milestone.color} border-4 border-accent/50 dark:border-accent/50 flex items-center justify-center shadow-2xl shadow-accent/30 group-hover/dot:scale-110 group-hover/dot:rotate-12 transition-all duration-500`}>
                      {/* Background overlay to ensure gradient visibility */}
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${milestone.color} opacity-100`} />
                      
                      {/* Icon - ensure it's always visible */}
                      <milestone.icon className="relative z-10 text-white text-2xl md:text-3xl drop-shadow-lg" />
                      
                      {/* Inner pulse */}
                      <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping" style={{ animationDelay: `${index * 0.3}s` }} />
                    </div>
                    
                    {/* Year badge */}
                    <div className={`absolute -top-2 -right-2 md:-top-3 md:-right-3 px-3 py-1.5 rounded-full bg-gradient-to-br ${milestone.color} text-white text-xs md:text-sm font-bold shadow-lg border-2 border-primary dark:border-primary`}>
                      {milestone.year}
                    </div>
                  </div>
              
                  {/* Enhanced Content card - Half width, alternating sides */}
                  <div className={`group/card w-full md:w-[calc(50%-3rem)] max-w-md glass-card p-6 md:p-8 rounded-3xl hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 overflow-hidden ${
                    index % 2 === 0 ? 'md:text-left md:mr-auto' : 'md:text-right md:ml-auto'
                  }`}>
                    {/* Light mode background - visible by default, hidden in dark */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${milestone.lightBg} opacity-100 dark:opacity-0 transition-opacity duration-500`} />
                    
                    {/* Dark mode hover background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${milestone.bg} opacity-0 dark:opacity-0 dark:group-hover/card:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Light mode hover background - visible on hover in light mode */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${milestone.bg} opacity-0 group-hover/card:opacity-60 dark:group-hover/card:opacity-0 transition-opacity duration-500`} />
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000" />
                    </div>
                    
                    <div className="relative z-10">
                      <h4 className="text-2xl md:text-3xl font-heading font-bold text-slate mb-3 group-hover/card:text-accent transition-colors">
                        {milestone.title}
                      </h4>
                      <p className="text-soft mb-6 leading-relaxed text-base md:text-lg">
                        {milestone.desc}
                      </p>
                      
                      {/* Achievements tags */}
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                        {milestone.achievements.map((achievement, idx) => (
                          <span
                            key={achievement}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-card border border-accent/20 hover:border-accent/40 text-accent text-xs font-medium transition-all hover:scale-105"
                          >
                            <FaAward className="text-xs" />
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
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
