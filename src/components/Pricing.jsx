import React, { useState, useEffect } from 'react';
import { FaCheck, FaStar, FaRocket, FaGlobe, FaBuilding, FaWrench, FaTimes, FaClock, FaHeadset, FaEdit, FaRocket as FaRocketIcon, FaInfoCircle, FaArrowRight } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Pricing = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [cardsRef, cardsVisible] = useScrollAnimation(0.1);
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedPlan) {
      // Save current scroll position
      const scrollY = window.scrollY;
      // Lock body scroll
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      return () => {
        // Restore scroll position when modal closes
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [selectedPlan]);

  // Handle Get Started click - close modal and scroll to contact
  const handleGetStarted = (e) => {
    e.preventDefault();
    setSelectedPlan(null);
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

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
      icon: FaGlobe,
      color: 'from-cyan-500 to-blue-500',
      bg: 'from-cyan-500/20 to-blue-500/10',
      iconBg: 'from-cyan-500/30 to-blue-500/20',
      details: {
        deliveryTime: '3-5 Days',
        support: '1 Month Free',
        revisions: '2-3 Rounds',
        fullDescription: 'Perfect starter package for individuals and small businesses looking to establish an online presence. Includes essential pages, mobile-responsive design, and basic SEO optimization.',
        additionalFeatures: [
          'Fast Loading Speed',
          'Basic Analytics Setup',
          'Email Integration',
          'Social Media Links',
        ],
      },
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
      icon: FaBuilding,
      color: 'from-purple-500 to-pink-500',
      bg: 'from-purple-500/20 to-pink-500/10',
      iconBg: 'from-purple-500/30 to-pink-500/20',
      details: {
        deliveryTime: '5-7 Days',
        support: '1 Month Free',
        revisions: '3-4 Rounds',
        fullDescription: 'Comprehensive solution with CMS, social integration, and all essential features for growing businesses. Perfect for shops, salons, cafes, and service-based companies.',
        additionalFeatures: [
          'Advanced SEO Optimization',
          'Google Analytics Integration',
          'Social Media Integration',
          'Google Maps Integration',
          'Newsletter Signup',
          'Testimonials Section',
        ],
      },
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
      icon: FaRocket,
      color: 'from-indigo-500 to-purple-500',
      bg: 'from-indigo-500/20 to-purple-500/10',
      iconBg: 'from-indigo-500/30 to-purple-500/20',
      details: {
        deliveryTime: '10-14 Days',
        support: '2 Months Free',
        revisions: 'Unlimited',
        fullDescription: 'Enterprise-level solution with advanced features, admin panel, and complete customization options. Includes blog system, multiple contact forms, and comprehensive analytics.',
        additionalFeatures: [
          'Custom Admin Dashboard',
          'User Management System',
          'Blog/News Management',
          'Advanced Analytics',
          'Multi-language Support',
          'API Integration',
          'Custom Features Development',
        ],
      },
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
      icon: FaWrench,
      color: 'from-orange-500 to-red-500',
      bg: 'from-orange-500/20 to-red-500/10',
      iconBg: 'from-orange-500/30 to-red-500/20',
      details: {
        deliveryTime: '1-2 Days',
        support: '1 Week Free',
        revisions: '1-2 Rounds',
        fullDescription: 'Quick and efficient fixes for existing websites. Fast turnaround time for urgent issues including layout problems, contact form issues, mobile responsiveness, and bug fixes.',
        additionalFeatures: [
          'Layout Corrections',
          'Contact Form Fixes',
          'Mobile Responsiveness',
          'Hosting/Domain Issues',
          'Performance Optimization',
          'Security Updates',
        ],
      },
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
    <section id="pricing" className="section-padding relative overflow-hidden bg-primary">
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
            Investment Plans
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
            Pricing <span className="gradient-text">Plans</span>
          </h2>
          <p className="text-soft text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Transparent pricing with no hidden fees. Choose the package that fits your needs and budget.
          </p>
        </div>

        {/* Enhanced Pricing grid */}
        <div 
          ref={cardsRef} 
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 transition-all duration-700 ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`group relative glass-card p-6 md:p-7 rounded-2xl hover:border-accent/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/10 ${
                plan.popular ? 'border-2 border-purple-500/40 shadow-lg shadow-purple-500/10' : ''
              }`}
              style={{ transitionDelay: cardsVisible ? `${index * 120}ms` : '0ms' }}
            >
              {/* Popular badge - positioned outside card */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white 
                              text-[10px] font-bold rounded-full flex items-center gap-1.5 shadow-lg z-30 whitespace-nowrap">
                  <FaStar className="text-[9px]" />
                  MOST POPULAR
                </div>
              )}

              {/* Buttons - positioned at bottom corner, overlapping card */}
              <div className="absolute bottom-4 right-4 flex gap-2 z-20">
                <button
                  onClick={() => setSelectedPlan(plan)}
                  className="group relative w-24 h-10 flex items-center justify-center gap-1.5 rounded-xl font-semibold transition-all duration-300 text-xs 
                            bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 text-white 
                            hover:from-slate-700 hover:via-slate-800 hover:to-slate-900 
                            shadow-lg hover:shadow-xl hover:scale-105 
                            border border-slate-500/30 hover:border-slate-400/50
                            overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <FaInfoCircle className="relative z-10 text-[11px]" />
                  <span className="relative z-10">Detail</span>
                </button>
                <a
                  href="#contact"
                  className={`group relative w-28 h-10 flex items-center justify-center gap-1.5 rounded-xl font-semibold transition-all duration-300 text-xs 
                            shadow-lg hover:shadow-xl hover:scale-105 overflow-hidden
                            ${plan.popular 
                              ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 text-white hover:from-purple-600 hover:via-pink-600 hover:to-purple-700 border border-purple-400/30 hover:border-purple-300/50' 
                              : 'bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600 text-white hover:from-cyan-600 hover:via-blue-600 hover:to-cyan-700 border border-cyan-400/30 hover:border-cyan-300/50'}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative z-10">Get Started</span>
                  <FaArrowRight className="relative z-10 text-[10px] group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>

              <div className="relative z-10">
                {/* Plan header with icon */}
                <div className={`text-center mb-5 ${plan.popular ? 'pt-3' : 'pt-1'}`}>
                  {/* Icon card - square with gradient */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300 shadow-lg`}>
                    <plan.icon className="text-white text-xl" />
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-heading font-bold text-slate mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-2 flex items-baseline justify-center flex-wrap gap-1">
                    <span className="text-2xl md:text-3xl font-bold gradient-text whitespace-nowrap">{plan.price}</span>
                    <span className="text-soft text-xs">{plan.currency}</span>
                  </div>
                  <p className="text-soft text-xs md:text-sm">{plan.description}</p>
                </div>

                {/* Features - simpler design */}
                <ul className="space-y-2.5 mb-20">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <div className="flex-shrink-0 mt-0.5">
                        <FaCheck className={`text-xs ${plan.popular ? 'text-purple-500' : 'text-accent'}`} />
                      </div>
                      <span className="text-lightblue text-[13px] leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Note */}
        <div 
          className={`text-center mt-12 md:mt-16 transition-all duration-700 delay-500 ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-soft/70 text-sm md:text-base mb-4">
            * Final price depends on specific requirements. Contact me for a custom quote.
          </p>
          <a href="#contact" className="btn-outline inline-flex items-center justify-center gap-2 group relative overflow-hidden">
            <span className="relative z-10">Get Custom Quote</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </a>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedPlan && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-4"
          onClick={() => setSelectedPlan(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
          
          {/* Modal Content */}
          <div 
            className="relative z-10 glass-card rounded-none md:rounded-3xl max-w-6xl w-full h-full md:max-h-[90vh] md:h-auto overflow-hidden flex flex-col shadow-2xl border-0 md:border border-accent/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Fixed Close Button - stays at top right when scrolling */}
            <button
              onClick={() => setSelectedPlan(null)}
              className="absolute top-3 right-3 md:top-6 md:right-6 w-9 h-9 md:w-12 md:h-12 flex items-center justify-center rounded-full 
                        bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 
                        text-white transition-all duration-300 hover:scale-110 shadow-xl z-[101]
                        backdrop-blur-sm border-2 border-white/30"
            >
              <FaTimes className="text-base md:text-xl" />
            </button>

            {/* Two Column Layout - Stack on mobile, side by side on desktop */}
            <div className="flex flex-col lg:flex-row h-full md:max-h-[90vh]">
              {/* Left Side - Plan Details */}
              <div 
                className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 lg:border-r border-accent/10 lg:max-w-md scroll-smooth lg:max-h-[90vh] max-h-[90vh] h-[90vh] lg:h-auto" 
                style={{ 
                  scrollbarWidth: 'thin',
                  scrollbarColor: 'rgba(100, 255, 218, 0.3) transparent'
                }}
              >
                {/* Modal Header */}
                <div className="text-center mb-4 md:mb-6">
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br ${selectedPlan.color} flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-xl`}>
                    <selectedPlan.icon className="text-white text-2xl md:text-3xl" />
                  </div>
                  {selectedPlan.popular && (
                    <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1 md:py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white 
                                  text-[10px] md:text-xs font-bold rounded-full mb-2 md:mb-3 shadow-md">
                      <FaStar className="text-[9px] md:text-xs" />
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-slate mb-2 md:mb-3">
                    {selectedPlan.name}
                  </h3>
                  <div className="mb-3 md:mb-4 flex items-baseline justify-center gap-2">
                    <span className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">{selectedPlan.price}</span>
                    <span className="text-soft text-sm md:text-base">{selectedPlan.currency}</span>
                  </div>
                  <p className="text-soft text-sm md:text-base px-2">{selectedPlan.description}</p>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-3 gap-2 md:gap-3 mb-4 md:mb-6">
                  <div className="glass-card p-2.5 md:p-4 rounded-lg md:rounded-xl text-center border border-accent/20">
                    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br ${selectedPlan.popular ? 'from-purple-500/20 to-pink-500/20' : 'from-cyan-500/20 to-blue-500/20'} flex items-center justify-center mx-auto mb-2 md:mb-3`}>
                      <FaClock className={`text-lg md:text-xl ${selectedPlan.popular ? 'text-purple-500' : 'text-accent'}`} />
                    </div>
                    <p className="text-soft text-[10px] md:text-xs mb-1 md:mb-1.5 font-medium">Delivery</p>
                    <p className="text-slate font-bold text-xs md:text-base">{selectedPlan.details.deliveryTime}</p>
                  </div>
                  <div className="glass-card p-2.5 md:p-4 rounded-lg md:rounded-xl text-center border border-accent/20">
                    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br ${selectedPlan.popular ? 'from-purple-500/20 to-pink-500/20' : 'from-cyan-500/20 to-blue-500/20'} flex items-center justify-center mx-auto mb-2 md:mb-3`}>
                      <FaHeadset className={`text-lg md:text-xl ${selectedPlan.popular ? 'text-purple-500' : 'text-accent'}`} />
                    </div>
                    <p className="text-soft text-[10px] md:text-xs mb-1 md:mb-1.5 font-medium">Support</p>
                    <p className="text-slate font-bold text-xs md:text-base">{selectedPlan.details.support}</p>
                  </div>
                  <div className="glass-card p-2.5 md:p-4 rounded-lg md:rounded-xl text-center border border-accent/20">
                    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br ${selectedPlan.popular ? 'from-purple-500/20 to-pink-500/20' : 'from-cyan-500/20 to-blue-500/20'} flex items-center justify-center mx-auto mb-2 md:mb-3`}>
                      <FaEdit className={`text-lg md:text-xl ${selectedPlan.popular ? 'text-purple-500' : 'text-accent'}`} />
                    </div>
                    <p className="text-soft text-[10px] md:text-xs mb-1 md:mb-1.5 font-medium">Revisions</p>
                    <p className="text-slate font-bold text-xs md:text-base">{selectedPlan.details.revisions}</p>
                  </div>
                </div>

                {/* Full Description */}
                <div className="mb-4 md:mb-6">
                  <h4 className="text-xl md:text-2xl font-heading font-bold text-slate mb-3 md:mb-4 flex items-center gap-2">
                    <div className={`w-1 h-5 md:h-6 rounded-full bg-gradient-to-b ${selectedPlan.color}`} />
                    About This Plan
                  </h4>
                  <p className="text-soft leading-relaxed text-sm md:text-base mb-2 md:mb-3">{selectedPlan.details.fullDescription}</p>
                  <div className={`flex items-start gap-2 md:gap-3 p-3 md:p-4 rounded-lg md:rounded-xl glass-card border ${selectedPlan.popular ? 'border-purple-400/40' : 'border-cyan-400/40'} bg-gradient-to-br ${selectedPlan.popular ? 'from-purple-500/10 via-pink-500/5 to-purple-500/10' : 'from-cyan-500/10 via-blue-500/5 to-cyan-500/10'}`}>
                    <div className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-gradient-to-br ${selectedPlan.color} mt-1 flex-shrink-0 shadow-lg ${selectedPlan.popular ? 'shadow-purple-500/50' : 'shadow-cyan-500/50'}`}></div>
                    <p className="text-xs md:text-sm text-slate leading-relaxed">
                      <span className={`font-bold ${selectedPlan.popular ? 'text-purple-400' : 'text-cyan-400'}`}>Fully Customizable:</span> <span className="text-slate">All designs, colors, layouts, and content can be tailored to match your brand perfectly.</span>
                    </p>
                  </div>
                </div>

                {/* Features Section */}
                <div className="mb-4 md:mb-6">
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <h4 className="text-xl md:text-2xl font-heading font-bold text-slate flex items-center gap-2">
                      <div className={`w-1 h-5 md:h-6 rounded-full bg-gradient-to-b ${selectedPlan.color}`} />
                      What's Included
                    </h4>
                    <span className={`text-[10px] md:text-xs text-white font-semibold px-2 md:px-2.5 py-0.5 md:py-1 rounded-full bg-gradient-to-r ${selectedPlan.popular ? 'from-purple-500/40 to-pink-500/40 border-purple-400/50' : 'from-cyan-500/40 to-blue-500/40 border-cyan-400/50'} border shadow-md`}>Customizable</span>
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    {selectedPlan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2 md:gap-3 glass-card p-2.5 md:p-3 rounded-lg border border-accent/10 hover:border-accent/30 transition-all">
                        <FaCheck className={`text-sm md:text-base mt-0.5 flex-shrink-0 ${selectedPlan.popular ? 'text-purple-500' : 'text-accent'}`} />
                        <span className="text-lightblue text-xs md:text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Features */}
                {selectedPlan.details.additionalFeatures && (
                  <div className="mb-4 md:mb-6">
                    <div className="flex items-center justify-between mb-3 md:mb-4">
                      <h4 className="text-xl md:text-2xl font-heading font-bold text-slate flex items-center gap-2">
                        <div className={`w-1 h-5 md:h-6 rounded-full bg-gradient-to-b ${selectedPlan.color}`} />
                        Additional Features
                      </h4>
                      <span className={`text-[10px] md:text-xs text-white font-semibold px-2 md:px-2.5 py-0.5 md:py-1 rounded-full bg-gradient-to-r ${selectedPlan.popular ? 'from-purple-500/40 to-pink-500/40 border-purple-400/50' : 'from-cyan-500/40 to-blue-500/40 border-cyan-400/50'} border shadow-md`}>Customizable</span>
                    </div>
                    <div className="space-y-2 md:space-y-3">
                      {selectedPlan.details.additionalFeatures.map((feature) => (
                        <div key={feature} className="flex items-start gap-2 md:gap-3 glass-card p-2.5 md:p-3 rounded-lg border border-accent/10 hover:border-accent/30 transition-all">
                          <FaRocketIcon className={`text-sm md:text-base mt-0.5 flex-shrink-0 ${selectedPlan.popular ? 'text-purple-500' : 'text-accent'}`} />
                          <span className="text-lightblue text-xs md:text-sm leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="flex flex-col gap-2 md:gap-3 pt-3 md:pt-4 border-t border-accent/20">
                  <button
                    onClick={handleGetStarted}
                    className={`w-full text-center py-3 md:py-3.5 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2
                              ${selectedPlan.popular 
                                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl hover:scale-105' 
                                : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 shadow-lg hover:shadow-xl hover:scale-105'}`}
                  >
                    Get Started
                    <FaArrowRight className="text-xs md:text-base" />
                  </button>
                  <button
                    onClick={() => setSelectedPlan(null)}
                    className="w-full py-2.5 md:py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 btn-outline hover:scale-105"
                  >
                    Close
                  </button>
                </div>
              </div>

              {/* Right Side - Scrollable Design Preview - Hidden on mobile */}
              <div className="hidden lg:flex flex-1 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex-col max-h-[90vh] h-auto">
                <div className={`p-3 md:p-4 border-b flex-shrink-0 bg-gradient-to-r ${selectedPlan.popular ? 'from-purple-900/30 via-pink-900/20 to-purple-900/30 border-purple-500/20' : 'from-cyan-900/30 via-blue-900/20 to-cyan-900/30 border-cyan-500/20'}`}>
                  <div className="flex items-center gap-2 mb-2 md:mb-3">
                    <h4 className="text-lg md:text-xl font-heading font-bold text-white flex items-center gap-2">
                      <div className={`w-1 h-5 md:h-6 rounded-full bg-gradient-to-b ${selectedPlan.color}`} />
                      Design Preview
                    </h4>
                    <span className={`text-[9px] md:text-[10px] text-white font-semibold px-2 md:px-2.5 py-0.5 rounded-full bg-gradient-to-r ${selectedPlan.popular ? 'from-purple-500/40 to-pink-500/40 border-purple-400/50' : 'from-cyan-500/40 to-blue-500/40 border-cyan-400/50'} border shadow-md`}>Example Only</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs md:text-sm text-slate-200">
                    <div className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-gradient-to-br ${selectedPlan.color} animate-pulse shadow-lg ${selectedPlan.popular ? 'shadow-purple-500/50' : 'shadow-cyan-500/50'}`}></div>
                    <span className="leading-tight">All designs are <span className={`font-bold ${selectedPlan.popular ? 'text-purple-300' : 'text-cyan-300'} drop-shadow-lg`}>fully customizable</span> to match your brand</span>
                  </div>
                </div>
                
                {/* Scrollable Page Design */}
                <div 
                  className="flex-1 overflow-y-auto p-3 md:p-6 scroll-smooth max-h-[calc(50vh-100px)] lg:max-h-[calc(90vh-80px)]" 
                  style={{ 
                    scrollbarWidth: 'thin',
                    scrollbarColor: 'rgba(100, 255, 218, 0.3) transparent'
                  }}
                >
                  <div className="glass-card rounded-2xl overflow-hidden border border-accent/20 bg-slate-800/50">
                    {/* Browser Header */}
                    <div className="bg-slate-900 p-3 border-b border-slate-700">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="flex-1 h-6 bg-slate-700/50 rounded px-3 flex items-center">
                          <span className="text-xs text-soft">example-website.com</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Scrollable Page Content */}
                    <div className="bg-gradient-to-b from-slate-800 to-slate-900 p-6 space-y-6">
                      {/* Hero Section */}
                      <div className={`h-48 rounded-xl bg-gradient-to-br ${selectedPlan.color} flex items-center justify-center`}>
                        <div className="text-center">
                          <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                            <selectedPlan.icon className="text-white text-3xl" />
                          </div>
                          <div className="h-4 bg-white/20 rounded w-32 mx-auto mb-2"></div>
                          <div className="h-3 bg-white/10 rounded w-48 mx-auto"></div>
                        </div>
                      </div>
                      
                      {/* Content Sections */}
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((section) => (
                        <div key={section} className="space-y-3">
                          <div className="h-6 bg-slate-700/50 rounded w-1/3"></div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="h-32 bg-slate-700/30 rounded-lg"></div>
                            <div className="h-32 bg-slate-700/30 rounded-lg"></div>
                          </div>
                          <div className="space-y-2">
                            <div className="h-2 bg-slate-700/40 rounded w-full"></div>
                            <div className="h-2 bg-slate-700/40 rounded w-5/6"></div>
                            <div className="h-2 bg-slate-700/40 rounded w-4/6"></div>
                          </div>
                        </div>
                      ))}
                      
                      {/* Services Grid */}
                      <div className="space-y-4">
                        <div className="h-6 bg-slate-700/50 rounded w-1/4"></div>
                        <div className="grid grid-cols-3 gap-3">
                          {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="h-24 bg-slate-700/30 rounded-lg"></div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Testimonials Section */}
                      <div className="space-y-4">
                        <div className="h-6 bg-slate-700/50 rounded w-1/3"></div>
                        <div className="space-y-3">
                          {[1, 2, 3].map((item) => (
                            <div key={item} className="h-20 bg-slate-700/30 rounded-lg"></div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Footer Section */}
                      <div className="pt-6 border-t border-slate-700">
                        <div className="grid grid-cols-4 gap-4 mb-4">
                          {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="space-y-2">
                              <div className="h-3 bg-slate-700/40 rounded w-2/3"></div>
                              <div className="h-2 bg-slate-700/30 rounded w-full"></div>
                              <div className="h-2 bg-slate-700/30 rounded w-5/6"></div>
                            </div>
                          ))}
                        </div>
                        <div className="h-4 bg-slate-700/40 rounded w-1/4 mx-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Pricing;
