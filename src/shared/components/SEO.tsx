import React from 'react';

import config from '../constants/siteConfig';

interface Props {
  description?: string;
  title: string;
}

const SEO: React.FC<Props> = function (props) {
  const { description, title } = props;
  const { siteMetadata } = config;

  const metaDescription = description || siteMetadata.description;
  const logoUrl = new URL('logo-meta.png', siteMetadata.siteUrl).toString();

  return (
    <React.Fragment>
      <title>{`${siteMetadata.title} | ${title}`}</title>

      <meta name="description" content={metaDescription} />
      <meta name="og:title" content={`${title} | ${siteMetadata.title}`} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:type" content="website" />
      <meta name="og:image" content={logoUrl} />
      <meta name="og:url" content={siteMetadata.siteUrl} />
      <meta name="twitter:card" content={metaDescription} />
      <meta name="twitter:image" content={logoUrl} />
      <meta name="twitter:creator" content={siteMetadata.author} />
      <meta name="twitter:url" content={siteMetadata.siteUrl} />
      <meta name="twitter:title" content={`${title} | ${siteMetadata.title}`} />
      <meta name="twitter:description" content={metaDescription} />
    </React.Fragment>
  );
};

export default SEO;
