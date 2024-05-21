import type { IGatsbyImageData } from 'gatsby-plugin-image';

/// Content: Represents the structure of the content associated with a recipe, specifically the tags.
interface Content {
	tags: string[];
}

/// Recipe: Represents the structure of a single recipe object. This includes various properties such as id, title, cookTime, description, servings, optional image data, a featured flag, preparation time, and content (tags).
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

/// RecipesQueryResult: Represents the full structure of the data returned by the GraphQL query. The GraphQL query typically returns more than just the array of recipes. This interface includes a property 'allContentfulRecipe', which contains a nested 'nodes' array of Recipe objects. This structure is essential for correctly typing the data returned by the GraphQL query and allows for easy extraction of the actual recipe data within the application.
export interface RecipesQueryResult {
	allContentfulRecipe: {
		nodes: Recipe[];
	};
}

/// RecipesProps: Represents an array of Recipe objects, typically used for component props. This interface is used to define the types of props that components like TagsList and RecipesList will receive. It ensures that these components are provided with the correct data structure specifically an array of Recipe objects, which they can then use to render the appropriate UI elements.
export interface RecipesProps {
	recipes: Recipe[];
}
