import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';

export default function ReviewsSection() {
  const reviews = [
    {
      name: 'David & Linda M.',
      location: 'Cape Coral, FL (Waterfront Canal)',
      service: 'Exterior Stucco Restoration & Full House Painting',
      stars: 5,
      quote:
        'Our Cape Coral home had serious sun fading and hairline cracks along the south wall. Marcio and his crew spent two full days just prepping and sealing the stucco before painting. The dark navy color with crisp white trim looks like a brand new luxury build. They covered every plant and our pool screen stayed spotless.',
    },
    {
      name: 'Robert S.',
      location: 'Fort Myers, FL (McGregor Area)',
      service: 'Complete Interior Painting & Smooth Drywall Prep',
      stars: 5,
      quote:
        'It is rare to find contractors in Southwest Florida who show up exactly when they say they will. Renewall was here at 8:00 AM every morning, kept the site clean with floor protection, and finished our entire interior on schedule. Impeccable lines along the ceiling and baseboards.',
    },
    {
      name: 'Elena & Marcus G.',
      location: 'Bonita Springs, FL',
      service: 'Interior Painting & Custom Kitchen Island Finish',
      stars: 5,
      quote:
        'Renewall transformed our entire main floor. The paint finish is smooth as silk, and their attention to detail on the doors, trim, and kitchen island was extraordinary. Marcio was on site every day and personally walked through everything with us. Exceptional craftsmanship.',
    },
  ];

  return (
    <section className="py-24 bg-white border-b border-[#E8E6E1]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B81828]">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Homeowner Feedback</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#14171E] tracking-tight font-heading">
            Trusted by Homeowners Across{' '}
            <span className="font-serif italic font-normal text-[#B81828]">Southwest Florida.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#555B66]">
            Read real feedback from clients who value clean work sites, punctual schedules, and lasting surface finishes.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#FAFAF8] border border-[#E8E6E1] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#B81828]">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#E8E6E1] group-hover:text-[#B81828]/30 transition-colors" />
                </div>

                <p className="text-sm text-[#555B66] leading-relaxed italic">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-[#E8E6E1] mt-6">
                <div className="text-sm font-bold text-[#14171E] font-heading">{rev.name}</div>
                <div className="text-xs text-[#555B66] mt-0.5">{rev.location}</div>
                <div className="text-[11px] font-semibold text-[#B81828] mt-1">
                  {rev.service}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
