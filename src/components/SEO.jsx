import { useEffect } from 'react';

export default function SEO({
  title = 'Renewall Remodeling & Improvement | Exterior & Interior Painting Cape Coral, FL',
  description = 'Premier residential exterior and interior painting across Cape Coral, Fort Myers, and Southwest Florida. Meticulous stucco restoration, UV-resistant weather coatings, and master interior finishes. Call (239) 246-5853.',
  canonical = 'https://www.renewallremodeling.com/',
  image = 'https://www.renewallremodeling.com/images/hero-exterior-waterfront.jpg'
}) {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Helper to safely set meta tags
    const setMeta = (attr, key, val) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', val);
    };

    // Update Meta Description
    setMeta('name', 'description', description);

    // Update Open Graph tags
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:image', image);
    setMeta('property', 'og:url', canonical);

    // Update Twitter Card tags
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', image);

    // Update Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonical);
  }, [title, description, canonical, image]);

  return null;
}
