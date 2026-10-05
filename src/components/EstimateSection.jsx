import React, { useState } from 'react';
import { Phone, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, MapPin, Clock, Loader2 } from 'lucide-react';
import { submitLeadToWebhook } from '../services/leadService';

export default function EstimateSection({ defaultService = 'Exterior Painting & Stucco Sealing' }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: defaultService,
    size: '1,800 – 2,800 sq ft',
    timing: 'Within 30 days',
    name: '',
    phone: '',
    email: '',
    zip: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    { id: 'Exterior Painting & Stucco Sealing', label: 'Exterior Painting & Stucco Sealing', desc: 'Florida weather shield & crack repair' },
    { id: 'Interior Painting & Smooth Wall Prep', label: 'Interior Painting & Smooth Wall Prep', desc: 'Dust-free living room, bedroom & trim' },
    { id: 'Whole Home Painting (Exterior + Interior)', label: 'Whole Home Transformation', desc: 'Complete interior & exterior refresh' },
    { id: 'Architectural Finishes: Tile, Flooring & Epoxy', label: 'Tile, Flooring or Epoxy', desc: 'Bathrooms, kitchens, LVP or garage floor' },
  ];

  const sizes = [
    'Under 1,800 sq ft',
    '1,800 – 2,800 sq ft',
    '2,800 – 4,000 sq ft',
    '4,000+ sq ft / Waterfront',
  ];

  const timings = [
    'As soon as possible',
    'Within 30 days',
    '1 to 3 months',
    'Planning & Budgeting',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    try {
      await submitLeadToWebhook(formData, 'Detailed Scoping Form');
      setIsSubmitted(true);
    } catch (err) {
      console.error('Error submitting form to webhook:', err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="estimate" className="py-24 bg-[#0E1116] text-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B81828]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Consultation Pitch */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B81828]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Free On-Site Consultation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading">
              Request Your Free On-Site{' '}
              <span className="font-serif italic font-normal text-[#B81828]">Detailed Estimate.</span>
            </h2>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed font-light">
              Skip the guesswork. Marcio will visit your Cape Coral or Southwest Florida property, inspect your
              stucco, measure square footage, and deliver a comprehensive itemized proposal with zero hidden costs.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3 text-sm text-white/90">
                <CheckCircle2 className="w-5 h-5 text-[#B81828] shrink-0" />
                <span>100% Free written proposal within 24–48 hours</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/90">
                <ShieldCheck className="w-5 h-5 text-[#B81828] shrink-0" />
                <span>Fully insured with Liability &amp; Workers' Compensation</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/90">
                <Clock className="w-5 h-5 text-[#B81828] shrink-0" />
                <span>Punctual scheduling &amp; transparent communication</span>
              </div>
            </div>

            {/* Direct Call Box */}
            <div className="p-6 rounded-2xl bg-[#161920] border border-white/10 space-y-2">
              <div className="text-xs uppercase tracking-wider text-white/60 font-semibold">
                Prefer to speak immediately?
              </div>
              <a
                href="tel:+12392465853"
                className="text-2xl font-black text-white hover:text-[#B81828] transition-colors flex items-center gap-3 font-heading"
              >
                <Phone className="w-6 h-6 text-[#B81828]" />
                (239) 246-5853
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Multi-Step Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-white text-[#14171E] shadow-2xl border border-[#E8E6E1]">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#B81828]/10 text-[#B81828] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-[#14171E] font-heading">
                    Estimate Request Received!
                  </h3>
                  <p className="text-sm text-[#555B66] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#14171E]">{formData.name}</strong>. Marcio has received your project details for{' '}
                    <span className="text-[#B81828] font-bold">{formData.service}</span> in{' '}
                    <strong className="text-[#14171E]">{formData.zip || 'Southwest Florida'}</strong>. We will contact you within 24 business hours to confirm your walkthrough time.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setStep(1);
                      }}
                      className="text-xs font-bold text-[#B81828] hover:underline"
                    >
                      ← Submit another request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step Indicator */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#E8E6E1]">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#555B66]">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${
                        step === 1 ? 'bg-[#B81828] text-white' : 'bg-green-600 text-white'
                      }`}>
                        {step === 1 ? '1' : '✓'}
                      </span>
                      <span>{step === 1 ? 'Project Scoping' : 'Contact & Schedule'}</span>
                    </div>
                    <span className="text-xs font-bold text-[#7E8594]">
                      Step {step} of 2
                    </span>
                  </div>

                  {step === 1 ? (
                    <div className="space-y-6 animate-fadeIn">
                      {/* Service Selection */}
                      <div className="space-y-2.5">
                        <label className="block text-sm font-bold text-[#14171E]">
                          1. Select Your Primary Service:
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {services.map((item) => (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => setFormData({ ...formData, service: item.id })}
                              className={`p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                                formData.service === item.id
                                  ? 'border-[#B81828] bg-[#FDE8EA]/40 ring-1 ring-[#B81828]'
                                  : 'border-[#E8E6E1] hover:border-gray-400 bg-[#FAFAF8]'
                              }`}
                            >
                              <div className="text-xs font-bold text-[#14171E]">{item.label}</div>
                              <div className="text-[11px] text-[#555B66] mt-0.5">{item.desc}</div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Approximate Home Size */}
                      <div className="space-y-2.5">
                        <label className="block text-sm font-bold text-[#14171E]">
                          2. Approximate Property Size:
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                          {sizes.map((sz) => (
                            <button
                              key={sz}
                              type="button"
                              onClick={() => setFormData({ ...formData, size: sz })}
                              className={`p-2.5 rounded-xl border text-center text-xs font-bold transition-all cursor-pointer ${
                                formData.size === sz
                                  ? 'border-[#B81828] bg-[#B81828] text-white shadow-sm'
                                  : 'border-[#E8E6E1] text-[#555B66] hover:border-gray-400 bg-white'
                              }`}
                            >
                              {sz}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Project Timing */}
                      <div className="space-y-2.5">
                        <label className="block text-sm font-bold text-[#14171E]">
                          3. Desired Project Timeline:
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                          {timings.map((tm) => (
                            <button
                              key={tm}
                              type="button"
                              onClick={() => setFormData({ ...formData, timing: tm })}
                              className={`p-2.5 rounded-xl border text-center text-xs font-semibold transition-all cursor-pointer ${
                                formData.timing === tm
                                  ? 'border-[#B81828] bg-[#0E1116] text-white'
                                  : 'border-[#E8E6E1] text-[#555B66] hover:border-gray-400 bg-white'
                              }`}
                            >
                              {tm}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="w-full bg-[#B81828] hover:bg-[#9E1422] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer group"
                        >
                          <span>Continue to Step 2: Contact Details</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4 animate-fadeIn">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[#14171E] mb-1">
                            Your Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="John Smith"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-[#E8E6E1] text-sm text-[#14171E] focus:outline-none focus:border-[#B81828] focus:ring-1 focus:ring-[#B81828] bg-[#FAFAF8]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-[#14171E] mb-1">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="(239) 000-0000"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-[#E8E6E1] text-sm text-[#14171E] focus:outline-none focus:border-[#B81828] focus:ring-1 focus:ring-[#B81828] bg-[#FAFAF8]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[#14171E] mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-[#E8E6E1] text-sm text-[#14171E] focus:outline-none focus:border-[#B81828] focus:ring-1 focus:ring-[#B81828] bg-[#FAFAF8]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-[#14171E] mb-1">
                            City or ZIP Code in SWFL *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Cape Coral, FL (33991)"
                            value={formData.zip}
                            onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-[#E8E6E1] text-sm text-[#14171E] focus:outline-none focus:border-[#B81828] focus:ring-1 focus:ring-[#B81828] bg-[#FAFAF8]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#14171E] mb-1">
                          Project Notes or Specific Needs (Optional)
                        </label>
                        <textarea
                          rows="3"
                          placeholder="e.g. Waterfront 2-story home with pool cage, stucco hairline cracks on south wall, interested in dark navy tone..."
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-[#E8E6E1] text-sm text-[#14171E] focus:outline-none focus:border-[#B81828] focus:ring-1 focus:ring-[#B81828] bg-[#FAFAF8]"
                        ></textarea>
                      </div>

                      <div className="pt-2 flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="px-5 py-3.5 rounded-xl border border-[#E8E6E1] text-xs font-bold text-[#555B66] hover:bg-gray-100 transition-colors"
                        >
                          ← Back
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 bg-[#B81828] hover:bg-[#9E1422] text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              <span>Submitting Scope...</span>
                            </>
                          ) : (
                            <>
                              <span>Request Free Detailed Estimate</span>
                              <ArrowRight className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>

                      <p className="text-[11px] text-[#7E8594] text-center pt-2">
                        🔒 We respect your privacy. No spam or high-pressure calls. Protected by Google reCAPTCHA v3.
                      </p>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
