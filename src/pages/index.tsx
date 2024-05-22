import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import AllRecipes from "../components/AllRecipes";

const Home = () => {
	return (
		<Layout>
			<main className="page">
				<header className="hero">
					<StaticImage src="../assets/images/main.webp" alt="hero" className="hero-img" placeholder="tracedSVG" layout="fullWidth" >
					</StaticImage>
					<div className="hero-container">
						<div className="hero-text">
							<h1>Chomp</h1>
							<h4>Feast on Flavor</h4>
						</div>
					</div>
				</header>
				<AllRecipes />
			</main>
		</Layout>
	);
};

export default Home;
