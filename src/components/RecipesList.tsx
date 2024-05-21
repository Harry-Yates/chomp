import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import type { IGatsbyImageData } from 'gatsby-plugin-image';
import type { RecipesProps } from '../types/Recipe';

const RecipesList = ({ recipes }: RecipesProps) => {
    return (
        <div className='recipes-list'>
            {recipes.map((recipe) => {
                const { id, title, image, prepTime, cookTime } = recipe;
                const pathToImage = getImage(image as IGatsbyImageData);

                return (
                    <Link className="recipe" to={`/${title}`} key={id}>
                        {pathToImage ? (
                            <GatsbyImage image={pathToImage} className='recipe-img' alt={title} />
                        ) : (
                            <div className="recipe-img-placeholder">
                                <p>No Image Available</p>
                            </div>
                        )}
                        <h5>{title}</h5>
                        <p>Prep : {prepTime} min | Cook : {cookTime} min</p>
                    </Link>
                );
            })}
        </div>
    );
}

export default RecipesList