import type { IGatsbyImageData } from 'gatsby-plugin-image';

export interface Content {
	tags: string[];
	instructions: string[];
	ingredients: string[];
	tools: string[];
}

export interface Description {
	description: string;
}

export interface Recipe {
	id: string;
	title: string;
	cookTime: number;
	description: Description;
	servings: number;
	image?: IGatsbyImageData;
	featured: boolean;
	prepTime: number;
	calories: number;
	content: Content;
}

export interface RecipesQueryResult {
	allContentfulRecipe: {
		nodes: Recipe[];
	};
}

export interface RecipesProps {
	recipes: Recipe[];
}

export interface PageContext {
	tag: string;
}

export interface RecipesQueryResult {
	contentfulRecipe: Recipe;
}