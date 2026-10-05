import React from 'react';
import { Check, ShieldCheck, Sparkles } from 'lucide-react';

export default function BrandPhilosophy() {
  return (
    <section className="py-20 md:py-28 bg-[#F8F7F4] text-[#141210]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Architectural Narrative */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-architectural text-[#B81828] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Renewall Standard</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#111111] leading-[1.15] mb-6 tracking-tight text-balance">
              A fresh coat changes more than color—it <span className="text-[#B81828]">renews your home’s character.</span>
            </h2>

            <div className="space-y-5 text-[#4A4844] text-base sm:text-lg leading-relaxed font-normal">
              <p>
                In Southwest Florida, exterior and interior paint isn't merely decoration. It is your home’s primary armor against intense solar UV radiation, driving tropical rain, chalking stucco, and heavy coastal humidity.
              </p>
              <p>
                Too many painting contractors rush through the job—spraying cheap latex over unwashed mildew and peeling stucco, only for micro-cracks and bubbling to reappear within eighteen months.
              </p>
              <p className="font-semibold text-[#111111]">
                At Renewall, we believe the true quality of a paint job is determined before the can is ever opened. We invest the necessary hours into pressure cleaning, scraping loose material, repairing hairline stucco cracks, sealing window perimeters, and masking your property completely.
              </p>
            </div>

            {/* Pillar Grid */}
            <div className="mt-8 pt-8 border-t border-[#E8E5DF] grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#B81828]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-[#B81828]" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#111111] uppercase tracking-wide">
                    Preparation-First Craft
                  </h4>
                  <p className="text-xs text-[#787570] leading-relaxed mt-1">
                    Pressure washing, scraping, elastomeric patching, and full masking on every job.
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#B81828]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-[#B81828]" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#111111] uppercase tracking-wide">
                    Sun &amp; Salt Defense
                  </h4>
                  <p className="text-xs text-[#787570] leading-relaxed mt-1">
                    Premium coating systems formulated for UV color retention and mold resistance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Real Field Crew Photo Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E8E5DF] group">
              <img
                src="/images/craft-crew-drywall.jpg"
                alt="Renewall Remodeling Crew Member Preparing Walls in Branded Uniform"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#111111]/90 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#B81828]">Authentic Field Craft</p>
                <p className="text-xs font-semibold text-white/95 mt-0.5">Surface Leveling &amp; Hand Skimming</p>
                <p className="text-[11px] text-white/70">Renewall team members on-site in Cape Coral ensuring smooth wall transitions.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
