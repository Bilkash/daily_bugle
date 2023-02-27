import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import HeaderLink from "../HeaderLink";

export default function Profile() {
	const [ username, setUserName ] = useState("");
	const user = localStorage.getItem("username");

	useEffect(() => {
		if (user) {
			setUserName(user);
		}
	}, [user]);

	const logIn = () => {
		setUserName("test");
		localStorage.setItem("username", "test");
	};

	if (username) {
		return (
			<HeaderLink section={{ title: username, url: "/profile" }}/>
		);
	} else {
		return (
			<Box
				sx={{ fontSize: 24 }}
				onClick={logIn}
			>
				Log In
			</Box>
		);
	}
}
