import React from 'react';
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
