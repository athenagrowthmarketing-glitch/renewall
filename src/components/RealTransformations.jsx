import React from 'react';
import { ArrowRight, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RealTransformations() {
  const caseStudies = [
    {
      title: 'Waterfront Canal Pool Estate',
      category: 'Exterior Painting & Stucco Sealing',
      location: 'Cape Coral, FL',
      image: '/images/hero-exterior-waterfront.jpg',
      scope: 'Pressure wash decontamination, elastomeric stucco crack repair, 2-coat deep navy weather shield with crisp white fascia trim.',
      stats: 'Full Exterior • 3,200 sq ft',
    },
    {
      title: 'Contemporary Fluted Island Kitchen',
      category: 'Interior Finishes & Remodeling',
      location: 'Fort Myers / Cape Coral, FL',
      image: '/images/kitchen-luxury-waterfall.jpg',
      scope: 'Level-5 smooth drywall finishing, custom fluted walnut waterfall island, calacatta quartz countertops & hexagonal marble backsplash.',
      stats: 'Kitchen & Living • Level-5 Finish',
    },
    {
      title: 'Modern Coastal Spa Bath',
      category: 'Tile Installation & Bathroom Remodel',
      location: 'Cape Coral, FL',
      image: '/images/bathroom-pebble-shower.jpg',
      scope: 'Curbless walk-in glass shower, large-format porcelain marble tile, natural river pebble basin & matte black hardware integration.',
      stats: 'Master Bath • Waterproof Schluter System',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-[#FAFAF8] border-b border-[#E8E6E1]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B81828]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B81828]"></span>
              <span>Visual Proof &amp; Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#14171E] tracking-tight font-heading">
              Featured Residential{' '}
              <span className="font-serif italic font-normal text-[#B81828]">Transformations.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#555B66]">
              Real field photography from ongoing and completed projects across Cape Coral, Fort Myers, and Southwest Florida.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#14171E] hover:text-[#B81828] transition-colors py-2 px-4 rounded-full bg-white border border-[#E8E6E1] shadow-sm group shrink-0"
          >
            <span>View Full Project Gallery</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden bg-white border border-[#E8E6E1] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Frame */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Category Pill */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0E1116]/80 backdrop-blur-md text-white text-[11px] font-bold border border-white/20">
                  {study.category}
                </div>

                {/* Location Badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs text-white/90 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#B81828]" />
                  <span>{study.location}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[#14171E] group-hover:text-[#B81828] transition-colors font-heading">
                    {study.title}
                  </h3>
                  <p className="text-xs text-[#555B66] leading-relaxed mt-2">
                    {study.scope}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E8E6E1] flex items-center justify-between text-xs text-[#14171E] font-semibold">
                  <div className="flex items-center gap-1.5 text-[#555B66]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B81828]" />
                    <span>{study.stats}</span>
                  </div>
                  <Link
                    to="/projects"
                    className="text-[#B81828] hover:underline flex items-center gap-1"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
