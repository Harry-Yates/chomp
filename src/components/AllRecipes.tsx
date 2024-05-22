import React from 'react'
import TagsList from './TagsList'
import RecipesList from './RecipesList'
import { useStaticQuery, graphql } from 'gatsby'
import type { Recipe, RecipesQueryResult } from '../types/Recipe';

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTime
        calories
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipes = () => {
  const data: RecipesQueryResult = useStaticQuery(query);
  const recipes: Recipe[] = data.allContentfulRecipe.nodes;


  return (
    <div>
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </div>
  );
};

export default AllRecipes