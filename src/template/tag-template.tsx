import React from "react";
import type { PageProps } from "gatsby";
import { graphql } from "gatsby";
import RecipesList from "../components/RecipesList";
import Layout from "../components/Layout";
// import SEO from "../components/SEO";
import type { RecipesQueryResult, PageContext } from "../types/Recipe";

const TagTemplate = ({ data, pageContext }: PageProps<RecipesQueryResult, PageContext>) => {

  const recipes = data.allContentfulRecipe.nodes;

  const toSentenceCase = (str: string) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <Layout>
      {/* <SEO title={pageContext.tag} /> */}
      <main className="page">
        <h2 style={{ textTransform: 'capitalize' }}>{toSentenceCase(pageContext.tag)}</h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipes} />
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query GetRecipeByTag($tag: String) {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        title
        id
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

export default TagTemplate;
