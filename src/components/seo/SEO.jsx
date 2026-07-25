import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_URL } from '../../data/content';

const SEO = ({ title, description, canonicalPath, ogImage, schemaMarkup }) => {
  const siteUrl = SITE_URL; 
  const fullUrl = canonicalPath ? `${siteUrl}${canonicalPath}` : siteUrl;
  
  const pageTitle = title ? `${title} | MRA Digital Studio` : 'MRA Digital Studio | Premium Web Design Agency';
  const pageDescription = description || 'MRA Digital Studio crafts premium web experiences, high-performance web development, and effective SEO strategies for modern brands.';
  const image = ogImage ? `${siteUrl}${ogImage}` : `${siteUrl}/assets/og-image.webp`;

  // Default WebPage Schema for every page
  const defaultWebPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageTitle,
    "description": pageDescription,
    "url": fullUrl
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content={image} />

      {/* Default WebPage Schema */}
      <script type="application/ld+json">
        {JSON.stringify(defaultWebPageSchema)}
      </script>

      {/* Dynamic Custom Schema Injection */}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
