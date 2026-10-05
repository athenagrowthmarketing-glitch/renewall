import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';
import EstimateSection from '../components/EstimateSection';

export default function RemodelingFinishesPage({ onOpenEstimate }) {
  const services = [
    {
      title: 'Contemporary Kitchen Remodeling',
      subtitle: 'Waterfall Islands & Custom Cabinetry',
      image: '/images/kitchen-luxury-waterfall.jpg',
      desc: 'Complete kitchen renovations featuring European slab or shaker cabinetry, calacatta quartz waterfall countertops, custom fluted walnut islands, and designer marble backsplashes.',
      specs: ['Calacatta quartz waterfall edges', 'Designer hexagonal tile backsplashes', 'Integrated panel-ready cabinetry', 'Recessed under-cabinet lighting'],
    },
    {
      title: 'Custom Walk-In Spa Bathrooms',
      subtitle: 'Curbless Porcelain Showers & Pebble Floors',
      image: '/images/bathroom-pebble-shower.jpg',
      desc: 'Master and guest bath renovations featuring Schluter-Kerdi 100% waterproof barrier systems, large-format porcelain tile, natural river pebble shower pans, built-in niches, and matte black hardware.',
      specs: ['100% waterproof Schluter membrane', 'Curbless walk-in transition', 'Recessed shampoo and soap niche', 'Frameless heavy glass partitions'],
    },
    {
      title: 'Continuous Luxury Flooring (LVP & Tile)',
      subtitle: 'Laser-Leveled Subfloor Precision',
      image: '/images/flooring-lvp-hallway.jpg',
      desc: 'Seamless, continuous waterproof luxury vinyl plank (LVP) and large-format porcelain tile installations throughout entire residences with zero awkward transition strips.',
      specs: ['Laser subfloor flatness verification', 'Zero-lip large-format tile setting', '100% waterproof plank durability', '5-1/4" painted baseboard integration'],
    },
    {
      title: 'Commercial-Grade Garage Epoxy',
      subtitle: '100% Solid Decorative Flake Floor Systems',
      image: '/images/garage-epoxy-coating.jpg',
      desc: 'Multi-layer industrial epoxy and polyaspartic coatings that resist hot tire pickup, automotive oil spills, and Florida heat while turning your garage into a clean showroom.',
      specs: ['Diamond diamond-grind mechanical prep', '100% solids epoxy basecoat', 'Full decorative vinyl flake broadcast', 'UV-stable clear polyaspartic topcoat'],
    },
  ];

  return (
    <div className="pt-28 pb-16 bg-[#FAFAF8]">
      <SEO
        title="Kitchen Remodeling, Tile & Flooring Cape Coral, FL | Renewall Remodeling"
        description="High-end kitchen remodeling, walk-in tile showers, continuous luxury flooring, and garage epoxy coatings in Cape Coral & Fort Myers, FL. Call (239) 246-5853."
        canonical="https://renewallremodeling.com/services/remodeling-finishes"
        image="/images/kitchen-luxury-waterfall.jpg"
      />

      {/* Hero Header */}
      <section className="bg-white border-b border-[#E8E6E1] py-16 md:py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#555B66]">
              <Link to="/" className="hover:text-[#B81828]">Home</Link>
              <span>/</span>
              <span>Services</span>
              <span>/</span>
              <span className="text-[#B81828]">Architectural Finishes</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#14171E] tracking-tight leading-[1.08] font-heading">
              Architectural Finishes &amp;{' '}
              <span className="font-serif italic font-normal text-[#B81828]">Interior Remodeling.</span>
            </h1>

            <p className="text-lg text-[#555B66] leading-relaxed">
              Complete surface mastery. From custom kitchen waterfall islands and walk-in spa bathrooms to continuous luxury flooring and commercial garage epoxy.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenEstimate}
                className="bg-[#B81828] hover:bg-[#9E1422] text-white text-sm font-bold px-7 py-3.5 rounded-full shadow-md transition-colors cursor-pointer"
              >
                Request Free Remodeling Estimate
              </button>
              <a
                href="tel:+12392465853"
                className="text-sm font-bold text-[#14171E] hover:text-[#B81828] py-3.5 px-6 rounded-full border border-[#E8E6E1] transition-colors"
              >
                Call: (239) 246-5853
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-16">
          {services.map((item, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center p-8 sm:p-10 rounded-3xl bg-white border border-[#E8E6E1] shadow-sm ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`lg:col-span-6 space-y-5 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B81828]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{item.subtitle}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14171E] font-heading">
                  {item.title}
                </h2>
                <p className="text-sm sm:text-base text-[#555B66] leading-relaxed">
                  {item.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {item.specs.map((sp, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-[#14171E]">
                      <CheckCircle2 className="w-4 h-4 text-[#B81828] shrink-0" />
                      <span>{sp}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3">
                  <button
                    onClick={onOpenEstimate}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B81828] hover:text-[#9E1422] transition-colors cursor-pointer"
                  >
                    <span>Request Scoping for this Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="rounded-2xl overflow-hidden shadow-xl border border-[#E8E6E1] h-80 sm:h-96">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-103 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Estimate */}
      <EstimateSection defaultService="Architectural Finishes: Tile, Flooring & Epoxy" />
    </div>
  );
}
