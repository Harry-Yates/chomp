import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import setupTags from "../utils/setupTags"
import slugify from "slugify"
import type { RecipesQueryResult } from "../types/Recipe"
// import SEO from "../components/SEO"

const Tags = ({ data }: { data: RecipesQueryResult }) => {
	const recipes = data.allContentfulRecipe.nodes;
	const newTags = setupTags({ recipes });

	return (
		<Layout>
			{/* <SEO title="Tags" /> */}
			<main className="page">
				<section className="tags-page">
					{newTags.map((tag) => {
						const [text, value] = tag
						const slug = slugify(text, { lower: true })

						return (
							<Link to={`/tags/${slug}`} key={text} className="tag">
								<h5>{text}</h5>
								<p>{value} recipe</p>
							</Link>
						)
					})}
				</section>
			</main>
		</Layout>
	)
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags