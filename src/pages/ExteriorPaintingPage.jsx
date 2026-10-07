import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, ArrowRight, Sun, Droplets, Wind, Sparkles, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import EstimateSection from '../components/EstimateSection';

export default function ExteriorPaintingPage({ onOpenEstimate }) {
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
    {
      num: '05',
      title: 'Fascia, Soffits & Pool Lanai Enameling',
      desc: 'Detailed painting of gutters, overhangs, lanai ceiling surfaces, and entrance doors with weather-resistant satin enamel.',
    },
    {
      num: '06',
      title: 'Final Walkthrough & Perimeter Cleanup',
      desc: 'Complete inspection of every wall angle, full removal of masking tapes, and personal sign-off with Marcio before final invoicing.',
    },
  ];

  const faqs = [
    {
      q: 'How often should a home exterior be repainted in Cape Coral?',
      a: 'Due to Florida’s intense subtropical UV rays and extreme humidity, standard builder paint begins chalking after 3 to 4 years. With Renewall’s 6-stage stucco prep, elastomeric crack sealing, and premium 100% acrylic weather-shield coatings, our finishes typically last 8 to 10+ years.',
    },
    {
      q: 'How do you prevent paint overspray on my pool cage and travertine pavers?',
      a: 'Property protection is our highest operational priority. Before turning on any sprayer, we mask pool enclosures, glass sliders, and outdoor lighting with static-cling poly sheeting. Pavers and driveways are covered with drop cloths, and all wind directions are actively monitored.',
    },
    {
      q: 'Do you repair hairline cracks in stucco before painting?',
      a: 'Yes, absolutely. Stucco hairline cracks are the #1 cause of interior water damage during tropical storms. We bridge and seal all fissures with commercial-grade elastomeric sealant that remains permanently flexible.',
    },
    {
      q: 'How long does a typical exterior painting project take?',
      a: 'Most single-family homes in Cape Coral take approximately 4 to 6 working days, depending on weather and the extent of stucco repairs required.',
    },
  ];

  return (
    <div className="pt-28 pb-16 bg-[#FAFAF8]">
      <SEO
        title="Exterior Painting & Stucco Sealing Cape Coral, FL | Renewall Remodeling"
        description="Florida weather-resistant exterior painting, stucco crack sealing, and UV protective coatings across Cape Coral, Fort Myers, and SWFL. Call (239) 246-5853."
        canonical="https://www.renewallremodeling.com/services/exterior-painting"
        image="https://www.renewallremodeling.com/images/hero-exterior-waterfront.jpg"
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
              <span className="text-[#B81828]">Exterior Painting</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#14171E] tracking-tight leading-[1.08] font-heading">
              Exterior Painting &amp; Stucco Sealing in{' '}
              <span className="font-serif italic font-normal text-[#B81828]">Cape Coral, FL.</span>
            </h1>

            <p className="text-lg text-[#555B66] leading-relaxed">
              Engineered weather-shield coatings designed to endure Florida’s extreme UV radiation, torrential summer rainfall, and humid subtropical storms.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenEstimate}
                className="bg-[#B81828] hover:bg-[#9E1422] text-white text-sm font-bold px-7 py-3.5 rounded-full shadow-md transition-colors cursor-pointer"
              >
                Schedule Free Exterior Walkthrough
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

      {/* Visual Banner */}
      <section className="py-12">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#E8E6E1] h-[360px] md:h-[440px]">
              <img
                src="/images/exterior-pool-patio.jpg"
                alt="Cape Coral Waterfront Exterior Painting"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#E8E6E1] h-[360px] md:h-[440px]">
              <img
                src="/images/exterior-canal-dock.jpg"
                alt="Florida Canal Home Painting Finish"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Florida Climate Reality */}
      <section className="py-16 bg-white border-y border-[#E8E6E1]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B81828]">
              <Sun className="w-4 h-4" />
              <span>Subtropical Environmental Defense</span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#14171E] font-heading">
              Why Florida Stucco Demands a Higher Standard.
            </h2>
            <p className="text-sm sm:text-base text-[#555B66]">
              A coat of standard paint is not enough. The subtropical climate of Cape Coral and Southwest Florida poses distinct environmental threats:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#FAFAF8] border border-[#E8E6E1] space-y-3">
              <Sun className="w-8 h-8 text-[#B81828]" />
              <h3 className="text-lg font-bold text-[#14171E] font-heading">Intense UV Degradation</h3>
              <p className="text-xs text-[#555B66] leading-relaxed">
                Florida receives over 265 days of blistering sun per year. Solar UV rays break down cheap paint resins, causing pigment oxidation, fading, and chalking within 24–36 months.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAFAF8] border border-[#E8E6E1] space-y-3">
              <Droplets className="w-8 h-8 text-[#B81828]" />
              <h3 className="text-lg font-bold text-[#14171E] font-heading">Stucco Moisture Infiltration</h3>
              <p className="text-xs text-[#555B66] leading-relaxed">
                Masonry expansion and foundation shifting create hairline fissures. Torrential summer rains force moisture behind the stucco layer, causing bubbling, efflorescence, and interior rot.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAFAF8] border border-[#E8E6E1] space-y-3">
              <Wind className="w-8 h-8 text-[#B81828]" />
              <h3 className="text-lg font-bold text-[#14171E] font-heading">Salt Air &amp; Tropical Storms</h3>
              <p className="text-xs text-[#555B66] leading-relaxed">
                Canal and coastal properties face airborne salt that accelerates coating degradation. We specify 100% acrylic bonding primers that create a monolithic, breathable seal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 6-Step Protocol */}
      <section className="py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B81828]">
              <Sparkles className="w-4 h-4" />
              <span>Proven Methodology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14171E] font-heading">
              Our Documented 6-Stage Exterior Protocol.
            </h2>
            <p className="text-base text-[#555B66]">
              Preparation accounts for 75% of your paint job's lifespan. We never cut corners on prep.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((st, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-[#E8E6E1] shadow-sm space-y-3">
                <span className="inline-block px-3 py-1 rounded-md bg-[#B81828] text-white text-xs font-black">
                  {st.num}
                </span>
                <h3 className="text-base font-bold text-[#14171E] font-heading">{st.title}</h3>
                <p className="text-xs text-[#555B66] leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white border-t border-[#E8E6E1]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-extrabold text-[#14171E] font-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#555B66]">
              Clear answers regarding our exterior painting process and standards.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-[#FAFAF8] border border-[#E8E6E1] space-y-2">
                <h4 className="text-sm font-bold text-[#14171E]">{faq.q}</h4>
                <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Estimate Form */}
      <EstimateSection defaultService="Exterior Painting & Stucco Sealing" />
    </div>
  );
}
