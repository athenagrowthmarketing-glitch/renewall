import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ShieldCheck, CheckCircle2, Phone, ArrowRight, Sparkles, Sun, Droplets } from 'lucide-react';
import SEO from '../components/SEO';
import EstimateSection from '../components/EstimateSection';

export default function CapeCoralPage({ onOpenEstimate }) {
  const neighborhoods = [
    'Southwest Cape Coral (SW 34th Ave & Chiquita)',
    'Pelican & El Dorado Waterfront District',
    'Cape Harbour & Tarpon Point Marina Area',
    'Yacht Club Historic Riverfront District',
    'Surfside & Sandoval Communities',
    'Burnt Store & North Cape Coral',
  ];

  return (
    <div className="pt-28 pb-16 bg-[#FAFAF8]">
      <SEO
        title="Exterior & Interior Painting Cape Coral, FL | Renewall Remodeling"
        description="Cape Coral's trusted residential exterior and interior painting contractor. Based at 105 SW 34th Ave, Cape Coral, FL 33991. Call (239) 246-5853."
        canonical="https://renewallremodeling.com/locations/cape-coral"
        image="/images/hero-exterior-waterfront.jpg"
      />

      {/* Hero Header */}
      <section className="bg-white border-b border-[#E8E6E1] py-16 md:py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#555B66]">
              <Link to="/" className="hover:text-[#B81828]">Home</Link>
              <span>/</span>
              <span>Locations</span>
              <span>/</span>
              <span className="text-[#B81828]">Cape Coral, FL</span>
            </div>

            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-[#B81828]/10 text-[#B81828]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Company Headquarters • 105 SW 34th Ave, 33991</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#14171E] tracking-tight leading-[1.08] font-heading">
              Exterior &amp; Interior Painting in{' '}
              <span className="font-serif italic font-normal text-[#B81828]">Cape Coral, FL.</span>
            </h1>

            <p className="text-lg text-[#555B66] leading-relaxed">
              Serving our neighbors across Cape Coral with specialized waterfront stucco restoration, UV weather-shield coatings, and meticulous interior painting.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenEstimate}
                className="bg-[#B81828] hover:bg-[#9E1422] text-white text-sm font-bold px-7 py-3.5 rounded-full shadow-md transition-colors cursor-pointer"
              >
                Schedule Free Cape Coral Estimate
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

      {/* Cape Coral Specific Content */}
      <section className="py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-3xl font-extrabold text-[#14171E] font-heading">
                Engineered for Cape Coral's 400 Miles of Waterways.
              </h2>
              <p className="text-sm sm:text-base text-[#555B66] leading-relaxed">
                With more canals than any city on earth, Cape Coral residences experience doubled solar radiation
                from water reflection, pervasive coastal humidity, and aggressive algae growth on exterior stucco.
              </p>
              <p className="text-sm sm:text-base text-[#555B66] leading-relaxed">
                Renewall is based right here on SW 34th Ave. We understand the specific stucco curing dynamics,
                wind patterns off the Caloosahatchee River, and paint chemistry necessary to keep canal homes pristine year after year.
              </p>

              <div className="pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#14171E] mb-3">
                  Cape Coral Neighborhoods Served Daily:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#555B66]">
                  {neighborhoods.map((nb, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B81828] shrink-0" />
                      <span>{nb}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/images/hero-exterior-waterfront.jpg"
                  alt="Cape Coral Waterfront Canal Home Painting"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estimate */}
      <EstimateSection defaultService="Exterior Painting & Stucco Sealing" />
    </div>
  );
}
