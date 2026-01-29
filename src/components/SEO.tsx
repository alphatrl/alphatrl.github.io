import React from 'react';
import { Helmet } from 'react-helmet-async';

import config from '../config';

interface Props {
  lang?: string;
  description?: string;
  title: string;
}

const SEO: React.FC<Props> = function (props) {
  const { description, title, lang = 'en' } = props;
  const { siteMetadata } = config;

  const metaDescription = description || siteMetadata.description;
  const logoUrl = new URL('logo-meta.png', siteMetadata.siteUrl).toString();

  return (
    <Helmet>
      <title>
        {title} | {siteMetadata.title}
      </title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, viewport-fit=cover"
      />

      <html lang={lang} />
      <meta name="description" content={metaDescription} />
      <meta name="og:title" content={`${title} | ${siteMetadata.title}`} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:type" content="website" />
      <meta
        name="og:image"
        content={logoUrl}
      />
      <meta name="og:url" content={siteMetadata.siteUrl} />
      <meta name="twitter:card" content={metaDescription} />
      <meta
        name="twitter:image"
        content={logoUrl}
      />
      <meta name="twitter:creator" content={siteMetadata.author} />
      <meta name="twitter:url" content={siteMetadata.siteUrl} />
      <meta name="twitter:title" content={`${title} | ${siteMetadata.title}`} />
      <meta name="twitter:description" content={metaDescription} />
    </Helmet>
  );
};

export default SEO;
