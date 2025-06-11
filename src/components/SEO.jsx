// SEO Component
import React, { useEffect } from 'react';

const SEO = ({ title, description, keywords }) => {
  useEffect(() => {
    document.title = title;

    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]') ||
      document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', description);
    document.head.appendChild(metaDescription);

    const metaKeywords = document.querySelector('meta[name="keywords"]') ||
      document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', keywords);
    document.head.appendChild(metaKeywords);
  }, [title, description, keywords]);

  return null;
};



export default SEO;