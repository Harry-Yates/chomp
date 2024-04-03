import React from "react";
import { Link } from "gatsby";

const Home = () => {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</nav>

			<h1>HOME</h1>
		</div>
	);
};

export default Home;
