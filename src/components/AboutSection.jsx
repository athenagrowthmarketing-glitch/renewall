import React from 'react';
import { Award, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FFFFFF] text-[#141210]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E8E5DF] group">
              <img
                src="/images/craft-laser-level.jpg"
                alt="Renewall Remodeling Precision Laser Level Framing on Job Site"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#111111]/90 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#B81828]">The Founder's Standard</p>
                <p className="text-xs font-semibold text-white/95 mt-0.5">Laser-Level Precision &amp; True Lines</p>
                <p className="text-[11px] text-white/70">Marcio’s personal background in fine carpentry and finish trades informs every painting project.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Story */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-architectural text-[#B81828] mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Meet The Craftsman Behind Renewall</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#111111] leading-tight tracking-tight mb-6 text-balance">
              Built on 15+ years of trade craft. <br className="hidden sm:inline" />
              <span className="text-[#B81828]">Operated with owner pride.</span>
            </h2>

            <div className="space-y-4 text-[#4A4844] text-sm sm:text-base leading-relaxed">
              <p>
                Renewall Remodeling &amp; Improvement was founded by <strong>Marcio Alexandre Apolinario Junior</strong> with a clear purpose: to give Southwest Florida homeowners a reliable, high-standard alternative to generic contractor services.
              </p>
              <p>
                Drawing on more than 15 years of hands-on experience across fine interior finishes, cabinetry, custom tile, and exterior residential painting, Marcio built Renewall around one simple principle: <em>a finished project is only as durable as the preparation underneath it.</em>
              </p>
              <p>
                When you hire Renewall, you don’t get an anonymous sales rep who disappears after signing the contract. Marcio personally plans your scope, conducts quality checks during preparation, and conducts the final walk-through with you before you sign off on the job.
              </p>
            </div>

            {/* Credibility Grid */}
            <div className="mt-8 pt-8 border-t border-[#E8E5DF] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#B81828] shrink-0" />
                <span className="text-xs font-bold text-[#111111] uppercase tracking-wide">
                  Fully Insured (Liability &amp; Workers' Comp)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#B81828] shrink-0" />
                <span className="text-xs font-bold text-[#111111] uppercase tracking-wide">
                  Cape Coral Local Business (33991)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B81828] shrink-0" />
                <span className="text-xs font-bold text-[#111111] uppercase tracking-wide">
                  Itemized Written Scope &amp; Pricing
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B81828] shrink-0" />
                <span className="text-xs font-bold text-[#111111] uppercase tracking-wide">
                  Clean, Respectful Field Crews
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
