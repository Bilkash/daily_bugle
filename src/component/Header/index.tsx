import React from "react";
import {
	Container,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	Toolbar,
	Typography
} from "@mui/material";
import { useTranslation } from "react-i18next";

import HeaderLink from "../HeaderLink";
import Profile from "../Profile";

export default function Header() {
	const { t, i18n } = useTranslation();

	const handleLanguageChange = (event: SelectChangeEvent) => {
		i18n.changeLanguage(event.target.value as string);
	};

	return (
		<React.Fragment>
			<Container maxWidth="lg">
				<Toolbar
					sx={{
						borderBottom: 1,
						borderColor: "divider",
						marginTop: "10px"
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

					<FormControl
						sx={{
							position: "absolute",
							right: 0,
							width: "100px"
						}}
					>
						<InputLabel>Language</InputLabel>
						<Select
							id="demo-simple-select"
							value={i18n.language}
							label="Language"
							onChange={handleLanguageChange}
						>
							<MenuItem value={"en"}>EN</MenuItem>
							<MenuItem value={"ua"}>UA</MenuItem>
						</Select>
					</FormControl>
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
					<HeaderLink title={t("home")} url={"/"}/>

					<HeaderLink title={t("news")} url={"/news"}/>

					<Profile/>
				</Toolbar>
			</Container>
		</React.Fragment>
	);
}
