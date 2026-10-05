import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MapPin, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import EstimateSection from '../components/EstimateSection';

export default function ProjectsPage({ onOpenEstimate }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'exterior', label: 'Exterior Stucco Painting' },
    { id: 'interior', label: 'Interior Living Spaces' },
    { id: 'kitchen-bath', label: 'Kitchen & Bath Craft' },
    { id: 'flooring', label: 'Flooring & Epoxy' },
  ];

  const projects = [
    {
      id: 1,
      category: 'exterior',
      title: 'Cape Coral Deepwater Canal Residence',
      location: 'Southwest Cape Coral, FL',
      scope: 'Elastomeric stucco sealing, deep coastal navy body with ultra-pure white fascia and lanai ceiling repaint.',
      image: '/images/hero-exterior-waterfront.jpg',
      badge: 'Exterior Painting',
      details: ['3,400 sq.ft. Exterior', 'Sherwin-Williams Loxon Primer', 'Resilience Lifetime Acrylic'],
    },
    {
      id: 2,
      category: 'kitchen-bath',
      title: 'Architectural European Kitchen Suite',
      location: 'Cape Coral, FL',
      scope: 'Calacatta gold waterfall porcelain island, fluted walnut cabinet surrounds, and polished marble herringbone backsplash.',
      image: '/images/kitchen-luxury-waterfall.jpg',
      badge: 'Kitchen Remodeling',
      details: ['Mitered Waterfall Edge', 'Recessed Under-Cabinet LEDs', 'Precision Leveling System'],
    },
    {
      id: 3,
      category: 'exterior',
      title: 'Enclosed Lanai & Pool Deck Elevation',
      location: 'Fort Myers, FL',
      scope: 'Full masonry hydro-wash, hairline crack routing, elastomeric perimeter caulking, and high-traction acrylic deck coating.',
      image: '/images/exterior-pool-patio.jpg',
      badge: 'Exterior Painting',
      details: ['UV-Reflective Topcoat', 'Anti-Slip Pool Deck Finish', 'HOA Color Matching'],
    },
    {
      id: 4,
      category: 'interior',
      title: 'Vaulted Ceiling Master Suite Transformation',
      location: 'Whiskey Creek, Fort Myers',
      scope: 'Level 5 drywall skim, acoustic ceiling resurfacing, Benjamin Moore Scuff-X matte walls, and semi-gloss casing enamel.',
      image: '/images/interior-bedroom-white.jpg',
      badge: 'Interior Painting',
      details: ['Zero Overspray Masking', 'HEPA Air Scrubbers Used', '3-Day Turnaround'],
    },
    {
      id: 5,
      category: 'kitchen-bath',
      title: 'Frameless Walk-In Spa Shower',
      location: 'Pelican District, Cape Coral',
      scope: 'Schluter-Kerdi waterproof membrane, natural river pebble sloped pan, and floor-to-ceiling 24x48 marble porcelain.',
      image: '/images/bathroom-pebble-shower.jpg',
      badge: 'Custom Tile',
      details: ['100% Watertight Guarantee', 'Linear Floor Drain', 'Recessed Shampoo Niche'],
    },
    {
      id: 6,
      category: 'kitchen-bath',
      title: 'Modern Floating Vanity & Glass Enclosure',
      location: 'Cape Coral, FL',
      scope: 'Subway tile perimeter, matte black thermostatic shower tower, and seamless large-format tile floor transition.',
      image: '/images/bathroom-modern-glass.jpg',
      badge: 'Bathroom Remodeling',
      details: ['Custom Glass Fabrication', 'Moisture-Shield Backer', 'Modern Minimalist Trim'],
    },
    {
      id: 7,
      category: 'flooring',
      title: 'Whole-Home Rigid Core Luxury Vinyl Plank',
      location: 'Cape Coral, FL',
      scope: 'Complete subfloor grinding and leveling, 20-mil commercial wear layer LVP installation, and fresh quarter-round shoe molding.',
      image: '/images/flooring-lvp-hallway.jpg',
      badge: 'Flooring Installation',
      details: ['100% Waterproof Core', 'Acoustic Underlayment', 'Seamless Room Transitions'],
    },
    {
      id: 8,
      category: 'flooring',
      title: 'Full-Chip Polyaspartic Garage Floor System',
      location: 'Fort Myers, FL',
      scope: 'Diamond mechanical grind, moisture vapor barrier primer, full broadcast granite vinyl chips, and chemical-resistant polyaspartic clear coat.',
      image: '/images/garage-epoxy-coating.jpg',
      badge: 'Epoxy & Polyaspartic',
      details: ['Hot-Tire Pick-Up Resistant', 'UV Stable Non-Yellowing', '1-Day Return to Service'],
    },
    {
      id: 9,
      category: 'exterior',
      title: 'Canal Dock & Gazebo Facade Restoration',
      location: 'Cape Coral, FL',
      scope: 'Marine-grade weather sealant, mildew-resistant elastomeric exterior finish, and architectural trim accentuation.',
      image: '/images/exterior-canal-dock.jpg',
      badge: 'Exterior Painting',
      details: ['Salt-Air Corrosion Resistance', 'Heavy-Duty Stucco Patching', 'Clean Waterway Safeguard'],
    },
    {
      id: 10,
      category: 'kitchen-bath',
      title: 'Custom Hexagon Marble Backsplash & Brass Trim',
      location: 'Estero, FL',
      scope: 'Precision laser-aligned mosaic setting, epoxy stain-proof grout, and custom brass pencil tile Schluter terminations.',
      image: '/images/kitchen-backsplash-craft.jpg',
      badge: 'Custom Tile',
      details: ['Laser Calibrated', 'Stain-Resistant Epoxy Grout', 'Quartz Countertop Flush Seam'],
    },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-28 pb-16 bg-[#FAFAF8]">
      <SEO
        title="Project Gallery & Transformations | Renewall Remodeling & Improvement"
        description="Explore real Southwest Florida exterior painting, interior finishes, and remodeling projects completed by Renewall Remodeling. Cape Coral, Fort Myers & beyond."
        canonical="https://renewallremodeling.com/projects"
        image="/images/hero-exterior-waterfront.jpg"
      />

      {/* Hero Header */}
      <section className="bg-white border-b border-[#E8E6E1] py-16 md:py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#555B66]">
              <Link to="/" className="hover:text-[#B81828]">Home</Link>
              <span>/</span>
              <span className="text-[#B81828]">Projects &amp; Gallery</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#14171E] tracking-tight leading-[1.08] font-heading">
              Real Work. Real Proof.{' '}
              <span className="font-serif italic font-normal text-[#B81828]">Across SWFL.</span>
            </h1>

            <p className="text-lg text-[#555B66] leading-relaxed">
              Every photograph shown on this page represents actual work completed by Marcio and the Renewall field crew. 
              No stock photography. No rendering illusions. Just disciplined Florida surface craftsmanship.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenEstimate}
                className="bg-[#B81828] hover:bg-[#9E1422] text-white text-sm font-bold px-7 py-3.5 rounded-full shadow-md transition-colors cursor-pointer"
              >
                Request Free Project Scoping
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

      {/* Interactive Before & After Showcase */}
      <section className="py-16 md:py-20 border-b border-[#E8E6E1]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-wider text-[#B81828]">
              Interactive Transformation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14171E] font-heading mt-2">
              Drag the Slider to Reveal the Finish
            </h2>
            <p className="text-sm text-[#555B66] mt-2">
              Witness how professional pressure washing, hairline stucco routing, and two coats of 100% acrylic latex protect Florida homes against heat, algae, and weather aging.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider />
          </div>
        </div>
      </section>

      {/* Filterable Portfolio Gallery */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#B81828] text-white shadow-md'
                    : 'bg-white text-[#555B66] border border-[#E8E6E1] hover:border-[#B81828] hover:text-[#14171E]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#E8E6E1] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-64 overflow-hidden bg-[#E8E6E1]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#14171E]/85 backdrop-blur-sm text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-md">
                    {project.badge}
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#555B66] mb-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#B81828]" />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="font-heading font-extrabold text-lg text-[#14171E] leading-snug group-hover:text-[#B81828] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed mt-2.5">
                      {project.scope}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E8E6E1] space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#14171E]">
                      Technical Specifications:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.details.map((detail, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] px-2.5 py-1 rounded-full bg-[#FAFAF8] text-[#555B66] border border-[#E8E6E1]"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sub-Banner CTA */}
          <div className="mt-16 p-8 md:p-12 rounded-2xl bg-[#14171E] text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-black uppercase tracking-wider text-[#B81828]">
                Your Home Deserves This Standard
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                Have a project in mind for your home?
              </h3>
              <p className="text-xs sm:text-sm text-white/70">
                Marcio Alexandre Apolinario Jr. personally conducts detailed on-site assessments across Cape Coral, Fort Myers, and surrounding communities.
              </p>
            </div>
            <button
              onClick={onOpenEstimate}
              className="bg-[#B81828] hover:bg-[#9E1422] text-white text-sm font-bold px-8 py-4 rounded-full transition-colors whitespace-nowrap cursor-pointer shadow-lg"
            >
              Book an On-Site Estimate
            </button>
          </div>

        </div>
      </section>

      {/* Global Estimate Section */}
      <EstimateSection />
    </div>
  );
}
