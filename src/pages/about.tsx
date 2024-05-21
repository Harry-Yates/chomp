import React from "react";
import Layout from "../components/Layout";
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";
import RecipesList from "../components/RecipesList";
import type { Recipe } from "../types/Recipe";

interface AboutProps {
	data: {
		allContentfulRecipe: {
			nodes: Recipe[];
		};
	};
}

const About = ({ data }: AboutProps) => {
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
						<p>
							Our team of culinary experts meticulously crafts each recipe to ensure it not only satisfies your taste buds
							but also supports a healthy lifestyle. From quick and easy weekday meals to gourmet weekend feasts, we've got
							you covered.
						</p>
						<p>
							We believe in the power of meat-centric diets to provide essential nutrients and unparalleled flavor. Join us on
							this gastronomic journey and discover the joys of carnivorous cooking.
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
					<h5>Try something</h5>
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
