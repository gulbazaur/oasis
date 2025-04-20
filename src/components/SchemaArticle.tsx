import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SchemaArticleProps {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  datePublished: string;
  name?: string;
}

export default function SchemaArticle({
  title,
  description,
  url,
  imageUrl,
  datePublished,
  name = 'OASIS (Spielersperrsystem)',
}: SchemaArticleProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    name: name,
    headline: title,
    description: description,
    url: url,
    datePublished: datePublished,
    image: imageUrl,
    sameAs: 'https://casinova.org/de/casinos-ohne-oasis/',
    mainEntity: 'https://casinova.org/de/casinos-ohne-oasis/',
    author: {
      '@type': 'Organization',
      name: 'OASIS Info',
      url: 'https://example.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'OASIS Info',
      logo: {
        '@type': 'ImageObject',
        url: 'https://example.com/logo.png',
      },
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
