import React from 'react';
import { ArrowRight, Layers, Sparkles, CheckCircle2 } from 'lucide-react';

export default function SurfaceRemodeling({ onOpenEstimate }) {
  const craftProjects = [
    {
      image: '/images/kitchen-luxury-waterfall.jpg',
      tag: 'Architectural Kitchen',
      title: 'Waterfall Marble & Fluted Walnut Island',
      desc: 'Precision mitered calacatta marble with vertical walnut slat paneling, brass accented hexagon backsplash, and custom integrated cabinetry.',
    },
    {
      image: '/images/bathroom-pebble-shower.jpg',
      tag: 'Custom Tile Craft',
      title: 'Spa Walk-in Shower with Pebble Floor',
      desc: 'Floor-to-ceiling marble porcelain tile, built-in corner bench, natural river pebble shower floor, and recessed illuminated niche.',
    },
    {
      image: '/images/flooring-lvp-hallway.jpg',
      tag: 'Continuous Flooring',
      title: 'Seamless Luxury Vinyl Plank Installation',
      desc: 'Precision subfloor leveling, zero-lip transitions between living zones, and clean white architectural baseboards.',
    },
  ];

  return (
    <section id="craft" className="py-20 md:py-28 bg-[#F8F7F4] text-[#141210]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-architectural uppercase text-[#B81828] mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Beyond Paint • Surface Craftsmanship</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#111111] leading-tight tracking-tight">
              Craftsmanship That Runs <br className="hidden sm:inline" />
              <span className="text-[#B81828]">Deeper Than Paint.</span>
            </h2>
            <p className="text-[#4A4844] text-sm sm:text-base mt-4 leading-relaxed">
              Renewall is built on over 15 years of fine finishing trades. When your project demands luxury cabinetry, architectural wall paneling, custom tile showers, or continuous flooring, our field crews execute with millimeter tolerances.
            </p>
          </div>
          <div>
            <button
              onClick={onOpenEstimate}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B81828] hover:text-[#93121E] transition-colors group cursor-pointer"
            >
              <span>Discuss An Interior Project</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 3-Card Editorial Project Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {craftProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#E8E5DF] flex flex-col group hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#111111]/85 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-md border border-white/10">
                  {project.tag}
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#111111] leading-snug group-hover:text-[#B81828] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#787570] leading-relaxed mt-2.5">
                    {project.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E8E5DF] flex items-center justify-between text-xs font-semibold text-[#111111]">
                  <span className="flex items-center gap-1 text-[#B81828]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified In-House Work
                  </span>
                  <span className="text-[#787570]">Cape Coral / SWFL</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Confidence Quote Strip */}
        <div className="bg-[#111111] text-white p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center sm:text-left">
            <h4 className="font-heading font-bold text-base sm:text-lg text-white">
              Planning a full home repaint or interior renovation?
            </h4>
            <p className="text-xs sm:text-sm text-white/70 mt-1">
              Combine your exterior paint with interior living surfaces for synchronized timelines and volume project savings.
            </p>
          </div>
          <button
            onClick={onOpenEstimate}
            className="px-6 py-3.5 rounded-xl bg-[#B81828] hover:bg-[#93121E] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-98 cursor-pointer shrink-0"
          >
            Request Multi-Service Consultation
          </button>
        </div>

      </div>
    </section>
  );
}
