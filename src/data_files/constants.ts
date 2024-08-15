import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Alberta Makes Games",
  tagline: "Alberta video game development",
  description:
    "Video games made in or significantly contributed by those in Alberta, Canada",
  description_short:
    "Video games made in or significantly contributed by those in Alberta, Canada",
  url: "http://www.albertamakesgames.com",
  author: "Craig Pfau",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Video Games & Resources`,
  description:
    "Video games made in or significantly contributed by those in Alberta, Canada",
  image: ogImageSrc,
};
