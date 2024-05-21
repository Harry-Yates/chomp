// src/types/Recipe.ts
import type { IGatsbyImageData } from 'gatsby-plugin-image';

interface Content {
	[key: string]: unknown;
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
