import React from "react";
import MetaTags from "react-meta-tags";

const Metas = ({ title, description, image, link }) => (
  <MetaTags>
    <title>{title}</title>
    <meta itemprop="name" id="g-name" content={title} />
    <meta itemprop="description" id="g-desc" content={description} />
    <meta itemprop="image" id="g-img" content={image} />
    <meta property="og:url" id="fb-url" content={link} />
    <meta property="og:type" id="fb-type" content="website" />
    <meta property="og:title" id="fb-title" content={title} />
    <meta property="og:description" id="fb-desc" content={description} />
    <meta property="og:image" id="fb-img" content={image} />
    <meta name="twitter:card" id="t-card" content="summary_large_image" />
    <meta name="twitter:title" id="t-title" content={title} />
    <meta name="twitter:description" id="t-desc" content={description} />
    <meta name="twitter:image" content={image} />
  </MetaTags>
);

export default Metas;
