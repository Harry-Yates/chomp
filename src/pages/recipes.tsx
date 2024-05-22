import React from "react";
import Layout from "../components/Layout";
import AllRecipes from "../components/AllRecipes";
import SEO from "../components/SEO";

const Recipes = () => {
	return (
		<Layout>
			<SEO title="Recipes" />
			<div className="about-heading">
				<main className="page">
					<h2>Explore Recipes</h2>
					<AllRecipes />
				</main>
			</div>
		</Layout>
	);
};

export default Recipes;
