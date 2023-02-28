import React from "react";
import { Box, Container, Typography } from "@mui/material";

import Copyright from "../Copyright";

export default function Footer() {
	return (
		<Container maxWidth="lg">
			<Box component="footer" sx={{ py: 6 }}>
				<Container maxWidth="lg">
					<Typography
						variant="h6"
						align="center"
						gutterBottom
						sx={{
							fontFamily: "Times New Roman",
							fontWeight: 600
						}}
					>
						Daily Bugle. Web site.
					</Typography>
					<Typography
						variant="subtitle1"
						align="center"
						color="text.secondary"
						component="p"
						sx={{ fontFamily: "Times New Roman" }}
					>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, odio.
					</Typography>
					<Copyright />
				</Container>
			</Box>
		</Container>
	);
}
