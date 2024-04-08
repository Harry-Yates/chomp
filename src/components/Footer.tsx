import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "gatsby";

const Footer = () => {
	return (
		<footer className="page-footer">
			<Link to="/">
				<img
					src={logo}
					alt="Simply Recipes"
					style={{ height: "2.5rem", width: "2.5rem" }}
				/>
			</Link>
		</footer>
	);
};

export default Footer;
