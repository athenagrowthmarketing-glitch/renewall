import React from 'react';
import { ShieldCheck, MapPin, Wrench, CheckCircle } from 'lucide-react';

export default function TrustStrip() {
  const points = [
    {
      icon: MapPin,
      title: 'Cape Coral Headquarters',
      subtitle: '105 SW 34th Ave • Local SWFL Authority',
    },
    {
      icon: Wrench,
      title: '15+ Years Field Craft',
      subtitle: 'Hands-on master coating craftsmanship',
    },
    {
      icon: ShieldCheck,
      title: 'Fully Insured Protection',
      subtitle: 'Commercial Liability & Workers\' Comp',
    },
    {
      icon: CheckCircle,
      title: '6-Stage Stucco Prep Standard',
      subtitle: 'Elastomeric sealing before finish coats',
    },
  ];

  return (
    <section className="bg-white border-b border-[#E8E6E1] py-8">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div key={idx} className="flex items-start gap-3.5 group">
                <div className="w-10 h-10 rounded-lg bg-[#FAFAF8] border border-[#E8E6E1] text-[#B81828] flex items-center justify-center shrink-0 group-hover:border-[#B81828]/40 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#14171E]">{pt.title}</h4>
                  <p className="text-xs text-[#555B66] mt-0.5">{pt.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
