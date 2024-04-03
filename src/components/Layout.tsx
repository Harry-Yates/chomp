import React from "react";
import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "normalize.css";
import "../styles/main.css";

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
