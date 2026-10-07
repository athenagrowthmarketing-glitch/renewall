import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import BrandManifesto from '../components/BrandManifesto';
import ExteriorShowcase from '../components/ExteriorShowcase';
import InteriorShowcase from '../components/InteriorShowcase';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import RealTransformations from '../components/RealTransformations';
import ProcessSection from '../components/ProcessSection';
import SupportingFinishes from '../components/SupportingFinishes';
import ReviewsSection from '../components/ReviewsSection';
import ServiceAreas from '../components/ServiceAreas';
import EstimateSection from '../components/EstimateSection';

export default function HomePage({ onOpenEstimate }) {
  return (
    <>
      <SEO
        title="Renewall Remodeling & Improvement | Exterior & Interior Painting Cape Coral, FL"
        description="Precision residential exterior and interior painting across Cape Coral, Fort Myers, and Southwest Florida. Meticulous stucco restoration, UV-resistant weather coatings, and master interior finishes. Call (239) 246-5853."
        canonical="https://www.renewallremodeling.com/"
        image="https://www.renewallremodeling.com/images/hero-exterior-waterfront.jpg"
      />

      <Hero onOpenEstimate={onOpenEstimate} />
      <TrustStrip />
      <BrandManifesto />
      <ExteriorShowcase onOpenEstimate={onOpenEstimate} />
      <InteriorShowcase onOpenEstimate={onOpenEstimate} />
      <BeforeAfterSlider />
      <RealTransformations />
      <ProcessSection onOpenEstimate={onOpenEstimate} />
      <SupportingFinishes />
      <ReviewsSection />
      <ServiceAreas />
      <EstimateSection />
    </>
  );
}
