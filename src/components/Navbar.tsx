import React, { useState, useCallback } from "react";
import { Link } from "gatsby";
import { FiAlignJustify, FiX } from "react-icons/fi";
import logo from "../assets/images/logo.png"

const navLinks = [
	{ to: "/", text: "home" },
	{ to: "/recipes", text: "recipes" },
	// { to: "/tags", text: "tags" },
	{ to: "/about", text: "about" },
];

const Navbar = () => {
	const [show, setShow] = useState(false);

	const toggleNav = useCallback(() => setShow((prevShow) => !prevShow), []);

	return (
		<nav className="navbar">
			<div className="nav-center">
				<div className="nav-header">
					<Link to="/" >
						<img
							src={logo}
							alt="logo"
							style={{ height: "4rem", width: "4rem" }}
						/>
					</Link>
					<button
						type="button"
						className="nav-btn"
						aria-expanded={show}
						onClick={toggleNav}
					>
						{show ? <FiX /> : <FiAlignJustify />}
					</button>
				</div>
				<div className={show ? "nav-links show-links" : "nav-links"}>
					{navLinks.map(({ to, text }) => (
						<Link
							key={to}
							to={to}
							className="nav-link"
							activeClassName="active-link"
							onClick={() => setShow(false)}
						>
							{text}
						</Link>
					))}
					<div className="nav-link contact-link">
						<Link to="/contact" className="btn" onClick={() => setShow(false)}>
							contact
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
