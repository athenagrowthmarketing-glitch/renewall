import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BrandManifesto() {
  return (
    <section className="py-24 bg-[#0E1116] text-white relative overflow-hidden">
      {/* Subtle Architectural Texture Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B81828_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Bold Editorial Statement */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B81828]">
              <span className="w-2 h-2 rounded-full bg-[#B81828]"></span>
              The Renewall Philosophy
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight font-heading">
              The <span className="font-serif italic font-normal text-[#B81828]">Renewal</span> Your Home Deserves.
            </h2>

            <div className="space-y-4 text-white/80 text-base sm:text-lg leading-relaxed font-light">
              <p>
                In Southwest Florida, a home's exterior endures an unrelenting trial: intense UV radiation that
                oxidizes color, high humidity that breeds mildew on stucco, and torrential summer rains that exploit
                microscopic fissures.
              </p>
              <p>
                We founded <strong className="text-white font-semibold">Renewall</strong> to end the cycle of cheap,
                temporary paint jobs that peel and chalk after twenty-four months. We approach your property as master
                finish craftsmen—spending twice as long preparing, pressure washing, and sealing stucco as we do
                applying the final coats.
              </p>
              <p className="text-white/90 font-medium">
                The result is an architectural transformation that elevates curb appeal, preserves structural equity,
                and turns heads from the street to the canal.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-6">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[#B81828] hover:text-white font-bold transition-colors group"
              >
                <span>Read Renewall’s Story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <span className="text-white/20">•</span>
              <span className="text-xs uppercase tracking-wider text-white/60">
                Cape Coral, Fort Myers &amp; SWFL
              </span>
            </div>
          </div>

          {/* Right: Architectural Image Frame */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <img
                src="/images/exterior-canal-dock.jpg"
                alt="Cape Coral Waterfront Canal Estate Painting Project"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1116] via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#161920]/90 backdrop-blur-md border border-white/10 text-white">
                <div className="text-xs uppercase tracking-wider text-[#B81828] font-bold">
                  Waterfront Living Standard
                </div>
                <div className="text-base font-bold font-heading mt-0.5">
                  Deepwater Canal Estate • Cape Coral, FL
                </div>
                <div className="text-xs text-white/70 mt-1">
                  Engineered coating protection against coastal salt air and tropical moisture.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
