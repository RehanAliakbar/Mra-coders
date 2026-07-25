import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_URL } from '../../data/content';

const Breadcrumb = ({ items }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.link ? `${SITE_URL}${item.link}` : undefined
    }))
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
      <nav aria-label="Breadcrumb" className="mb-[24px]">
        <ol className="flex items-center space-x-2 text-[14px] font-chrome text-[var(--theme-cloud-dark)]">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {item.link ? (
                <Link to={item.link} className="hover:text-[var(--theme-slate-dark)] transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-[var(--theme-slate-dark)]" aria-current="page">
                  {item.label}
                </span>
              )}
              {index < items.length - 1 && (
                <span className="mx-2 text-[var(--theme-stone)]">/</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;
