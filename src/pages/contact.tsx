import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import type { Recipe } from "../types/Recipe";

// interface ContactProps {
// 	data: {
// 		allContentfulRecipe: {
// 			nodes: Recipe[];
// 		};
// 	};
// }

const Contact = ({ data }: ContactProps) => {
	const recipes = data.allContentfulRecipe.nodes

	return (
		<Layout>
			<main className="page">
				<section className="contact-page">
					<article className="contact-info">
						<h3>Want To Get In Touch?</h3>
						<p>
							We'd love to hear from you! Whether you have questions about our recipes,
							need cooking tips, or just want to share your culinary experiences, we're here to help.
						</p>
						<p>Feel free to reach out to us through the contact form.</p>
						<p>
							Our team is dedicated to bringing you the best carnivore recipes and we appreciate your feedback.
							Let's connect and make your culinary journey even more exciting!
						</p>
					</article>
					<article>
						<form className="form contact-form">
							<div className="form-row">
								<label htmlFor="name">your name</label>
								<input type="text" name="name" id="name" />
							</div>
							<div className="form-row">
								<label htmlFor="email">your email</label>
								<input type="text" name="email" id="email" />
							</div>
							<div className="form-row">
								<label htmlFor="message">message</label>
								<textarea name="message" id="message" />
							</div>
							<button type="submit" className="btn block">
								submit
							</button>
						</form>
					</article>
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
		calories
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default Contact;
