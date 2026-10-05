import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, ChevronDown, Menu, X, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenEstimate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [locationsDropdown, setLocationsDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    setLocationsDropdown(false);
  }, [location.pathname]);

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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Announcement Ribbon */}
      <div className="bg-[#0E1116] text-white/80 text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-[1240px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-medium text-white/90">
              <span className="w-2 h-2 rounded-full bg-[#B81828] animate-pulse"></span>
              Cape Coral & Southwest Florida Residential Painting
            </span>
            <span className="text-white/30">•</span>
            <span className="inline-flex items-center gap-1 text-white/70">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B81828]" />
              Fully Insured (Liability &amp; Workers' Comp)
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-white/60">Mon - Sat: 7:30 AM - 6:00 PM</span>
            <span className="text-white/30">•</span>
            <a
              href="tel:+12392465853"
              className="text-white hover:text-[#B81828] transition-colors flex items-center gap-1.5 font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-[#B81828]" />
              (239) 246-5853
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAFAF8]/95 backdrop-blur-md shadow-sm border-b border-[#E8E6E1] py-3'
            : 'bg-[#FAFAF8]/90 backdrop-blur-sm border-b border-[#E8E6E1]/60 py-4'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo Lockup */}
          <Link to="/" className="flex items-center group">
            <img
              src="/images/renewall-logo.png"
              alt="Renewall Remodeling & Improvement Logo"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-7">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-semibold text-[#14171E] hover:text-[#B81828] transition-colors py-2 cursor-pointer"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdown ? 'rotate-180 text-[#B81828]' : ''}`} />
              </button>

              {servicesDropdown && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-lg shadow-xl border border-[#E8E6E1] py-3 px-2 transition-all duration-200 animate-fadeIn">
                  <Link
                    to="/services/exterior-painting"
                    className="block p-3 rounded-md hover:bg-[#FAFAF8] transition-colors group"
                  >
                    <div className="text-xs font-bold uppercase tracking-wider text-[#B81828]">Core Priority</div>
                    <div className="text-sm font-bold text-[#14171E] group-hover:text-[#B81828] transition-colors">
                      Exterior Painting &amp; Stucco Sealing
                    </div>
                    <div className="text-xs text-[#555B66] mt-0.5">
                      Florida weather-resistant elastomeric coatings and crack repair
                    </div>
                  </Link>
                  <Link
                    to="/services/interior-painting"
                    className="block p-3 rounded-md hover:bg-[#FAFAF8] transition-colors group"
                  >
                    <div className="text-xs font-bold uppercase tracking-wider text-[#555B66]">Residential Finish</div>
                    <div className="text-sm font-bold text-[#14171E] group-hover:text-[#B81828] transition-colors">
                      Interior Painting &amp; Drywall Prep
                    </div>
                    <div className="text-xs text-[#555B66] mt-0.5">
                      Dust-protected room painting, trim enameling &amp; smooth finishes
                    </div>
                  </Link>
                  <Link
                    to="/services/remodeling-finishes"
                    className="block p-3 rounded-md hover:bg-[#FAFAF8] transition-colors group border-t border-[#E8E6E1]/60 mt-1"
                  >
                    <div className="text-xs font-bold uppercase tracking-wider text-[#555B66]">Supporting Craft</div>
                    <div className="text-sm font-bold text-[#14171E] group-hover:text-[#B81828] transition-colors">
                      Architectural Finishes: Tile, Flooring &amp; Epoxy
                    </div>
                    <div className="text-xs text-[#555B66] mt-0.5">
                      Kitchen remodels, walk-in tile showers, LVP &amp; garage floors
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/projects"
              className="text-sm font-semibold text-[#14171E] hover:text-[#B81828] transition-colors"
            >
              Projects
            </Link>

            <a
              href="/#process"
              className="text-sm font-semibold text-[#14171E] hover:text-[#B81828] transition-colors"
            >
              Our Process
            </a>

            <Link
              to="/about"
              className="text-sm font-semibold text-[#14171E] hover:text-[#B81828] transition-colors"
            >
              About Renewall
            </Link>

            {/* Locations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLocationsDropdown(true)}
              onMouseLeave={() => setLocationsDropdown(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-semibold text-[#14171E] hover:text-[#B81828] transition-colors py-2 cursor-pointer"
              >
                Service Areas
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${locationsDropdown ? 'rotate-180 text-[#B81828]' : ''}`} />
              </button>

              {locationsDropdown && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border border-[#E8E6E1] py-2 px-2 transition-all duration-200 animate-fadeIn">
                  <Link
                    to="/locations/cape-coral"
                    className="flex items-center gap-2 p-2.5 rounded-md hover:bg-[#FAFAF8] transition-colors group"
                  >
                    <MapPin className="w-4 h-4 text-[#B81828]" />
                    <div>
                      <div className="text-sm font-bold text-[#14171E] group-hover:text-[#B81828]">Cape Coral, FL</div>
                      <div className="text-xs text-[#555B66]">Company Headquarters (33991)</div>
                    </div>
                  </Link>
                  <Link
                    to="/locations/fort-myers"
                    className="flex items-center gap-2 p-2.5 rounded-md hover:bg-[#FAFAF8] transition-colors group"
                  >
                    <MapPin className="w-4 h-4 text-[#555B66] group-hover:text-[#B81828]" />
                    <div>
                      <div className="text-sm font-bold text-[#14171E] group-hover:text-[#B81828]">Fort Myers, FL</div>
                      <div className="text-xs text-[#555B66]">Lee County &amp; River District</div>
                    </div>
                  </Link>
                  <div className="p-2 border-t border-[#E8E6E1]/60 text-xs text-[#7E8594] mt-1">
                    Also serving Punta Gorda, Estero, Bonita Springs &amp; Naples
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Header CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:+12392465853"
              className="hidden xl:flex items-center gap-2 text-sm font-bold text-[#14171E] hover:text-[#B81828] transition-colors py-2 px-3 rounded-full hover:bg-black/5"
            >
              <Phone className="w-4 h-4 text-[#B81828]" />
              (239) 246-5853
            </a>

            <button
              onClick={handleEstimateClick}
              className="bg-[#B81828] hover:bg-[#9E1422] active:bg-[#85101C] text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-2 group cursor-pointer"
            >
              <span>Get Free Estimate</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#14171E] hover:text-[#B81828] focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-[#FAFAF8] z-40 overflow-y-auto px-6 py-8 flex flex-col justify-between border-t border-[#E8E6E1]">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#7E8594]">Our Specialties</div>
              <Link
                to="/services/exterior-painting"
                className="block text-lg font-bold text-[#14171E] hover:text-[#B81828]"
              >
                Exterior Painting &amp; Stucco Sealing
              </Link>
              <Link
                to="/services/interior-painting"
                className="block text-lg font-bold text-[#14171E] hover:text-[#B81828]"
              >
                Interior Painting &amp; Drywall Prep
              </Link>
              <Link
                to="/services/remodeling-finishes"
                className="block text-lg font-bold text-[#14171E] hover:text-[#B81828]"
              >
                Tile, Flooring &amp; Garage Epoxy
              </Link>
            </div>

            <div className="h-px bg-[#E8E6E1]"></div>

            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#7E8594]">Company &amp; Proof</div>
              <Link to="/projects" className="block text-lg font-bold text-[#14171E]">
                Project Gallery &amp; Case Studies
              </Link>
              <a href="/#process" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-bold text-[#14171E]">
                Our 5-Step Process
              </a>
              <Link to="/about" className="block text-lg font-bold text-[#14171E]">
                About Renewall
              </Link>
            </div>

            <div className="h-px bg-[#E8E6E1]"></div>

            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#7E8594]">Service Locations</div>
              <Link to="/locations/cape-coral" className="block text-sm font-semibold text-[#14171E]">
                📍 Cape Coral, FL (Headquarters)
              </Link>
              <Link to="/locations/fort-myers" className="block text-sm font-semibold text-[#14171E]">
                📍 Fort Myers, FL
              </Link>
              <div className="text-xs text-[#7E8594]">
                Also serving Punta Gorda, Estero, Bonita Springs &amp; Naples
              </div>
            </div>
          </div>

          <div className="pt-8 space-y-4">
            <a
              href="tel:+12392465853"
              className="w-full py-3.5 px-4 bg-white border border-[#E8E6E1] text-[#14171E] font-bold text-center rounded-xl flex items-center justify-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#B81828]" />
              Call (239) 246-5853
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleEstimateClick();
              }}
              className="w-full py-3.5 px-4 bg-[#B81828] text-white font-bold text-center rounded-xl flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <span>Get A Free Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
