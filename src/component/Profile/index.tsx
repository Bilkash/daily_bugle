import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

import HeaderLink from "../HeaderLink";
import LoginModal from "../LoginModal";

export default function Profile() {
	const [ username, setUserName ] = useState<string>("");
	const [open, setOpen] = useState<boolean>(false);
	const user = localStorage.getItem("username");

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	useEffect(() => {
		if (user) {
			setUserName(user);
		}
	}, [user]);

	if (username) {
		return (
			<HeaderLink section={{ title: username, url: "/profile" }}/>
		);
	} else {
		return (
			<>
				<Box
					sx={{ fontSize: 24 }}
					onClick={handleOpen}
				>
					Log In
				</Box>

				<LoginModal handleClose={handleClose} open={open}/>
			</>
		);
	}
}
