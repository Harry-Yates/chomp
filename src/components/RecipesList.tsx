import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import type { IGatsbyImageData } from 'gatsby-plugin-image';
import type { RecipesProps } from '../types/Recipe';

const RecipesList = ({ recipes }: RecipesProps) => {
    return (
        <div className='recipes-list'>
            {recipes.map((recipe) => {
                const { id, title, image, prepTime, cookTime, calories } = recipe;
                const pathToImage = getImage(image as IGatsbyImageData);
                const slug = title.replace(/\s+/g, '-').toLowerCase();

                return (
                    <Link className="recipe" to={`/${slug}`} key={id}>
                        {pathToImage ? (
                            <GatsbyImage image={pathToImage} className='recipe-img' alt={title} />
                        ) : (
                            <div className="recipe-img-placeholder">
                                <p>No Image Available</p>
                            </div>
                        )}
                        <h5>{title}</h5>
                        <p>Prep: {prepTime}m | Cook: {cookTime}m | {calories} cal</p>
                    </Link>
                );
            })}
        </div>
    );
}

export default RecipesList