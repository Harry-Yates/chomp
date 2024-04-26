import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";

const About = () => {
	return (
		<Layout>
			{/* <SEO title="About" /> */}
			<main className="page">
				<section className="about-page">
					<article>
						<h2>About</h2>
						<p>
							Forage glossier letterpress heirloom before they sold
							out you probably haven't heard of them banh mi biodiesel chia.
						</p>
						<p>
							Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
							retro.
						</p>
						<Link to="/contact" className="btn">
							contact
						</Link>
					</article>
					<StaticImage
						src="../assets/images/about.jpeg"
						alt="Person Pouring Salt in Bowl"
						className="about-img"
						placeholder="blurred"
					/>
				</section>
				<section className="featured-recipes">
					<h5>Look at this Awesomesouce!</h5>
					{/* <RecipesList recipes={recipes} /> */}
				</section>
			</main>
		</Layout>
	);
};

export default About;
