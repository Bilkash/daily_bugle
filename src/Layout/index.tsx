import React from "react";
import { Box, Container } from "@mui/material";

import { Footer, Header } from "../component";

type LayoutType = {
	children: React.ReactNode|React.ReactNode[]
}

export default function Layout({ children }: LayoutType) {
	return (
		<>
			<Header />

			<Container maxWidth="lg">
				<Box sx={{ minHeight: "55vh" }}>{children}</Box>
			</Container>

			<Footer />
		</>
	);
}
