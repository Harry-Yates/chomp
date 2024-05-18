import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const Home = () => {
	return (
		<Layout>
			<main className="page">
				<header className="hero">
					<StaticImage src="../assets/images/main.webp" alt="hero" className="hero-img" placeholder="tracedSVG" layout="fullWidth" >
					</StaticImage>
					<div className="hero-container">
						<div className="hero-text">
							<h1>Recipes</h1>
							<h4>Latest</h4>
						</div>
					</div>
				</header>
			</main>
		</Layout>
	);
};

export default Home;
