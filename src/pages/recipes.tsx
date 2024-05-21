import React from "react";
import Layout from "../components/Layout";
import AllRecipes from "../components/AllRecipes";

const Recipes = () => {
	return (
		<Layout>
			<div className="about-heading">
				<main className="page">
					<AllRecipes />
				</main>
			</div>
		</Layout>
	);
};

export default Recipes;
