import React from 'react'
import type { Recipe } from '../types/Recipe'

interface TagsListProps {
    recipes: Recipe[];
}

const TagsList = ({ recipes }: TagsListProps) => {

    return (
        <div>Taglist</div>
    )
}

export default TagsList