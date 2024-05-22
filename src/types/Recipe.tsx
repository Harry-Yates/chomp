// TypeScript definitions

import type { IGatsbyImageData } from 'gatsby-plugin-image';

interface Content {
	tags: string[];
	instructions: string[];
	ingredients: string[];
	tools: string[];
}

interface Description {
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
	content: Content;
}

export interface RecipesQueryResult {
	contentfulRecipe: Recipe;
}

export interface RecipesProps {
	recipes: Recipe[];
}