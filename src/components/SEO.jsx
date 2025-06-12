import React, { useEffect } from 'react';

const SEO = ({ title, description, keywords }) => {
  useEffect(() => {
    document.title = title;

    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]') ||
      document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', description);
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]') ||
      document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', keywords);
    if (!document.querySelector('meta[name="keywords"]')) {
      document.head.appendChild(metaKeywords);
    }

    // Add author meta tag
    const metaAuthor = document.querySelector('meta[name="author"]') ||
      document.createElement('meta');
    metaAuthor.setAttribute('name', 'author');
    metaAuthor.setAttribute('content', 'Danyal Shah');
    if (!document.querySelector('meta[name="author"]')) {
      document.head.appendChild(metaAuthor);
    }

    // Add viewport meta tag
    const metaViewport = document.querySelector('meta[name="viewport"]') ||
      document.createElement('meta');
    metaViewport.setAttribute('name', 'viewport');
    metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
    if (!document.querySelector('meta[name="viewport"]')) {
      document.head.appendChild(metaViewport);
    }

    // Add charset meta tag
    const metaCharset = document.querySelector('meta[charset]') ||
      document.createElement('meta');
    metaCharset.setAttribute('charset', 'UTF-8');
    if (!document.querySelector('meta[charset]')) {
      document.head.appendChild(metaCharset);
    }

    // Open Graph meta tags for social media
    const ogTitle = document.querySelector('meta[property="og:title"]') ||
      document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', title);
    if (!document.querySelector('meta[property="og:title"]')) {
      document.head.appendChild(ogTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]') ||
      document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', description);
    if (!document.querySelector('meta[property="og:description"]')) {
      document.head.appendChild(ogDescription);
    }

    const ogType = document.querySelector('meta[property="og:type"]') ||
      document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.setAttribute('content', 'website');
    if (!document.querySelector('meta[property="og:type"]')) {
      document.head.appendChild(ogType);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]') ||
      document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', window.location.href);
    if (!document.querySelector('meta[property="og:url"]')) {
      document.head.appendChild(ogUrl);
    }

    // Twitter Card meta tags
    const twitterCard = document.querySelector('meta[name="twitter:card"]') ||
      document.createElement('meta');
    twitterCard.setAttribute('name', 'twitter:card');
    twitterCard.setAttribute('content', 'summary_large_image');
    if (!document.querySelector('meta[name="twitter:card"]')) {
      document.head.appendChild(twitterCard);
    }

    const twitterTitle = document.querySelector('meta[name="twitter:title"]') ||
      document.createElement('meta');
    twitterTitle.setAttribute('name', 'twitter:title');
    twitterTitle.setAttribute('content', title);
    if (!document.querySelector('meta[name="twitter:title"]')) {
      document.head.appendChild(twitterTitle);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]') ||
      document.createElement('meta');
    twitterDescription.setAttribute('name', 'twitter:description');
    twitterDescription.setAttribute('content', description);
    if (!document.querySelector('meta[name="twitter:description"]')) {
      document.head.appendChild(twitterDescription);
    }

    // Add JSON-LD structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Danyal Shah",
        "jobTitle": "Frontend Developer",
        "url": window.location.href,
        "description": "Experienced Frontend Developer specializing in React, JavaScript, and modern web technologies",
        "knowsAbout": ["React", "JavaScript", "Frontend Development", "Web Development", "UI/UX Design"],
        "sameAs": [
          // Add your actual social media URLs here
          "https://linkedin.com/in/your-profile",
          "https://github.com/your-username"
        ]
      });
      document.head.appendChild(script);
    }

    // Add canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]') ||
      document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', window.location.href);
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(canonicalLink);
    }

    // Add robots meta tag
    const metaRobots = document.querySelector('meta[name="robots"]') ||
      document.createElement('meta');
    metaRobots.setAttribute('name', 'robots');
    metaRobots.setAttribute('content', 'index, follow');
    if (!document.querySelector('meta[name="robots"]')) {
      document.head.appendChild(metaRobots);
    }

  }, [title, description, keywords]);

  return null;
};

export default SEO;