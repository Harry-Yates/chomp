import * as React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const PageNotFound = () => {
	return (
		<Layout>
			<SEO title="404" />
			<main className="error-page">
				<section>
					<h1>404</h1>
					<p>Sorry 😔, we couldn’t find what you were looking for.</p>
					<a href="/">Go home</a>.
				</section>
			</main>
		</Layout>
	);
};

export default PageNotFound;
