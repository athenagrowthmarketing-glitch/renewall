import React, { useState } from 'react';
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';

export default function PortfolioGrid({ onOpenEstimate }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'exterior', label: 'Exterior Painting' },
    { id: 'interior', label: 'Interior Painting' },
    { id: 'remodeling', label: 'Kitchen & Tile Craft' },
  ];

  const projects = [
    {
      id: 1,
      category: 'exterior',
      title: 'Cape Coral Canal Residence',
      location: 'Cape Coral, FL',
      scope: 'Full Exterior Stucco Weatherization, Coastal Navy Body & Pure White Eaves',
      image: '/images/hero-exterior-waterfront.jpg',
      badge: 'Exterior Painting',
    },
    {
      id: 2,
      category: 'remodeling',
      title: 'European Modern Kitchen Suite',
      location: 'Southwest Florida',
      scope: 'Waterfall Calacatta Marble Island, Vertical Fluted Walnut, Hexagon Marble Backsplash',
      image: '/images/kitchen-luxury-waterfall.jpg',
      badge: 'Kitchen Remodeling',
    },
    {
      id: 3,
      category: 'remodeling',
      title: 'Contemporary Spa Bath',
      location: 'Cape Coral, FL',
      scope: 'Subway Tile Enclosure, Matte Black Fixtures, Arched Mirror & Wood-Look Porcelain',
      image: '/images/bathroom-modern-glass.jpg',
      badge: 'Custom Tile',
    },
    {
      id: 4,
      category: 'exterior',
      title: 'Florida Pool Lanai & Patio',
      location: 'Cape Coral, FL',
      scope: 'Exterior Facade Painting, Trim Band Contrast & Weather-Sealed Stucco Walls',
      image: '/images/exterior-pool-patio.jpg',
      badge: 'Exterior Painting',
    },
    {
      id: 5,
      category: 'interior',
      title: 'Light-Reflecting Master Suite',
      location: 'Fort Myers, FL',
      scope: 'Whole-Room White Enamel, Seamless Baseboard Transitions & Ceiling Recoating',
      image: '/images/interior-bedroom-white.jpg',
      badge: 'Interior Painting',
    },
    {
      id: 6,
      category: 'remodeling',
      title: 'Marble Hexagon Backsplash Detail',
      location: 'Cape Coral, FL',
      scope: 'Precision Tile Setting with Brass Edge Trims and Quartz Countertop Integration',
      image: '/images/kitchen-backsplash-craft.jpg',
      badge: 'Tile Installation',
    },
    {
      id: 7,
      category: 'remodeling',
      title: 'Walk-In Shower with Pebble Pan',
      location: 'Cape Coral, FL',
      scope: 'Large-Format Porcelain Walls, Built-In Bench Seat & Recessed Shampoos Niche',
      image: '/images/bathroom-pebble-shower.jpg',
      badge: 'Custom Tile',
    },
    {
      id: 8,
      category: 'exterior',
      title: 'Waterfront Dock & Tiki Elevation',
      location: 'Cape Coral, FL',
      scope: 'Full Canal-Facing Wall Weatherization & Architectural Pure White Soffits',
      image: '/images/exterior-canal-dock.jpg',
      badge: 'Exterior Painting',
    },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#FFFFFF] text-[#141210]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-architectural uppercase text-[#B81828] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B81828]"></span>
              <span>Visual Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#111111] leading-tight tracking-tight">
              Selected Projects Across <br className="hidden sm:inline" />
              <span className="text-[#B81828]">Southwest Florida.</span>
            </h2>
          </div>
          <div>
            <button
              onClick={onOpenEstimate}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B81828] hover:text-[#93121E] transition-colors group cursor-pointer"
            >
              <span>Start Your Transformation</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12 border-b border-[#E8E5DF] pb-5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#B81828] text-white shadow-md'
                  : 'bg-[#F8F7F4] text-[#4A4844] hover:bg-[#E8E5DF] hover:text-[#111111]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="bg-[#F8F7F4] rounded-2xl overflow-hidden border border-[#E8E5DF] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#111111]/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                  {p.badge}
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-[#787570] mb-1.5">
                    <MapPin className="w-3 h-3 text-[#B81828]" />
                    <span>{p.location}</span>
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#111111] leading-snug group-hover:text-[#B81828] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#787570] leading-relaxed mt-2">
                    {p.scope}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E8E5DF] flex items-center justify-between text-xs">
                  <span className="text-[11px] font-bold text-[#B81828] uppercase tracking-wider">
                    Completed Project
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#B81828]" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
