import React from 'react'
import TagsList from './TagsList'
import RecipesList from './RecipesList'
import { useStaticQuery, graphql } from 'gatsby'
import type { Recipe } from '../types/Recipe';

interface AllRecipesProps {
    recipes: Recipe[];
}

const query = graphql`
  query {
    allContentfulRecipe(
        sort: {title: ASC}
        filter: {featured: {eq:true}}
        ) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }`


const AllRecipes = () => {
    const data = useStaticQuery(query);
    const recipes: Recipe[] = data.allContentfulRecipe.nodes;

    return (
        <div>
            <h4>All recipes</h4>
            <TagsList recipes={recipes} />
            <RecipesList recipes={recipes} />
        </div>
    );
};

export default AllRecipes