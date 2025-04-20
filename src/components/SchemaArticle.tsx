import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SchemaArticleProps {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  datePublished: string;
}

export default function SchemaArticle({
  title,
  description,
  url,
  imageUrl,
  datePublished,
}: SchemaArticleProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: url,
    datePublished: datePublished,
    image: imageUrl,
    author: {
      '@type': 'Organization',
      name: 'OASIS Info',
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