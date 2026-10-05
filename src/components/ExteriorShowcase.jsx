import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Sun, Droplets, Wind, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ExteriorShowcase({ onOpenEstimate }) {
  const steps = [
    {
      num: '01',
      title: 'Anti-Fungal Pressure Decontamination',
      desc: 'Gentle low-pressure wash with commercial mildewcide that neutralizes mold and lichen spores without damaging delicate Florida stucco.',
    },
    {
      num: '02',
      title: 'Elastomeric Stucco Crack Repair',
      desc: 'Meticulous hand-caulking of all expansion joints and spiderweb fissures using flexible elastomeric sealant that expands and contracts with Florida heat.',
    },
    {
      num: '03',
      title: 'Comprehensive Property Masking',
      desc: 'Windows, pool screens, travertine pavers, exterior light fixtures, and ornamental palms are taped and shrouded with poly sheeting.',
    },
    {
      num: '04',
      title: 'Masonry Bonding Primer & 2-Coat Shield',
      desc: 'High-build bonding primer followed by two heavy coats of 100% acrylic UV-reflective paint, applied via professional rig and backrolled for adhesion.',
    },
  ];

  return (
    <section className="py-24 bg-white border-b border-[#E8E6E1]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B81828]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B81828]"></span>
            <span>Primary Commercial Specialty</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#14171E] tracking-tight leading-[1.1] font-heading">
            Give the Whole Home a{' '}
            <span className="font-serif italic font-normal text-[#B81828]">Stronger</span> First Impression.
          </h2>

          <p className="text-lg text-[#555B66] leading-relaxed">
            Southwest Florida homeowners do not just need color—they need structural exterior protection against
            blistering UV rays, salt corrosion, and tropical rainfall. Here is how Renewall seals and transforms your exterior.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: 4-Step Technical Protocol */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-6">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#FAFAF8] border border-[#E8E6E1] hover:border-[#B81828]/40 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-xs font-black px-2.5 py-1 rounded bg-[#B81828] text-white">
                      {step.num}
                    </span>
                    <h3 className="text-lg font-bold text-[#14171E] group-hover:text-[#B81828] transition-colors">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#555B66] leading-relaxed pl-11">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Florida Climate Callout Box */}
            <div className="p-6 rounded-2xl bg-[#0E1116] text-white space-y-3">
              <div className="flex items-center gap-3 text-[#B81828] text-xs font-bold uppercase tracking-wider">
                <Sun className="w-4 h-4" />
                <Droplets className="w-4 h-4" />
                <Wind className="w-4 h-4" />
                <span>The Southwest Florida Climate Standard</span>
              </div>
              <p className="text-xs text-white/80 leading-relaxed">
                Standard builder paint fails in Lee County within 3 to 4 years. We exclusively specify heavy-build,
                mildewcide-fortified 100% acrylic finishes capable of bridging stucco hairline cracks and reflecting solar heat.
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/services/exterior-painting"
                className="bg-[#B81828] hover:bg-[#9E1422] text-white text-sm font-bold px-7 py-3.5 rounded-full flex items-center justify-center gap-2 group transition-colors shadow-sm"
              >
                <span>Full Exterior Service Details</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <button
                onClick={onOpenEstimate}
                className="bg-transparent hover:bg-black/5 text-[#14171E] border border-[#E8E6E1] text-sm font-bold px-7 py-3.5 rounded-full transition-colors flex items-center justify-center cursor-pointer"
              >
                Schedule On-Site Stucco Inspection
              </button>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E8E6E1] group">
              <img
                src="/images/exterior-pool-patio.jpg"
                alt="Renewall Exterior Stucco & Patio Painting Project"
                className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs font-bold uppercase tracking-wider text-[#B81828]">
                  Completed Project
                </div>
                <div className="text-xl font-bold font-heading mt-1">
                  Waterfront Pool &amp; Lanai Transformation
                </div>
                <div className="text-xs text-white/80 mt-1">
                  Deep navy blue weather-shield stucco finish with bright white architectural fascia.
                </div>
              </div>
            </div>

            {/* Secondary Detail Image Card */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-sm border border-[#E8E6E1] h-44 group">
                <img
                  src="/images/exterior-pool-detail.jpg"
                  alt="Precision Cut-Lines and Trim Finish"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 rounded-xl bg-[#FAFAF8] border border-[#E8E6E1] flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#B81828]">Average Scope</div>
                  <div className="text-2xl font-black text-[#14171E] mt-1 font-heading">Full Exterior</div>
                  <div className="text-xs text-[#555B66] mt-1">Stucco, Soffits, Fascia &amp; Doors</div>
                </div>
                <div className="text-[11px] font-semibold text-[#14171E] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B81828]" />
                  Written Scope Warranty Included
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
