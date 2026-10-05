import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

export default function MobileStickyBar({ onOpenEstimate }) {
  const handleEstimateClick = () => {
    if (onOpenEstimate) {
      onOpenEstimate();
    } else {
      const el = document.getElementById('estimate');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = '/#estimate';
      }
    }
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E8E6E1] p-3 shadow-2xl">
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        <a
          href="tel:+12392465853"
          className="py-3 px-3 rounded-xl bg-white border border-[#E8E6E1] text-[#14171E] text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm active:bg-gray-100"
        >
          <Phone className="w-3.5 h-3.5 text-[#B81828]" />
          <span>Call (239) 246-5853</span>
        </a>

        <button
          onClick={handleEstimateClick}
          className="py-3 px-3 rounded-xl bg-[#B81828] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md active:bg-[#9E1422] cursor-pointer"
        >
          <span>Free Estimate</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
