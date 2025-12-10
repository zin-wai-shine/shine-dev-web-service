import React, { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseMe from './components/WhyChooseMe';
import Projects from './components/Projects';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import './index.css';

function App() {
  useEffect(() => {
    // Ensure page starts at top on initial load
    window.scrollTo(0, 0);
    
    // Remove hash from URL if present and convert to path
    if (window.location.hash) {
      const hash = window.location.hash.slice(1); // Remove #
      if (hash) {
        window.history.replaceState({ section: hash }, '', `/${hash}`);
      } else {
        window.history.replaceState(null, null, '/');
      }
    }
    
    // Prevent any automatic scrolling behavior
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Handle browser back/forward buttons
    const handlePopState = (e) => {
      const path = window.location.pathname.slice(1); // Remove leading /
      if (path) {
        const element = document.getElementById(path);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        // If no path, scroll to top
        window.scrollTo(0, 0);
      }
    };
    
    window.addEventListener('popstate', handlePopState);
    
    // Check if URL has a path and scroll to that section
    const currentPath = window.location.pathname.slice(1);
    if (currentPath) {
      const element = document.getElementById(currentPath);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
    
    // Disable scrolling on initial load
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    // Enable scrolling when user tries to interact
    const enableScroll = () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      // Remove all listeners
      window.removeEventListener('wheel', enableScroll);
      window.removeEventListener('touchmove', enableScroll);
      document.removeEventListener('click', enableScroll);
      document.removeEventListener('keydown', enableScroll);
    };
    
    // Enable scroll on user interaction (wheel, touch, click, or keypress)
    window.addEventListener('wheel', enableScroll, { once: true, passive: true });
    window.addEventListener('touchmove', enableScroll, { once: true, passive: true });
    document.addEventListener('click', enableScroll, { once: true });
    document.addEventListener('keydown', enableScroll, { once: true });
    
    return () => {
      // Cleanup: re-enable scroll if component unmounts
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-primary overflow-x-hidden max-w-full">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <WhyChooseMe />
          <Projects />
          <Pricing />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
