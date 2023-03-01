import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import HeaderLink from "../HeaderLink";
import LoginModal from "../LoginModal";
import { RootState } from "../../redux/store";

export default function Profile() {
	const { t } = useTranslation();
	const [open, setOpen] = useState<boolean>(false);
	const username = useSelector((state: RootState) => state.auth.username);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	if (username) {
		return (
			<HeaderLink title={username} url={"/profile"}/>
		);
	} else {
		return (
			<>
				<Box
					sx={{
						fontSize: 24,
						cursor: "pointer"
					}}
					onClick={handleOpen}
				>
					{t("logIn")}
				</Box>

				<LoginModal handleClose={handleClose} open={open}/>
			</>
		);
	}
}
