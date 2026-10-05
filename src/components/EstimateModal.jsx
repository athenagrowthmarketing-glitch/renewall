import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Loader2 } from 'lucide-react';
import { submitLeadToWebhook } from '../services/leadService';

export default function EstimateModal({ isOpen, onClose, defaultService = 'Exterior Painting & Stucco Sealing' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    zip: '',
    service: defaultService,
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    try {
      await submitLeadToWebhook(formData, 'Quick Estimate Modal');
      setIsSubmitted(true);
    } catch (err) {
      console.error('Error submitting modal form to webhook:', err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#E8E6E1] overflow-hidden text-[#14171E]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E6E1] bg-[#FAFAF8]">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#B81828]">
              Free On-Site Consultation
            </div>
            <div className="text-lg font-black font-heading">Request Your Detailed Estimate</div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#555B66] hover:text-[#14171E] hover:bg-gray-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#B81828]/10 text-[#B81828] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-heading">Thank You, {formData.name}!</h3>
              <p className="text-xs text-[#555B66] max-w-xs mx-auto leading-relaxed">
                Marcio has received your request. We will reach out within 24 business hours to confirm your on-site walkthrough.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="bg-[#B81828] text-white text-xs font-bold px-6 py-2.5 rounded-full"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold mb-1">Service Type</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E6E1] text-xs font-semibold bg-[#FAFAF8] focus:outline-none focus:border-[#B81828]"
                >
                  <option value="Exterior Painting & Stucco Sealing">Exterior Painting &amp; Stucco Sealing</option>
                  <option value="Interior Painting & Drywall Prep">Interior Painting &amp; Drywall Prep</option>
                  <option value="Whole Home Painting Transformation">Whole Home Transformation</option>
                  <option value="Kitchen, Tile, Flooring or Epoxy">Tile, Flooring or Epoxy Finishes</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E6E1] text-xs bg-[#FAFAF8] focus:outline-none focus:border-[#B81828]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(239) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E6E1] text-xs bg-[#FAFAF8] focus:outline-none focus:border-[#B81828]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="john@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E6E1] text-xs bg-[#FAFAF8] focus:outline-none focus:border-[#B81828]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1">City or ZIP Code *</label>
                  <input
                    type="text"
                    required
                    placeholder="Cape Coral, FL 33991"
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E6E1] text-xs bg-[#FAFAF8] focus:outline-none focus:border-[#B81828]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold mb-1">Project Notes (Optional)</label>
                <textarea
                  rows="2"
                  placeholder="Tell us about your home, stucco condition, or timeline..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-[#E8E6E1] text-xs bg-[#FAFAF8] focus:outline-none focus:border-[#B81828]"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#B81828] hover:bg-[#9E1422] text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Free Estimate Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex flex-col items-center justify-center gap-1 text-[11px] text-[#7E8594] pt-1 text-center">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B81828]" />
                  <span>Fully Insured • Direct Follow-Up Within 24 Hours</span>
                </div>
                <span className="text-[10px] text-[#A0A4AB]">Protected by Google reCAPTCHA v3</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
