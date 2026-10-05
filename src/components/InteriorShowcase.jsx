import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Shield, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InteriorShowcase({ onOpenEstimate }) {
  const features = [
    {
      title: 'Dust-Protected Living Protocol',
      desc: 'Heavy-duty Ram Board on hard floors, clean drop cloths on furniture, and zip-wall room isolation to keep your household livable.',
    },
    {
      title: 'Drywall Skim-Coating & Smooth Wall Prep',
      desc: 'We repair settling fractures, screw pops, and uneven drywall joints so that every wall is perfectly flat under natural window light.',
    },
    {
      title: 'Architectural Trim & Door Enameling',
      desc: 'Baseboards, crown molding, and interior doors are prepped and sprayed or hand-finished with silky, durable waterborne enamel.',
    },
    {
      title: 'Light-Reflecting Coastal Palettes',
      desc: 'We advise on whites, warm neutrals, and coastal tones that maximize the unique ambient light of Southwest Florida.',
    },
  ];

  return (
    <section className="py-24 bg-[#FAFAF8] border-b border-[#E8E6E1]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visuals */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E8E6E1] group">
              <img
                src="/images/interior-bedroom-white.jpg"
                alt="Renewall Interior Painting Bedroom Project"
                className="w-full h-[400px] sm:h-[460px] object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs font-bold uppercase tracking-wider text-[#B81828]">
                  Interior Atmosphere
                </div>
                <div className="text-xl font-bold font-heading mt-1">
                  Crisp Coastal Bedroom Transformation
                </div>
                <div className="text-xs text-white/80 mt-1">
                  Pure white reflective wall coatings, laser-straight ceiling cuts, and wood-fan accent.
                </div>
              </div>
            </div>

            {/* Crew Drywall Field Proof */}
            <div className="p-5 rounded-2xl bg-white border border-[#E8E6E1] flex items-center gap-4 shadow-sm">
              <img
                src="/images/craft-crew-drywall.jpg"
                alt="Renewall Crew Member in Branded Shirt Prepping Drywall"
                className="w-20 h-20 rounded-xl object-cover shrink-0 border border-[#E8E6E1]"
              />
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B81828] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  Field Craftsmanship Proof
                </div>
                <div className="text-sm font-bold text-[#14171E] mt-0.5 font-heading">
                  Drywall Taping &amp; Skim-Coating
                </div>
                <p className="text-xs text-[#555B66] mt-0.5">
                  Renewall craftsmen working with company-branded gear, ensuring seamless flat surfaces.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Benefits */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B81828]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B81828]"></span>
              <span>Interior Residential Craft</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#14171E] tracking-tight leading-[1.1] font-heading">
              Change the Feel of the Room{' '}
              <span className="font-serif italic font-normal text-[#B81828]">Without</span> Changing the Room.
            </h2>

            <p className="text-lg text-[#555B66] leading-relaxed">
              Yellowed walls and dinged baseboards drag down even the most spacious Florida homes. Our interior
              painting process restores radiant light, razor-sharp architectural lines, and durable washable finishes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {features.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#14171E]">
                    <CheckCircle2 className="w-4 h-4 text-[#B81828] shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-[#555B66] leading-relaxed pl-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/services/interior-painting"
                className="bg-[#B81828] hover:bg-[#9E1422] text-white text-sm font-bold px-7 py-3.5 rounded-full flex items-center justify-center gap-2 group transition-colors shadow-sm"
              >
                <span>Explore Interior Painting</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <button
                onClick={onOpenEstimate}
                className="bg-white hover:bg-[#F3F1EC] text-[#14171E] border border-[#E8E6E1] text-sm font-bold px-7 py-3.5 rounded-full transition-colors flex items-center justify-center cursor-pointer shadow-sm"
              >
                Get Interior Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
