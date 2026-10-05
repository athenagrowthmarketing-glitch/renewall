import React from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, ClipboardCheck } from 'lucide-react';

export default function ProcessSection({ onOpenEstimate }) {
  const steps = [
    {
      num: '01',
      title: 'On-Site Inspection & Substrate Testing',
      desc: 'Marcio personally inspects your exterior stucco, checks for moisture pockets, evaluates hairline settling cracks, and delivers a transparent itemized scope.',
    },
    {
      num: '02',
      title: 'Architectural Color & Sheen Guidance',
      desc: 'We assist you in selecting UV-reflective exterior tones and interior sheens engineered to maximize Southwest Florida\'s natural illumination.',
    },
    {
      num: '03',
      title: 'Total Property Protection & Repair',
      desc: 'Before painting, we power-wash, seal stucco fissures with elastomeric caulk, and mask windows, pavers, pool cages, and ornamental landscaping.',
    },
    {
      num: '04',
      title: 'Dual-Coat High-Build Application',
      desc: 'Surfaces receive bonding primer followed by two heavy finish coats applied via professional airless rig and backrolled for uniform film thickness.',
    },
    {
      num: '05',
      title: 'Personal Walkthrough & Sign-off',
      desc: 'We inspect every cut-line, fascia edge, and door surround together with you. We do not issue final invoices until every detail meets our master standard.',
    },
  ];

  return (
    <section id="process" className="py-24 bg-white border-b border-[#E8E6E1]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Proof of Craftsmanship */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
              <img
                src="/images/craft-laser-level.jpg"
                alt="Renewall Craftsman with Branded Shirt and Laser Level"
                className="w-full h-[460px] object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1116]/85 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#B81828] text-white text-[11px] font-bold uppercase tracking-wider">
                  <ClipboardCheck className="w-3.5 h-3.5" />
                  Master Standard
                </div>
                <div className="text-xl font-bold font-heading">Laser-Level Precision</div>
                <p className="text-xs text-white/80">
                  Every project is executed by experienced tradespeople with professional alignment tools.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAFAF8] border border-[#E8E6E1] text-xs text-[#555B66] space-y-2">
              <div className="font-bold text-[#14171E] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#B81828]" />
                Zero-Subcontractor Lottery Guarantee
              </div>
              <p>
                When you hire Renewall, Marcio and our dedicated, uniform-equipped crew manage and execute your
                project directly—no random broker handoffs.
              </p>
            </div>
          </div>

          {/* Right Column: 5 Steps */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B81828]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B81828]"></span>
                <span>The Renewall Standard</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#14171E] tracking-tight leading-[1.1] font-heading">
                A Seamless 5-Step Process from{' '}
                <span className="font-serif italic font-normal text-[#B81828]">Estimate to Walkthrough.</span>
              </h2>
              <p className="text-base sm:text-lg text-[#555B66]">
                Contractor anxiety stems from unpredictable timelines and messy sites. Here is our exact operational roadmap.
              </p>
            </div>

            <div className="space-y-4">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl bg-[#FAFAF8] border border-[#E8E6E1] hover:border-[#B81828]/40 transition-colors flex items-start gap-4 group"
                >
                  <span className="w-9 h-9 rounded-lg bg-[#B81828] text-white font-black text-xs flex items-center justify-center shrink-0">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#14171E] group-hover:text-[#B81828] transition-colors font-heading">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555B66] mt-1 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenEstimate}
                className="bg-[#B81828] hover:bg-[#9E1422] text-white text-sm font-bold px-7 py-3.5 rounded-full flex items-center justify-center gap-2 shadow-sm cursor-pointer group"
              >
                <span>Schedule Your Step 01 Inspection</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
