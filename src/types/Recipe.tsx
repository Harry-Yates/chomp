import type { IGatsbyImageData } from 'gatsby-plugin-image';

interface Content {
	tags: string[];
}

export interface Recipe {
	id: string;
	title: string;
	cookTime: number;
	description: string;
	servings: number;
	image?: IGatsbyImageData;
	featured: boolean;
	prepTime: number;
	content: Content;
}

export interface RecipeCollection {
	allContentfulRecipe: {
		nodes: Recipe[];
	};
}

export interface RecipesProps {
	recipes: Recipe[];
}
