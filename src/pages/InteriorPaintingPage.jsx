import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, ArrowRight, Sparkles, Palette, Home, HeartHandshake } from 'lucide-react';
import SEO from '../components/SEO';
import EstimateSection from '../components/EstimateSection';

export default function InteriorPaintingPage({ onOpenEstimate }) {
  const rooms = [
    {
      title: 'Living Rooms & Open Concepts',
      desc: 'Seamless wall-to-ceiling transitions that expand visual space and reflect natural Florida sunlight.',
    },
    {
      title: 'Bedrooms & Private Suites',
      desc: 'Tranquil coastal palettes and zero-VOC odorless paints for restful, healthy indoor air quality.',
    },
    {
      title: 'Doors, Baseboards & Millwork',
      desc: 'Satin waterborne enameling on 5-1/4" baseboards, crown molding, and paneled interior doors.',
    },
    {
      title: 'Kitchen & Bath Moisture Defense',
      desc: 'Washable, mildew-resistant satin and semi-gloss coatings designed for high-humidity living areas.',
    },
  ];

  return (
    <div className="pt-28 pb-16 bg-[#FAFAF8]">
      <SEO
        title="Interior Painting & Drywall Prep Cape Coral, FL | Renewall Remodeling"
        description="Clean, dust-protected interior painting, smooth drywall prep, and trim enameling across Cape Coral, Fort Myers, and SWFL. Call (239) 246-5853."
        canonical="https://renewallremodeling.com/services/interior-painting"
        image="/images/interior-bedroom-white.jpg"
      />

      {/* Header */}
      <section className="bg-white border-b border-[#E8E6E1] py-16 md:py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#555B66]">
              <Link to="/" className="hover:text-[#B81828]">Home</Link>
              <span>/</span>
              <span>Services</span>
              <span>/</span>
              <span className="text-[#B81828]">Interior Painting</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#14171E] tracking-tight leading-[1.08] font-heading">
              Precision Interior Painting in{' '}
              <span className="font-serif italic font-normal text-[#B81828]">Cape Coral, FL.</span>
            </h1>

            <p className="text-lg text-[#555B66] leading-relaxed">
              Meticulous drywall preparation, laser-straight cut lines, and durable waterborne enamels—delivered with total respect for your floors, furniture, and daily routine.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenEstimate}
                className="bg-[#B81828] hover:bg-[#9E1422] text-white text-sm font-bold px-7 py-3.5 rounded-full shadow-md transition-colors cursor-pointer"
              >
                Schedule Free Interior Walkthrough
              </button>
              <a
                href="tel:+12392465853"
                className="text-sm font-bold text-[#14171E] hover:text-[#B81828] py-3.5 px-6 rounded-full border border-[#E8E6E1] transition-colors"
              >
                Call (239) 246-5853
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Comparison */}
      <section className="py-12">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#E8E6E1] h-[360px] md:h-[440px]">
              <img
                src="/images/interior-bedroom-white.jpg"
                alt="Pristine White Interior Bedroom Painting"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#E8E6E1] h-[360px] md:h-[440px]">
              <img
                src="/images/craft-crew-drywall.jpg"
                alt="Renewall Crew Taping Drywall for Smooth Finish"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clean Living Guarantee */}
      <section className="py-16 bg-white border-y border-[#E8E6E1]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B81828]">
              <HeartHandshake className="w-4 h-4" />
              <span>The Homeowner Experience</span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#14171E] font-heading">
              Our Clean Site &amp; Dust-Protected Protocol.
            </h2>
            <p className="text-sm sm:text-base text-[#555B66]">
              Most homeowners dread interior contractors because of plaster dust and chemical paint fumes. Renewall operates on a different standard:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#FAFAF8] border border-[#E8E6E1] space-y-3">
              <ShieldCheck className="w-8 h-8 text-[#B81828]" />
              <h3 className="text-base font-bold text-[#14171E] font-heading">Ram Board Floor Masking</h3>
              <p className="text-xs text-[#555B66] leading-relaxed">
                We never walk on bare floors. Tile, hardwood, and luxury vinyl are protected with heavy-duty Ram Board and taped perimeter seals.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAFAF8] border border-[#E8E6E1] space-y-3">
              <Sparkles className="w-8 h-8 text-[#B81828]" />
              <h3 className="text-base font-bold text-[#14171E] font-heading">Zero-VOC &amp; Odorless Paints</h3>
              <p className="text-xs text-[#555B66] leading-relaxed">
                We specify premium low-VOC and zero-VOC interior formulations that dry quickly without lingering headaches or fumes for your family or pets.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAFAF8] border border-[#E8E6E1] space-y-3">
              <CheckCircle2 className="w-8 h-8 text-[#B81828]" />
              <h3 className="text-base font-bold text-[#14171E] font-heading">Daily Vacuum &amp; Wipe Down</h3>
              <p className="text-xs text-[#555B66] leading-relaxed">
                At the end of every work day, tools are neatly consolidated, work zones are vacuumed, and trash is removed off-site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Handled */}
      <section className="py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12 space-y-3">
            <h2 className="text-3xl font-extrabold text-[#14171E] font-heading">
              Complete Residential Interior Scope.
            </h2>
            <p className="text-sm text-[#555B66]">
              Every architectural plane receives dedicated preparation and the appropriate sheen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rooms.map((rm, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-[#E8E6E1] shadow-sm space-y-2">
                <h3 className="text-base font-bold text-[#14171E] font-heading">{rm.title}</h3>
                <p className="text-xs text-[#555B66] leading-relaxed">{rm.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estimate */}
      <EstimateSection defaultService="Interior Painting & Smooth Wall Prep" />
    </div>
  );
}
