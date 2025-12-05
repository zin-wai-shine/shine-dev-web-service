import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaHome, FaUser, FaCogs, FaFolderOpen, FaEnvelope, FaWhatsapp, FaTelegramPlane, FaLine, FaTag } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ['home', 'about', 'services', 'projects', 'pricing', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      // Check if contact section is visible or near bottom of page
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        const contactTop = contactElement.offsetTop;
        const isNearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 200;
        const isContactVisible = window.scrollY + window.innerHeight / 2 >= contactTop;
        
        if (isNearBottom || isContactVisible) {
          setActiveSection('contact');
          return;
        }
      }
      
      // Check other sections (reverse order to prioritize later sections)
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          
          if (scrollPosition >= offsetTop) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Hello', href: '#home', icon: FaHome },
    { name: 'Story', href: '#about', icon: FaUser },
    { name: 'Services', href: '#services', icon: FaCogs },
    { name: 'Works', href: '#projects', icon: FaFolderOpen },
    { name: 'Pricing', href: '#pricing', icon: FaTag },
    { name: 'Let\'s Talk', href: '#contact', icon: FaEnvelope },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg shadow-accent/5' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center space-x-2 group relative z-[70]">
              <span className="text-2xl font-heading font-bold tracking-wider">
                <span className="text-slate">SHINE</span>
                <span className="gradient-text">DEV</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {/* Navigation Links */}
              <div className="flex items-center space-x-6">
                {navLinks.map((link, index) => {
                  const sectionId = link.href.replace('#', '');
                  const isActive = activeSection === sectionId;
                  
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className={`relative font-medium transition-colors duration-300 group ${
                        isActive ? 'text-accent' : 'text-soft hover:text-accent'
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {link.name}
                      <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-accent to-sky-400 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`} />
                    </a>
                  );
                })}
              </div>
              
              {/* Right side buttons */}
              <div className="flex items-center gap-3 pl-4 border-l border-accent/20">
                <ThemeToggle />
                <a href="#contact" className="btn-primary text-sm px-6 py-2.5 whitespace-nowrap">
                  Get Quote
                </a>
              </div>
            </div>

            {/* Mobile Menu Buttons */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <a href="#contact" className="btn-primary text-xs px-4 py-2 whitespace-nowrap">
                Get Quote
              </a>
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className={`relative z-[70] w-10 h-10 flex items-center justify-center rounded-lg glass-card border-accent/30 text-accent hover:border-accent/60 hover:bg-accent/10 transition-all duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                aria-label="Open menu"
              >
                <FaBars className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      <div 
        className={`fixed inset-0 backdrop-overlay z-[55] md:hidden transition-opacity duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Full Width, Auto Height Curved Menu */}
      <div 
        className={`fixed top-0 left-0 right-0 z-[60] md:hidden transition-all duration-500 ease-out overflow-hidden`}
        style={{
          maxHeight: isOpen ? '80vh' : '0',
          clipPath: isOpen 
            ? 'ellipse(120% 100% at 50% 0%)' 
            : 'ellipse(120% 0% at 50% 0%)',
          transition: 'clip-path 0.5s cubic-bezier(0.4, 0, 0.2, 1), max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* Curved Background - deep to soft gradient */}
        <div className="absolute inset-0 mobile-menu-gradient" />

        {/* Menu Content */}
        <div className={`relative z-10 flex flex-col transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`} style={{ transitionDelay: isOpen ? '200ms' : '0ms' }}>
          
          {/* Header with Close Button */}
          <div className="flex items-center justify-between px-6 pt-6">
            <span className="text-xl font-heading font-bold tracking-wider">
              <span className="text-slate">SHINE</span>
              <span className="gradient-text">DEV</span>
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="w-11 h-11 flex items-center justify-center rounded-full glass-card border-accent/30 text-accent hover:border-accent/60 transition-all duration-300 cursor-pointer"
              aria-label="Close menu"
            >
              <FaTimes className="text-lg pointer-events-none" />
            </button>
          </div>

          {/* Navigation Links - Horizontal Grid */}
          <div className="px-6 pt-2">
            <div className="grid grid-cols-3 gap-2">
              {navLinks.map((link, index) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`group flex flex-col items-center gap-1.5 py-3 px-2 rounded-2xl 
                               text-xs font-heading font-medium transition-all duration-300
                               ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                               ${isActive 
                                 ? 'text-accent bg-accent/20 border border-accent/30' 
                                 : 'text-slate hover:text-accent bg-accent/5 hover:bg-accent/15'
                               }`}
                    style={{ transitionDelay: isOpen ? `${250 + index * 60}ms` : '0ms' }}
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${
                      isActive ? 'bg-accent/30' : 'bg-accent/15 group-hover:bg-accent/25'
                    }`}>
                      <link.icon className="text-accent text-base" />
                    </div>
                    {link.name}
                  </a>
                );
              })}
              
              {/* CTA in grid */}
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className={`group flex flex-col items-center gap-1.5 py-3 px-2 rounded-2xl 
                           text-xs font-heading font-medium text-primary
                           bg-gradient-to-br from-accent to-sky-400 hover:shadow-lg hover:shadow-accent/30
                           transition-all duration-300
                           ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: isOpen ? '550ms' : '0ms' }}
              >
                <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <FaWhatsapp className="text-primary text-base" />
                </div>
                Get Quote
              </a>
            </div>
          </div>

          {/* Contact Options - moved up */}
          <div className={`px-6 pt-4 pb-16 transition-all duration-400 ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: isOpen ? '600ms' : '0ms' }}>
            <p className="text-soft/60 text-xs text-center mb-3">Contact me directly</p>
            <div className="grid grid-cols-3 gap-2">
              <a 
                href="https://wa.me/66627188699" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-green-500/20 text-green-400 text-xs font-medium hover:bg-green-500/30 transition-all"
              >
                <FaWhatsapp /> WhatsApp
              </a>
              <a 
                href="https://line.me/ti/p/~zinwaishine" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-green-400/20 text-green-300 text-xs font-medium hover:bg-green-400/30 transition-all"
              >
                <FaLine /> Line
              </a>
              <a 
                href="https://t.me/zinwaishine" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-sky-500/20 text-sky-400 text-xs font-medium hover:bg-sky-500/30 transition-all"
              >
                <FaTelegramPlane /> Telegram
              </a>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Navbar;
