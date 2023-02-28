import React from "react";
import { Box, Container } from "@mui/material";

import { Footer, Header } from "../component";
import { headerSections } from "../consts/headerSections";

type LayoutType = {
	children: React.ReactElement
}

export default function Layout({ children }: LayoutType) {
	return (
		<>
			<Header sections={headerSections} />

			<Container maxWidth="lg">
				<Box sx={{ height: "100vh" }}>{children}</Box>
			</Container>

			<Footer />
		</>
	);
}
