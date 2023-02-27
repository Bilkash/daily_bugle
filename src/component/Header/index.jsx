import React from "react";
import { Container, Toolbar, Typography } from "@mui/material";
import PropTypes from "prop-types";
import HeaderLink from "../HeaderLink";
import Profile from "../Profile";

export default function Header({ sections }) {
	return (
		<React.Fragment>
			<Container maxWidth="lg">
				<Toolbar
					sx={{
						borderBottom: 1,
						borderColor: "divider"
					}}
				>
					<Typography
						component="h1"
						variant="h3"
						color="inherit"
						align="center"
						noWrap
						sx={{
							flex: 1,
							fontFamily: "Times New Roman",
							fontWeight: 700
						}}
					>
						DAILY BUGLE
					</Typography>
				</Toolbar>
				<Toolbar
					component="nav"
					variant="dense"
					sx={{
						justifyContent: "space-between",
						overflowX: "auto",
						textDecoration: "none",
						borderBottom: 1,
						borderColor: "divider"
					}}
				>
					{sections.map(section => <HeaderLink key={section.title} section={section}/>)}

					<Profile/>
				</Toolbar>
			</Container>
		</React.Fragment>
	);
}

Header.propTypes = {
	sections: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			url: PropTypes.string.isRequired
		})
	).isRequired
};
