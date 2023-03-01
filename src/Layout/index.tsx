import React from "react";
import { Box, Container } from "@mui/material";

import { Footer, Header } from "../component";
import { headerSections } from "../consts/headerSections";

type LayoutType = {
	children: React.ReactNode|React.ReactNode[]
}

export default function Layout({ children }: LayoutType) {
	return (
		<>
			<Header sections={headerSections} />

			<Container maxWidth="lg">
				<Box sx={{ minHeight: "55vh" }}>{children}</Box>
			</Container>

			<Footer />
		</>
	);
}
