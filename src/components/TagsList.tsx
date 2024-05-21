import React from 'react';
import type { RecipesProps } from '../types/Recipe';
import setupTags from "../utils/setupTags"
import { Link } from "gatsby"
import slugify from "slugify"

const TagsList = ({ recipes }: RecipesProps) => {
    const newTags = setupTags({ recipes })

    return (
        <div className="tags-container">
            {/* <h4>Recipes</h4> */}
            <div className="tags-list">
                {newTags.map((tag) => {
                    const [text, value] = tag
                    const slug = slugify(text, { lower: true })

                    return (
                        <Link to={`/tags/${slug}`} key={text}>
                            {text} ({value})
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default TagsList