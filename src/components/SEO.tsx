import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

interface SEOProps {
  title: string;
  description?: string;
}

const SEO = ({ title, description }: SEOProps) => {
  const { site } = useStaticQuery(query);
  const metaDescription = description || site.siteMetadata.description;

  // Function to convert a string to sentence case
  const toSentenceCase = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const formattedSiteTitle = toSentenceCase(site.siteMetadata.title);
  const formattedTitle = toSentenceCase(title);

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${formattedTitle} | ${formattedSiteTitle}`}
      meta={[{ name: "description", content: metaDescription }]}  // Corrected the meta name field
    />
  );
}

export default SEO;