import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenEstimate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0E1116] text-white border-t border-white/10 pt-16 pb-24 lg:pb-16 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          {/* Column 1: Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block">
              <img
                src="/images/renewall-logo-footer.png"
                alt="Renewall Remodeling & Improvement Logo"
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </Link>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              Premier residential exterior and interior painting engineered for Southwest Florida. Meticulous
              stucco preparation, weather-shield coatings, and turnkey interior surface craft.
            </p>

            <div className="space-y-2 text-xs text-white/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B81828] shrink-0" />
                <span>105 SW 34th Ave, Cape Coral, FL 33991</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B81828] shrink-0" />
                <span>Fully Insured (Commercial Liability &amp; Workers' Comp)</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/renewallremodeling/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#B81828] hover:border-[#B81828] transition-all shadow-sm group"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-white transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/renewallremodeling"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#B81828] hover:border-[#B81828] transition-all shadow-sm group"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-white transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Core Services (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Our Specialties</h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <Link to="/services/exterior-painting" className="hover:text-[#B81828] transition-colors">
                  Exterior Painting &amp; Stucco Sealing
                </Link>
              </li>
              <li>
                <Link to="/services/exterior-painting" className="hover:text-[#B81828] transition-colors">
                  Stucco Crack Repair &amp; Elastomeric Coatings
                </Link>
              </li>
              <li>
                <Link to="/services/interior-painting" className="hover:text-[#B81828] transition-colors">
                  Interior Painting &amp; Drywall Prep
                </Link>
              </li>
              <li>
                <Link to="/services/interior-painting" className="hover:text-[#B81828] transition-colors">
                  Trim, Crown Molding &amp; Door Enameling
                </Link>
              </li>
              <li>
                <Link to="/services/remodeling-finishes" className="hover:text-[#B81828] transition-colors">
                  Contemporary Kitchen Remodeling
                </Link>
              </li>
              <li>
                <Link to="/services/remodeling-finishes" className="hover:text-[#B81828] transition-colors">
                  Walk-In Tile Showers &amp; Bathrooms
                </Link>
              </li>
              <li>
                <Link to="/services/remodeling-finishes" className="hover:text-[#B81828] transition-colors">
                  Luxury Vinyl Plank (LVP) Flooring
                </Link>
              </li>
              <li>
                <Link to="/services/remodeling-finishes" className="hover:text-[#B81828] transition-colors">
                  Commercial-Grade Garage Epoxy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Areas & Company (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Locations</h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <Link to="/locations/cape-coral" className="hover:text-[#B81828] transition-colors">
                  Cape Coral, FL (Hub)
                </Link>
              </li>
              <li>
                <Link to="/locations/fort-myers" className="hover:text-[#B81828] transition-colors">
                  Fort Myers, FL
                </Link>
              </li>
              <li className="text-white/40">Punta Gorda, FL</li>
              <li className="text-white/40">Estero, FL</li>
              <li className="text-white/40">Bonita Springs, FL</li>
              <li className="text-white/40">Naples, FL</li>
            </ul>

            <h4 className="text-xs font-bold uppercase tracking-wider text-white pt-2">Company</h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <Link to="/projects" className="hover:text-[#B81828] transition-colors">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#B81828] transition-colors">
                  About Renewall
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Direct Contact</h4>
            <div className="space-y-3 text-xs text-white/80">
              <div>
                <div className="text-white/40 text-[11px]">Primary Phone:</div>
                <a
                  href="tel:+12392465853"
                  className="text-base font-bold text-white hover:text-[#B81828] transition-colors flex items-center gap-1.5 mt-0.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B81828]" />
                  (239) 246-5853
                </a>
              </div>

              <div>
                <div className="text-white/40 text-[11px]">Direct Email:</div>
                <a
                  href="mailto:contact@renewallremodeling.com"
                  className="text-xs text-white hover:text-[#B81828] transition-colors flex items-center gap-1.5 mt-0.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#B81828]" />
                  contact@renewallremodeling.com
                </a>
              </div>

              <div>
                <div className="text-white/40 text-[11px]">Working Hours:</div>
                <div className="text-xs text-white/90 mt-0.5">
                  Monday – Saturday: 7:30 AM – 6:00 PM<br />
                  Sunday: Closed
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenEstimate ? onOpenEstimate : () => {
                  const el = document.getElementById('estimate');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else window.location.href = '/#estimate';
                }}
                className="w-full bg-[#B81828] hover:bg-[#9E1422] text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-sm cursor-pointer"
              >
                Schedule Free Estimate
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Agency Credit Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            © {new Date().getFullYear()} Renewall Remodeling and Improvement, LLC. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            {/* MANDATORY ATHENA GROWTH MARKETING CREDIT */}
            <div className="text-white/70">
              Developed by:{' '}
              <a
                href="https://athenagrowthmarketing.com"
                target="_blank"
                rel="noopener"
                className="text-white hover:text-[#B81828] font-semibold underline transition-colors"
              >
                Athena Growth Marketing
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
