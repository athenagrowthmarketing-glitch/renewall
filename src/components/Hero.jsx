import React from 'react';
import { ArrowRight, ShieldCheck, MapPin, CheckCircle2, Sparkles, Star } from 'lucide-react';

export default function Hero({ onOpenEstimate }) {
  const handleEstimate = () => {
    if (onOpenEstimate) {
      onOpenEstimate();
    } else {
      const el = document.getElementById('estimate');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#FAFAF8] overflow-hidden border-b border-[#E8E6E1]">
      {/* Background Architectural Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F5F3EF] to-transparent pointer-events-none -z-0"></div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & High Authority Positioning */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#B81828]/10 border border-[#B81828]/20 text-[#B81828] text-xs font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B81828]"></span>
              <span>Exterior &amp; Interior Painting Specialists • Cape Coral, FL</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#14171E] tracking-tight leading-[1.08] font-heading">
              A Fresh Finish Engineered for the{' '}
              <span className="font-serif italic font-normal text-[#B81828]">Florida Sun.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-[#555B66] leading-relaxed max-w-2xl font-normal">
              Precision residential painting for Southwest Florida homeowners who value meticulous stucco
              preparation, weather-sealed elastomeric coatings, and clean, dust-protected interior craft.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={handleEstimate}
                className="bg-[#B81828] hover:bg-[#9E1422] active:bg-[#85101C] text-white text-base font-bold px-8 py-4 rounded-full shadow-lg shadow-[#B81828]/20 hover:shadow-xl hover:shadow-[#B81828]/30 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Request Your Free Estimate</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#projects"
                className="bg-white hover:bg-[#F3F1EC] text-[#14171E] border border-[#E8E6E1] text-base font-bold px-7 py-4 rounded-full transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                Explore Recent Work
              </a>
            </div>

            {/* Proof Points Strip */}
            <div className="pt-6 border-t border-[#E8E6E1] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium text-[#555B66]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B81828] shrink-0" />
                <span>Meticulous Stucco Prep Standard</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B81828] shrink-0" />
                <span>Fully Insured (Liability &amp; Workers' Comp)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#B81828] shrink-0" />
                <span>Based in Cape Coral, FL (33991)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset (Real Waterfront Pool Home) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Frame with Shadow & Border */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="/images/hero-exterior-waterfront.jpg"
                  alt="Renewall Exterior Painting Project in Cape Coral Waterfront Home"
                  className="w-full h-[440px] sm:h-[500px] object-cover object-center transform hover:scale-[1.02] transition-transform duration-700"
                />

                {/* Scrim Overlay at Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Floating Project Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#B81828] text-white text-[11px] font-bold tracking-wider uppercase mb-2">
                    <Sparkles className="w-3 h-3" />
                    Verified Transformation
                  </div>
                  <div className="text-xl font-bold font-heading">Waterfront Canal Residence</div>
                  <div className="text-xs text-white/80 mt-1 flex items-center gap-2">
                    <span>Cape Coral, FL</span>
                    <span>•</span>
                    <span>Full Stucco Restoration &amp; Navy Finish</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge: 15+ Years Trade Craft */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white rounded-xl p-4 shadow-xl border border-[#E8E6E1] hidden sm:flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-[#B81828] text-white flex flex-col items-center justify-center font-extrabold leading-none">
                  <span className="text-lg">15+</span>
                  <span className="text-[9px] uppercase tracking-tighter">Years</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-[#14171E]">Field Craftsmanship</div>
                  <div className="text-[11px] text-[#555B66]">Hands-on Trade Mastery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
