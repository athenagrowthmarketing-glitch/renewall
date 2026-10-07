import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ShieldCheck, CheckCircle2, Phone, ArrowRight, Sun, Droplets, Building2, Paintbrush } from 'lucide-react';
import SEO from '../components/SEO';
import EstimateSection from '../components/EstimateSection';

export default function FortMyersPage({ onOpenEstimate }) {
  const neighborhoods = [
    'Historic McGregor Boulevard & Royal Palm Corridor',
    'Whiskey Creek & Cypress Lake Communities',
    'Gulf Harbour Yacht & Country Club',
    'Gateway, Treeline & Fort Myers East',
    'Pelican Preserve & Plantation Golf Club',
    'Downtown River District & Dean Park Historic District',
    'Daniels Parkway Corridor & Bell Tower Area',
    'Iona & San Carlos Bay Environs'
  ];

  const hoaStandards = [
    'Complete Sherwin-Williams & Benjamin Moore HOA color book matching',
    'Formal architectural review board (ARB / HOA) submittal packets',
    'Certificate of Insurance (COI) issued directly naming your HOA or property manager',
    'Strict jobsite containment, daily perimeter cleanup, and zero overspray protocols'
  ];

  return (
    <div className="pt-28 pb-16 bg-[#FAFAF8]">
      <SEO
        title="Exterior & Interior Painting Fort Myers, FL | Renewall Remodeling"
        description="Premium residential exterior and interior painting across Fort Myers, FL. HOA compliance, historic stucco restoration, and weather-shield coatings. Call (239) 246-5853."
        canonical="https://www.renewallremodeling.com/locations/fort-myers"
        image="https://www.renewallremodeling.com/images/exterior-pool-patio.jpg"
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
              <span className="text-[#B81828]">Fort Myers, FL</span>
            </div>

            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-[#B81828]/10 text-[#B81828]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Direct Bridge Coverage • Lee County Service Center</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#14171E] tracking-tight leading-[1.08] font-heading">
              Exterior &amp; Interior Painting in{' '}
              <span className="font-serif italic font-normal text-[#B81828]">Fort Myers, FL.</span>
            </h1>

            <p className="text-lg text-[#555B66] leading-relaxed">
              Serving Fort Myers homeowners from the historic McGregor estates to premier gated golf communities. 
              Engineered stucco repair, flawless interior drywall finish, and strict HOA compliance.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenEstimate}
                className="bg-[#B81828] hover:bg-[#9E1422] text-white text-sm font-bold px-7 py-3.5 rounded-full shadow-md transition-colors cursor-pointer"
              >
                Schedule Free Fort Myers Estimate
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

      {/* Fort Myers Climatic & HOA Reality */}
      <section className="py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="text-xs font-black uppercase tracking-wider text-[#B81828]">
                Fort Myers Climate &amp; Architectural Nuance
              </div>
              <h2 className="text-3xl font-extrabold text-[#14171E] font-heading">
                River Heat Spikes, High Humidity &amp; Strict HOA Governance.
              </h2>
              <p className="text-sm sm:text-base text-[#555B66] leading-relaxed">
                Fort Myers properties face a dual challenge: the extreme UV heat radiating across mainland Lee County, coupled with 
                strict architectural oversight in gated communities like Gulf Harbour, Pelican Preserve, and Gateway.
              </p>
              <p className="text-sm sm:text-base text-[#555B66] leading-relaxed">
                A cheap spray-and-go paint crew risks HOA rejection fines, overspray on luxury pavers, and coating failure within two rainy seasons. 
                Renewall brings 15+ years of hands-on technical application, commercial-grade elastomeric sealants, and direct liaison with architectural review boards.
              </p>

              <div className="pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#14171E] mb-3">
                  Fort Myers Neighborhoods &amp; Corridors We Serve:
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E8E6E1]">
                <img
                  src="/images/exterior-pool-patio.jpg"
                  alt="Fort Myers luxury pool patio and exterior repaint"
                  className="w-full h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white space-y-1">
                    <span className="text-xs font-black tracking-wider uppercase px-2.5 py-1 rounded bg-[#B81828] text-white">
                      Fort Myers Project Case
                    </span>
                    <p className="text-sm font-medium text-white/90">
                      Full elastomeric stucco re-seal &amp; lanai transformation completed on schedule.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOA & Gated Community Excellence */}
      <section className="py-16 bg-white border-y border-[#E8E6E1]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-[#B81828]">
              Seamless Approvals
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14171E] font-heading mt-2">
              We Handle Your Fort Myers HOA Documentation.
            </h2>
            <p className="text-sm sm:text-base text-[#555B66] mt-3">
              We take the stress out of association approvals. Marcio and our team prepare the technical color specifications and proof of insurance your board requires before a drop of paint is opened.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hoaStandards.map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-[#FAFAF8] border border-[#E8E6E1] flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#B81828]/10 text-[#B81828] flex items-center justify-center shrink-0 mt-0.5">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#14171E] mb-1">Standard #{idx + 1}</div>
                  <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services for Fort Myers */}
      <section className="py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-[#B81828]">
              Comprehensive Craftsmanship
            </span>
            <h2 className="text-3xl font-extrabold text-[#14171E] font-heading mt-2">
              Our Fort Myers Specialties
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-white border border-[#E8E6E1] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#B81828]/10 text-[#B81828] flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-xl font-extrabold text-[#14171E] font-heading">
                Exterior Stucco &amp; Facade Painting
              </h3>
              <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed">
                Hydro-cleaning, hairline fracture repair, elastomeric sealant application, and dual-coat 100% acrylic latex formulated for Florida heat.
              </p>
              <Link
                to="/services/exterior-painting"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B81828] hover:underline pt-2"
              >
                <span>Explore Exterior Systems</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#E8E6E1] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#B81828]/10 text-[#B81828] flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-xl font-extrabold text-[#14171E] font-heading">
                Interior Wall &amp; Millwork Painting
              </h3>
              <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed">
                Surgical tape lines, Level 5 drywall surface patching, low-VOC washable sheens, and fine trim spraying that elevates indoor living.
              </p>
              <Link
                to="/services/interior-painting"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B81828] hover:underline pt-2"
              >
                <span>Explore Interior Systems</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#E8E6E1] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#B81828]/10 text-[#B81828] flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="text-xl font-extrabold text-[#14171E] font-heading">
                Surface Remodeling &amp; Flooring
              </h3>
              <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed">
                Kitchen tile splashbacks, luxury vinyl plank (LVP) waterproof installations, and commercial-grade polyaspartic garage floors.
              </p>
              <Link
                to="/services/remodeling-finishes"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B81828] hover:underline pt-2"
              >
                <span>Explore Remodeling Finishes</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* On-Site Estimate Form */}
      <EstimateSection />
    </div>
  );
}
