import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ShieldCheck, MapPin, CheckCircle2, UserCheck, Hammer, Sparkles, Clock, HeartHandshake } from 'lucide-react';
import SEO from '../components/SEO';
import EstimateSection from '../components/EstimateSection';

export default function AboutPage({ onOpenEstimate }) {
  const values = [
    {
      icon: <Hammer className="w-6 h-6 text-[#B81828]" />,
      title: 'Preparation is 80% of the Finish',
      description: 'Any contractor can spray paint. Only a true craftsman takes 3 days to hydro-wash, route stucco fractures, seal with elastomeric compound, and test moisture levels before the first coat of paint ever touches your walls.'
    },
    {
      icon: <UserCheck className="w-6 h-6 text-[#B81828]" />,
      title: 'Owner-Led Field Oversight',
      description: 'You will never be handed off to an anonymous commission salesperson. Marcio Alexandre Apolinario Jr. personally scopes your home, supervises the preparation, and walks the punch list with you.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#B81828]" />,
      title: 'Comprehensive Insurance & Safety',
      description: 'We protect your home with active General Liability and Workers’ Compensation coverage. You will never be liable for jobsite mishaps, and your property is safeguarded by strict containment protocols.'
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#B81828]" />,
      title: 'Clear, Itemized Communication',
      description: 'No vague lump sums or surprise mid-project change orders. Every proposal details exact square footages, specific paint product lines, surface repair quantities, and expected completion schedules.'
    }
  ];

  return (
    <div className="pt-28 pb-16 bg-[#FAFAF8]">
      <SEO
        title="About Renewall Remodeling | 15+ Years Trade Craftsmanship"
        description="Meet Marcio Alexandre Apolinario Jr. and the Renewall Remodeling team. Over 15 years of hands-on surface craft, Cape Coral headquarters, and fully insured protection."
        canonical="https://renewallremodeling.com/about"
        image="/images/craft-laser-level.jpg"
      />

      {/* Hero Header */}
      <section className="bg-white border-b border-[#E8E6E1] py-16 md:py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#555B66]">
              <Link to="/" className="hover:text-[#B81828]">Home</Link>
              <span>/</span>
              <span className="text-[#B81828]">About Renewall</span>
            </div>

            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-[#B81828]/10 text-[#B81828]">
              <Award className="w-3.5 h-3.5" />
              <span>15+ Years Field Experience • Cape Coral, FL</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#14171E] tracking-tight leading-[1.08] font-heading">
              A Company Built on Trade Craft,{' '}
              <span className="font-serif italic font-normal text-[#B81828]">Not Shortcuts.</span>
            </h1>

            <p className="text-lg text-[#555B66] leading-relaxed">
              Renewall Remodeling &amp; Improvement was founded to solve the biggest frustration in Southwest Florida home renovation: 
              unreliable communication, rushed preparation, and paint jobs that fail under Florida’s harsh sun.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenEstimate}
                className="bg-[#B81828] hover:bg-[#9E1422] text-white text-sm font-bold px-7 py-3.5 rounded-full shadow-md transition-colors cursor-pointer"
              >
                Schedule an On-Site Consultation
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

      {/* Founder Story Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-black uppercase tracking-wider text-[#B81828]">
                The Story Behind Renewall
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14171E] font-heading">
                Marcio Alexandre Apolinario Jr. &amp; The Pursuit of Durability.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#555B66] leading-relaxed">
                <p>
                  Before founding Renewall Remodeling &amp; Improvement, LLC (established October 18, 2023 in Lee County, Florida), 
                  <strong> Marcio Alexandre Apolinario Jr.</strong> spent more than 15 years mastering hands-on trade skills in fine interior millwork, 
                  custom porcelain tile setting, acoustic ceiling conversions, and exterior residential coating systems.
                </p>
                <p>
                  Having worked through every phase of residential construction, Marcio noticed that Southwest Florida was flooded with 
                  "spray-and-go" painting crews—contractors who rush through jobs in two days without properly curing stucco, scraping oxidization, 
                  or caulking perimeter seams. The paint looks fine for six months, but begins bubbling, peeling, and mildewing at the first tropical storm.
                </p>
                <p>
                  Renewall was created as the exact antidote: an owner-operated specialty firm where every project is treated as an engineering endeavor. 
                  We don’t cut corners, we don’t use watered-down builder-grade paints, and we don’t leave your driveway covered in overspray.
                </p>
              </div>

              {/* Verified Credentials */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#14171E] font-bold">
                <div className="flex items-center gap-2 p-3 bg-white rounded-lg border border-[#E8E6E1]">
                  <ShieldCheck className="w-4 h-4 text-[#B81828] shrink-0" />
                  <span>Florida LLC (Doc #L23000479403)</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white rounded-lg border border-[#E8E6E1]">
                  <ShieldCheck className="w-4 h-4 text-[#B81828] shrink-0" />
                  <span>General Liability &amp; Workers' Comp</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white rounded-lg border border-[#E8E6E1]">
                  <MapPin className="w-4 h-4 text-[#B81828] shrink-0" />
                  <span>105 SW 34th Ave, Cape Coral, FL</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white rounded-lg border border-[#E8E6E1]">
                  <CheckCircle2 className="w-4 h-4 text-[#B81828] shrink-0" />
                  <span>100% Itemized Written Guarantees</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-[#E8E6E1]">
                  <img
                    src="/images/craft-laser-level.jpg"
                    alt="Renewall precision laser level leveling on job site"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 bg-white">
                    <div className="text-xs font-bold text-[#14171E]">Laser-Calibrated Alignment</div>
                    <div className="text-[11px] text-[#555B66] mt-0.5">True lines and square reveals across all surface finishes.</div>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-[#E8E6E1]">
                  <img
                    src="/images/craft-crew-drywall.jpg"
                    alt="Renewall craft crew finishing interior drywall"
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-4 bg-white">
                    <div className="text-xs font-bold text-[#14171E]">Full Dust Containment</div>
                    <div className="text-[11px] text-[#555B66] mt-0.5">Floors masked and HEPA negative-air filtration utilized.</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 sm:pt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-[#E8E6E1]">
                  <img
                    src="/images/kitchen-luxury-waterfall.jpg"
                    alt="Luxury kitchen waterfall island and backsplash"
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-4 bg-white">
                    <div className="text-xs font-bold text-[#14171E]">Finish Mastery</div>
                    <div className="text-[11px] text-[#555B66] mt-0.5">Custom tile, luxury cabinetry and premium architectural sheens.</div>
                  </div>
                </div>
                <div className="p-6 bg-[#14171E] text-white rounded-2xl flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-[#B81828] uppercase tracking-wider">Direct Direct Dial</span>
                    <div className="text-xl font-bold font-heading">(239) 246-5853</div>
                    <p className="text-xs text-white/70">
                      Reach Marcio directly to schedule your estimate or discuss technical specifications.
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10 text-[11px] text-white/50">
                    Response typically within 4 business hours.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our 4 Core Values */}
      <section className="py-16 md:py-20 bg-white border-y border-[#E8E6E1]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-wider text-[#B81828]">
              Operating Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14171E] font-heading mt-2">
              The 4 Non-Negotiable Standards of Renewall
            </h2>
            <p className="text-sm text-[#555B66] mt-2">
              How we protect your home, respect your timeline, and guarantee lasting results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#FAFAF8] border border-[#E8E6E1] flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#B81828]/10 flex items-center justify-center shrink-0">
                  {v.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#14171E] font-heading">{v.title}</h3>
                  <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* On-Site Estimate Form */}
      <EstimateSection />
    </div>
  );
}
