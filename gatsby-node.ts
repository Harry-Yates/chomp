import type { GatsbyNode } from "gatsby";
import path from "node:path";
import type { RecipesQueryResult } from "./src/types/Recipe";

export const createPages: GatsbyNode["createPages"] = async ({
	graphql,
	actions,
}) => {
	const { createPage } = actions;

	const result = await graphql<RecipesQueryResult>(`
        query GetRecipes {
            allContentfulRecipe {
                nodes {
                    content {
                        tags
                    }
                }
            }
        }
    `);

	if (result.errors || !result.data) {
		throw result.errors || new Error("No data returned from GraphQL query");
	}

	const recipes = result.data.allContentfulRecipe.nodes;

	for (const recipe of recipes) {
		for (const tag of recipe.content.tags) {
			const tagSlug = tag.replace(/\s+/g, "-").toLowerCase();

			createPage({
				path: `/tags/${tagSlug}`,
				component: path.resolve("src/template/tag-template.tsx"),
				context: {
					tag,
				},
			});
		}
	}
};
