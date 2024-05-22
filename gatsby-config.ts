import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
	siteMetadata: {
		title: "chomp",
		description: "A simple starter for Gatsby",
		siteUrl: "https://www.yourdomain.tld",
	},
	graphqlTypegen: true,
	plugins: [
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: `${__dirname}/src/assets/images`,
			},
		},
		{
			resolve: "gatsby-source-contentful",
			options: {
				spaceId: "o4yw49y2lvuv",
				accessToken: process.env.CONTENTFUL_API_KEY,
			},
		},
		"gatsby-plugin-react-helmet",
	],
};

export default config;
