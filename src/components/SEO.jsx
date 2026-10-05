import { useEffect } from 'react';

export default function SEO({
  title = 'Renewall Remodeling & Improvement | Exterior & Interior Painting Cape Coral, FL',
  description = 'Premier residential exterior and interior painting across Cape Coral, Fort Myers, and Southwest Florida. Meticulous stucco restoration, UV-resistant weather coatings, and master interior finishes. Call (239) 246-5853.',
  canonical = 'https://renewallremodeling.com/',
  image = '/images/hero-exterior-waterfront.jpg'
}) {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update OG Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    // Update OG Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Update OG Image
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute('content', image);

    // Update Canonical
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
