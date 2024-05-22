import React from "react";
import Layout from "../components/Layout";
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";
import RecipesList from "../components/RecipesList";
import type { RecipesQueryResult } from "../types/Recipe";


const About = ({ data }: { data: RecipesQueryResult }) => {
	const recipes = data?.allContentfulRecipe?.nodes ?? [];

	return (
		<Layout>
			{/* <SEO title="About" /> */}
			<main className="page">
				<section className="about-page">
					<article>
						<h2>About Us</h2>
						<p>
							Welcome to our carnivore recipe website, your ultimate destination for mouth-watering meat-based dishes.
							Our passion for quality meat and exceptional recipes drives us to create a platform where fellow carnivores
							can explore and enjoy delicious and nutritious meals.
						</p>

						<Link to="/contact" className="btn">
							contact
						</Link>
					</article>
					<StaticImage
						src="../assets/images/about.jpeg"
						alt="Person Pouring Salt in Bowl"
						className="about-img"
						placeholder="none"
					/>
				</section>
				<section className="featured-recipes">
					<h5>Explore Recipes</h5>
					<RecipesList recipes={recipes} />
				</section>
			</main>
		</Layout>
	);
};

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`


export default About;
