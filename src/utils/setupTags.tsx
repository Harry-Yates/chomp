import type { RecipesProps } from "../types/Recipe";

const setupTags = ({ recipes }: RecipesProps) => {
    const allTags: { [key: string]: number } = {};

    for (const recipe of recipes) {
        for (const tag of recipe.content.tags) {
            if (allTags[tag]) {
                allTags[tag] = allTags[tag] + 1;
            } else {
                allTags[tag] = 1;
            }
        }
    }

    const newTags = Object.entries(allTags).sort((a, b) => {
        const [firstTag] = a;
        const [secondTag] = b;
        return firstTag.localeCompare(secondTag);
    });
    console.log('Tags:', newTags);

    return newTags;
}

export default setupTags;
