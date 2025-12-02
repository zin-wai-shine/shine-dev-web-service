import React from 'react';
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Projects = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [cardsRef, cardsVisible] = useScrollAnimation(0.1);

  const projects = [
    {
      id: 1,
      title: 'Cafe Website',
      description: 'Modern responsive website for a coffee shop with menu, gallery, and contact page.',
      color: 'from-amber-500/20 to-orange-500/20',
    },
    {
      id: 2,
      title: 'Real Estate Landing Page',
      description: 'High-converting landing page for renting apartments with property listings.',
      color: 'from-emerald-500/20 to-teal-500/20',
    },
    {
      id: 3,
      title: 'Company Website',
      description: 'Clean corporate website with 5 pages including services, about, and contact.',
      color: 'from-blue-500/20 to-indigo-500/20',
    },
    {
      id: 4,
      title: 'Personal Portfolio',
      description: 'Stylish personal portfolio with smooth animations and modern design.',
      color: 'from-purple-500/20 to-pink-500/20',
    },
  ];

  // Stars
  const stars = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    size: Math.random() > 0.7 ? 'star-large' : 'star-small',
  }));

  return (
    <section id="projects" className="section-padding relative bg-primary">
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

      {/* Nebula - Right side */}
      <div className="nebula w-[350px] h-[350px] top-1/4 -right-24 bg-gradient-to-l from-pink-500/8 via-rose-500/4 to-transparent" style={{ animationDelay: '2s' }} />
      
      {/* Nebula - Bottom left */}
      <div className="nebula w-[280px] h-[280px] -bottom-20 left-10 bg-gradient-to-tr from-blue-500/8 via-cyan-500/4 to-transparent" style={{ animationDelay: '5s' }} />

      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-sky-400/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">My work</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Projects / <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-soft max-w-2xl mx-auto">
            Here are some examples of websites I've created. Each project is built 
            with attention to detail and client satisfaction.
          </p>
        </div>

        {/* Projects grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`glass-card overflow-hidden group hover-glow transition-all duration-700 ${
                cardsVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-16 scale-95'
              }`}
              style={{ transitionDelay: cardsVisible ? `${index * 150}ms` : '0ms' }}
            >
              {/* Project image placeholder */}
              <div className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <FaCode className="text-5xl text-accent/50 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300 flex items-center justify-center">
                  <button className="px-6 py-3 bg-accent/20 text-accent rounded-full border border-accent/30 
                                   hover:bg-accent hover:text-primary transition-all duration-300 
                                   flex items-center gap-2">
                    <FaExternalLinkAlt />
                    View Details
                  </button>
                </div>
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-slate mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-soft text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-soft/60 text-sm mt-8 italic">
          * You can request to see more projects or similar work during our consultation
        </p>
      </div>
    </section>
  );
};

export default Projects;
