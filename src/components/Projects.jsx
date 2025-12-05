import React, { useState, useMemo, useRef, useEffect } from 'react';
import { FaExternalLinkAlt, FaCode, FaSearch, FaChevronLeft, FaChevronRight, FaChartLine, FaUsers, FaShoppingCart, FaMobileAlt, FaGlobe, FaBuilding, FaUtensils, FaHome, FaBriefcase, FaGraduationCap, FaHeart, FaMusic, FaCamera, FaCar, FaDumbbell, FaPalette, FaBook, FaGamepad, FaPlane, FaHotel, FaCoffee, FaPizzaSlice, FaTshirt, FaGem, FaCut, FaStethoscope, FaLaptop, FaStore, FaWrench, FaTools, FaLeaf, FaDog, FaBaby, FaGift, FaBirthdayCake, FaRing, FaUmbrellaBeach, FaBicycle, FaMotorcycle, FaShip, FaTrain, FaBus, FaSubway, FaTaxi, FaTruck, FaWarehouse, FaIndustry } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Projects = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const projectsGridRef = useRef(null);

  // Update cards per page based on screen size
  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(1); // Mobile: 1 card per page
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2); // Tablet: 2 cards per page
      } else {
        setCardsPerPage(3); // Desktop: 3 cards per page
      }
    };

    updateCardsPerPage();
    window.addEventListener('resize', updateCardsPerPage);
    return () => window.removeEventListener('resize', updateCardsPerPage);
  }, []);

  // Business types with icons and colors
  const businessTypes = [
    { name: 'Cafe', icon: FaCoffee, color: 'from-amber-500 to-orange-500', bg: 'from-amber-500/20 to-orange-500/10' },
    { name: 'Restaurant', icon: FaUtensils, color: 'from-red-500 to-rose-500', bg: 'from-red-500/20 to-rose-500/10' },
    { name: 'Pizza Shop', icon: FaPizzaSlice, color: 'from-orange-500 to-red-500', bg: 'from-orange-500/20 to-red-500/10' },
    { name: 'Real Estate', icon: FaHome, color: 'from-emerald-500 to-teal-500', bg: 'from-emerald-500/20 to-teal-500/10' },
    { name: 'Corporate', icon: FaBuilding, color: 'from-blue-500 to-indigo-500', bg: 'from-blue-500/20 to-indigo-500/10' },
    { name: 'E-commerce', icon: FaShoppingCart, color: 'from-purple-500 to-pink-500', bg: 'from-purple-500/20 to-pink-500/10' },
    { name: 'Portfolio', icon: FaBriefcase, color: 'from-cyan-500 to-blue-500', bg: 'from-cyan-500/20 to-blue-500/10' },
    { name: 'Education', icon: FaGraduationCap, color: 'from-indigo-500 to-purple-500', bg: 'from-indigo-500/20 to-purple-500/10' },
    { name: 'Healthcare', icon: FaHeart, color: 'from-pink-500 to-rose-500', bg: 'from-pink-500/20 to-rose-500/10' },
    { name: 'Music', icon: FaMusic, color: 'from-violet-500 to-purple-500', bg: 'from-violet-500/20 to-purple-500/10' },
    { name: 'Photography', icon: FaCamera, color: 'from-gray-500 to-slate-500', bg: 'from-gray-500/20 to-slate-500/10' },
    { name: 'Automotive', icon: FaCar, color: 'from-slate-500 to-gray-500', bg: 'from-slate-500/20 to-gray-500/10' },
    { name: 'Fitness', icon: FaDumbbell, color: 'from-green-500 to-emerald-500', bg: 'from-green-500/20 to-emerald-500/10' },
    { name: 'Art Gallery', icon: FaPalette, color: 'from-fuchsia-500 to-pink-500', bg: 'from-fuchsia-500/20 to-pink-500/10' },
    { name: 'Bookstore', icon: FaBook, color: 'from-amber-500 to-yellow-500', bg: 'from-amber-500/20 to-yellow-500/10' },
    { name: 'Gaming', icon: FaGamepad, color: 'from-green-500 to-cyan-500', bg: 'from-green-500/20 to-cyan-500/10' },
    { name: 'Travel', icon: FaPlane, color: 'from-sky-500 to-blue-500', bg: 'from-sky-500/20 to-blue-500/10' },
    { name: 'Hotel', icon: FaHotel, color: 'from-yellow-500 to-amber-500', bg: 'from-yellow-500/20 to-amber-500/10' },
    { name: 'Fashion', icon: FaTshirt, color: 'from-pink-500 to-rose-500', bg: 'from-pink-500/20 to-rose-500/10' },
    { name: 'Jewelry', icon: FaGem, color: 'from-cyan-500 to-teal-500', bg: 'from-cyan-500/20 to-teal-500/10' },
    { name: 'Salon', icon: FaCut, color: 'from-purple-500 to-violet-500', bg: 'from-purple-500/20 to-violet-500/10' },
    { name: 'Medical', icon: FaStethoscope, color: 'from-red-500 to-pink-500', bg: 'from-red-500/20 to-pink-500/10' },
    { name: 'Tech Startup', icon: FaLaptop, color: 'from-blue-500 to-cyan-500', bg: 'from-blue-500/20 to-cyan-500/10' },
    { name: 'Retail Store', icon: FaStore, color: 'from-orange-500 to-amber-500', bg: 'from-orange-500/20 to-amber-500/10' },
    { name: 'Repair Service', icon: FaWrench, color: 'from-gray-600 to-slate-600', bg: 'from-gray-600/20 to-slate-600/10' },
    { name: 'Hardware Store', icon: FaTools, color: 'from-slate-600 to-gray-600', bg: 'from-slate-600/20 to-gray-600/10' },
    { name: 'Organic Food', icon: FaLeaf, color: 'from-green-600 to-emerald-600', bg: 'from-green-600/20 to-emerald-600/10' },
    { name: 'Pet Shop', icon: FaDog, color: 'from-amber-600 to-orange-600', bg: 'from-amber-600/20 to-orange-600/10' },
    { name: 'Baby Store', icon: FaBaby, color: 'from-pink-400 to-rose-400', bg: 'from-pink-400/20 to-rose-400/10' },
    { name: 'Gift Shop', icon: FaGift, color: 'from-purple-400 to-pink-400', bg: 'from-purple-400/20 to-pink-400/10' },
    { name: 'Bakery', icon: FaBirthdayCake, color: 'from-yellow-400 to-amber-400', bg: 'from-yellow-400/20 to-amber-400/10' },
    { name: 'Wedding', icon: FaRing, color: 'from-rose-400 to-pink-400', bg: 'from-rose-400/20 to-pink-400/10' },
    { name: 'Beach Resort', icon: FaUmbrellaBeach, color: 'from-cyan-400 to-blue-400', bg: 'from-cyan-400/20 to-blue-400/10' },
    { name: 'Bike Shop', icon: FaBicycle, color: 'from-green-400 to-emerald-400', bg: 'from-green-400/20 to-emerald-400/10' },
    { name: 'Motorcycle', icon: FaMotorcycle, color: 'from-red-600 to-orange-600', bg: 'from-red-600/20 to-orange-600/10' },
    { name: 'Cruise', icon: FaShip, color: 'from-blue-600 to-cyan-600', bg: 'from-blue-600/20 to-cyan-600/10' },
    { name: 'Train Service', icon: FaTrain, color: 'from-indigo-600 to-purple-600', bg: 'from-indigo-600/20 to-purple-600/10' },
    { name: 'Bus Service', icon: FaBus, color: 'from-yellow-600 to-orange-600', bg: 'from-yellow-600/20 to-orange-600/10' },
    { name: 'Subway', icon: FaSubway, color: 'from-slate-700 to-gray-700', bg: 'from-slate-700/20 to-gray-700/10' },
    { name: 'Taxi Service', icon: FaTaxi, color: 'from-yellow-500 to-amber-500', bg: 'from-yellow-500/20 to-amber-500/10' },
    { name: 'Logistics', icon: FaTruck, color: 'from-gray-700 to-slate-700', bg: 'from-gray-700/20 to-slate-700/10' },
    { name: 'Warehouse', icon: FaWarehouse, color: 'from-slate-500 to-gray-500', bg: 'from-slate-500/20 to-gray-500/10' },
    { name: 'Manufacturing', icon: FaIndustry, color: 'from-gray-600 to-slate-600', bg: 'from-gray-600/20 to-slate-600/10' },
    { name: 'Mobile App', icon: FaMobileAlt, color: 'from-purple-600 to-pink-600', bg: 'from-purple-600/20 to-pink-600/10' },
    { name: 'Web Agency', icon: FaGlobe, color: 'from-cyan-600 to-blue-600', bg: 'from-cyan-600/20 to-blue-600/10' },
    { name: 'Consulting', icon: FaChartLine, color: 'from-indigo-600 to-blue-600', bg: 'from-indigo-600/20 to-blue-600/10' },
    { name: 'SaaS Platform', icon: FaUsers, color: 'from-violet-600 to-purple-600', bg: 'from-violet-600/20 to-purple-600/10' },
  ];

  // Generate 52 unique projects
  const generateProjects = () => {
    const projects = [];
    const descriptions = [
      'Modern responsive website with beautiful UI/UX design',
      'High-converting landing page with contact forms',
      'E-commerce platform with shopping cart functionality',
      'Corporate website with multiple pages and services',
      'Mobile-first design with smooth animations',
      'Booking system with calendar integration',
      'Admin dashboard with analytics and reports',
      'Portfolio website with project showcase',
      'Blog platform with content management',
      'Online store with payment integration',
      'Restaurant website with menu and ordering',
      'Real estate platform with property listings',
      'Fitness center website with class schedules',
      'Educational platform with course management',
      'Healthcare website with appointment booking',
    ];

    for (let i = 0; i < 52; i++) {
      const businessType = businessTypes[i % businessTypes.length];
      const description = descriptions[i % descriptions.length];
      const cityNames = ['Bangkok', 'Chiang Mai', 'Phuket', 'Pattaya', 'Hua Hin', 'Krabi', 'Ayutthaya', 'Sukhothai'];
      const city = cityNames[i % cityNames.length];
      
      projects.push({
        id: i + 1,
        title: `${businessType.name} Website`,
        location: city,
        description: `${description} for ${businessType.name.toLowerCase()} in ${city}.`,
        businessType: businessType.name,
        icon: businessType.icon,
        color: businessType.color,
        bg: businessType.bg,
        stats: {
          visitors: Math.floor(Math.random() * 5000) + 1000,
          conversion: (Math.random() * 10 + 5).toFixed(1),
          revenue: Math.floor(Math.random() * 50000) + 10000,
        },
      });
    }
    return projects;
  };

  const allProjects = useMemo(() => generateProjects(), []);

  // Filter projects based on search
  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return allProjects;
    const query = searchQuery.toLowerCase();
    return allProjects.filter(project =>
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.businessType.toLowerCase().includes(query) ||
      project.location.toLowerCase().includes(query)
    );
  }, [searchQuery, allProjects]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  // Reset to page 1 when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // Scroll to top of projects grid when page changes
  useEffect(() => {
    if (projectsGridRef.current) {
      const element = projectsGridRef.current;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 100; // 100px offset from top

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, [currentPage]);

  // Stars
  const stars = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    size: Math.random() > 0.7 ? 'star-large' : 'star-small',
  }));

  const handlePrevious = () => {
    setCurrentPage(prev => Math.max(1, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage(prev => Math.min(totalPages, prev + 1));
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <section id="projects" className="section-padding relative bg-primary overflow-hidden">
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
      </div>

      {/* Enhanced Nebula Effects */}
      <div className="nebula w-[500px] h-[500px] -top-32 -right-32 bg-gradient-to-bl from-indigo-500/10 via-purple-500/6 to-transparent" style={{ animationDelay: '1s' }} />
      <div className="nebula w-[400px] h-[400px] -bottom-24 -left-24 bg-gradient-to-tr from-cyan-500/10 via-blue-500/6 to-transparent" style={{ animationDelay: '3s' }} />

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
          className={`text-center mb-12 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-card text-accent text-xs font-mono tracking-widest uppercase mb-6 rounded-full border border-accent/20 hover:border-accent/40 transition-all">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            My Work
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
            Projects / <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-soft text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore {allProjects.length} successful projects. Each project is built with attention to detail and client satisfaction.
          </p>
        </div>

        {/* Search Box */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FaSearch className="text-accent/50 text-lg" />
            </div>
            <input
              type="text"
              placeholder="Search projects by name, type, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 glass-card border border-accent/20 rounded-2xl text-slate placeholder-soft/50 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-accent/50 hover:text-accent transition-colors"
              >
                <span className="text-2xl">&times;</span>
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="text-soft text-sm mt-3 text-center">
              Found {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {/* Projects Grid - Responsive: 1 mobile, 2 tablet, 3 desktop */}
        {currentProjects.length > 0 ? (
          <div ref={projectsGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {currentProjects.map((project, index) => {
              const IconComponent = project.icon;
              return (
            <div
              key={project.id}
                  className="group relative glass-card rounded-3xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 flex flex-col h-full min-h-[450px]"
                >
                  {/* Dashboard-style Image Section */}
                  <div className={`relative h-56 bg-gradient-to-br ${project.color} overflow-hidden`}>
                    {/* Dashboard mockup design */}
                    <div className="absolute inset-0 p-4 flex flex-col gap-2">
                      {/* Dashboard header */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-white/30" />
                          <div className="w-3 h-3 rounded-full bg-white/30" />
                          <div className="w-3 h-3 rounded-full bg-white/30" />
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded bg-white/20" />
                          <div className="w-8 h-4 rounded bg-white/20" />
                        </div>
                      </div>
                      
                      {/* Dashboard content grid */}
                      <div className="grid grid-cols-3 gap-2 flex-1">
                        <div className="bg-white/20 rounded backdrop-blur-sm" />
                        <div className="bg-white/20 rounded backdrop-blur-sm" />
                        <div className="bg-white/20 rounded backdrop-blur-sm" />
                        <div className="bg-white/20 rounded backdrop-blur-sm col-span-2" />
                        <div className="bg-white/20 rounded backdrop-blur-sm" />
                        <div className="bg-white/20 rounded backdrop-blur-sm col-span-3" />
                      </div>
                      
                      {/* Dashboard footer */}
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex-1 h-2 bg-white/20 rounded" />
                        <div className="w-12 h-2 bg-white/20 rounded" />
                      </div>
                    </div>

                    {/* Icon overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <IconComponent className="text-white text-6xl" />
                    </div>

                    {/* Stats overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <div className="flex items-center justify-between text-white text-xs">
                        <div className="flex items-center gap-1">
                          <FaUsers className="text-white/80" />
                          <span>{project.stats.visitors.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaChartLine className="text-white/80" />
                          <span>{project.stats.conversion}%</span>
                        </div>
                  </div>
                </div>
                
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="px-6 py-3 bg-accent/20 text-accent rounded-full border border-accent/30 hover:bg-accent hover:text-primary transition-all duration-300 flex items-center gap-2 font-semibold">
                    <FaExternalLinkAlt />
                    View Details
                  </button>
                </div>
              </div>

              {/* Project content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                        <IconComponent className="text-white text-lg" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-heading font-bold text-slate group-hover:text-accent transition-colors line-clamp-1">
                  {project.title}
                </h3>
                        <p className="text-accent text-xs font-mono">{project.location}</p>
                      </div>
                    </div>
                    <p className="text-soft text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                  {project.description}
                </p>
                    <div className="flex items-center justify-end pt-4 border-t border-accent/10 mt-auto">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-br ${project.bg} text-accent border border-accent/20 whitespace-nowrap`}>
                        {project.businessType}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <FaCode className="text-6xl text-accent/30 mx-auto mb-4" />
            <p className="text-soft text-lg">No projects found matching your search.</p>
              </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`p-3 rounded-xl glass-card border transition-all duration-300 ${
                currentPage === 1
                  ? 'opacity-50 cursor-not-allowed border-accent/10'
                  : 'border-accent/20 hover:border-accent/50 hover:scale-110 hover:shadow-lg hover:shadow-accent/20'
              }`}
            >
              <FaChevronLeft className={`text-lg ${currentPage === 1 ? 'text-soft' : 'text-accent'}`} />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }

                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageClick(pageNum)}
                    className={`w-10 h-10 rounded-xl glass-card border transition-all duration-300 font-semibold ${
                      currentPage === pageNum
                        ? 'bg-accent/20 border-accent/50 text-accent scale-110 shadow-lg shadow-accent/20'
                        : 'border-accent/20 hover:border-accent/50 hover:scale-110 text-soft hover:text-accent'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`p-3 rounded-xl glass-card border transition-all duration-300 ${
                currentPage === totalPages
                  ? 'opacity-50 cursor-not-allowed border-accent/10'
                  : 'border-accent/20 hover:border-accent/50 hover:scale-110 hover:shadow-lg hover:shadow-accent/20'
              }`}
            >
              <FaChevronRight className={`text-lg ${currentPage === totalPages ? 'text-soft' : 'text-accent'}`} />
            </button>
          </div>
        )}

        {/* Page info */}
        <div className="text-center mt-6 text-soft text-sm">
          Showing {startIndex + 1}-{Math.min(endIndex, filteredProjects.length)} of {filteredProjects.length} projects
        </div>
      </div>
    </section>
  );
};

export default Projects;
