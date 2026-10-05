import React from 'react';
import { MapPin, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServiceAreas() {
  const cities = [
    {
      name: 'Cape Coral, FL',
      role: 'Company Headquarters',
      zip: '33991, 33904, 33914, 33990',
      desc: 'Full residential exterior stucco painting, waterfront canal homes, lanai restoration & interior repainting.',
      link: '/locations/cape-coral',
      isPrimary: true,
    },
    {
      name: 'Fort Myers, FL',
      role: 'Primary Service District',
      zip: '33901, 33907, 33908, 33919',
      desc: 'Historic river district residences, McGregor Blvd estates, Gateway, and South Fort Myers communities.',
      link: '/locations/fort-myers',
      isPrimary: true,
    },
    {
      name: 'Punta Gorda, FL',
      role: 'Northern Service Ring',
      zip: '33950, 33955',
      desc: 'Punta Gorda Isles waterfront homes, exterior UV weatherproofing, and canal property repaints.',
      link: null,
      isPrimary: false,
    },
    {
      name: 'Estero & Bonita Springs',
      role: 'Southern Coastal Corridor',
      zip: '33928, 34134, 34135',
      desc: 'Gated golf communities, luxury villas, stucco crack sealing, and modern interior transformations.',
      link: null,
      isPrimary: false,
    },
    {
      name: 'Naples, FL',
      role: 'Collier County Region',
      zip: '34102, 34108, 34110',
      desc: 'High-end residential painting, coastal estate maintenance, and custom architectural finishes.',
      link: null,
      isPrimary: false,
    },
  ];

  return (
    <section className="py-24 bg-[#FAFAF8] border-b border-[#E8E6E1]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B81828]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Southwest Florida Footprint</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#14171E] tracking-tight font-heading">
              Serving Homeowners from{' '}
              <span className="font-serif italic font-normal text-[#B81828]">Punta Gorda to Naples.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#555B66]">
              Renewall is proudly based in Cape Coral and provides dedicated painting and remodeling teams across Lee, Collier, and Charlotte Counties.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#E8E6E1] text-xs text-[#555B66] flex items-center gap-3 shrink-0 shadow-sm">
            <ShieldCheck className="w-5 h-5 text-[#B81828] shrink-0" />
            <div>
              <div className="font-bold text-[#14171E]">Prompt On-Site Walkthroughs</div>
              <div>Free written proposals within 24–48 hours</div>
            </div>
          </div>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl bg-white border transition-all duration-300 flex flex-col justify-between ${
                city.isPrimary
                  ? 'border-[#B81828]/40 shadow-md ring-1 ring-[#B81828]/10'
                  : 'border-[#E8E6E1] shadow-sm hover:shadow-md'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B81828]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{city.role}</span>
                  </div>
                  {city.isPrimary && (
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-[#B81828] text-white">
                      Hub
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-[#14171E] font-heading">{city.name}</h3>
                <div className="text-[11px] font-medium text-[#7E8594]">{city.zip}</div>
                <p className="text-xs text-[#555B66] leading-relaxed mt-1">
                  {city.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8E6E1] mt-5">
                {city.link ? (
                  <Link
                    to={city.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B81828] hover:text-[#9E1422] transition-colors"
                  >
                    <span>View {city.name} Services</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <span className="text-xs font-medium text-[#7E8594] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B81828]" />
                    Direct Crew Service Available
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
