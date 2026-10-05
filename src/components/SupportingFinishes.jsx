import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SupportingFinishes() {
  const finishes = [
    {
      title: 'Contemporary Kitchen Remodeling',
      subtitle: 'Custom Cabinetry & Quartz Waterfall Countertops',
      image: '/images/kitchen-modern-wide.jpg',
      desc: 'Seamless interior transformations featuring shaker and slab cabinetry, designer backsplash tiling, and calacatta quartz waterfall islands.',
    },
    {
      title: 'Walk-In Spa Bathrooms',
      subtitle: 'Curbless Porcelain Showers & Natural Pebble Pans',
      image: '/images/bathroom-modern-glass.jpg',
      desc: 'Master bathroom renovations featuring waterproof Schluter systems, frameless glass partitions, niche shelving, and modern black accents.',
    },
    {
      title: 'Continuous Luxury Flooring',
      subtitle: 'Waterproof Luxury Vinyl Plank (LVP) & Tile',
      image: '/images/flooring-lvp-hallway.jpg',
      desc: 'Laser-leveled subfloor prep and seamless room-to-room installations paired with 5-1/4" painted colonial baseboard integration.',
    },
    {
      title: 'Commercial-Grade Garage Epoxy',
      subtitle: '100% Solid Decorative Flake Floor Coatings',
      image: '/images/garage-epoxy-coating.jpg',
      desc: 'Heavy-duty polyaspartic and epoxy coatings that resist hot tire pickup, oil stains, and Florida humidity while elevating your garage.',
    },
  ];

  return (
    <section className="py-24 bg-[#FAFAF8] border-b border-[#E8E6E1]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B81828]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Complete Surface Authority</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#14171E] tracking-tight font-heading">
              Architectural Finishes &amp;{' '}
              <span className="font-serif italic font-normal text-[#B81828]">Interior Craft.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#555B66]">
              Beyond exterior and interior painting, Renewall delivers turnkey surface craft for homeowners seeking a cohesive, high-value aesthetic throughout their residence.
            </p>
          </div>

          <Link
            to="/services/remodeling-finishes"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#14171E] hover:text-[#B81828] transition-colors py-2 px-4 rounded-full bg-white border border-[#E8E6E1] shadow-sm group shrink-0"
          >
            <span>Explore All Interior Craft</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {finishes.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden bg-white border border-[#E8E6E1] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-base font-bold text-[#14171E] group-hover:text-[#B81828] transition-colors font-heading">
                    {item.title}
                  </h3>
                  <div className="text-xs text-[#B81828] font-semibold mt-0.5">
                    {item.subtitle}
                  </div>
                  <p className="text-xs text-[#555B66] leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E8E6E1] flex items-center justify-between text-xs text-[#14171E] font-medium">
                  <span className="flex items-center gap-1 text-[#555B66]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B81828]" />
                    Precision Fit
                  </span>
                  <Link
                    to="/services/remodeling-finishes"
                    className="text-[#B81828] font-bold hover:underline flex items-center gap-1"
                  >
                    <span>View Craft</span>
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
