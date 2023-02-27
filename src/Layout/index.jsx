import React from "react";
import { Footer, Header } from "../component";
import PropTypes from "prop-types";
import { Box, Container } from "@mui/material";

export default function Layout({ children }) {
	const sections = [
		{
			title: "Home",
			url: "/"
		},
		{
			title: "News",
			url: "/news"
		},
	];

	return (
		<>
			<Header sections={sections} />

			<Container maxWidth="lg">
				<Box sx={{ height: "100vh" }}>{children}</Box>
			</Container>

			<Footer />
		</>
	);
}

Layout.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};
