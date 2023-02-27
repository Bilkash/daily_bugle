import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Main, News, Profile } from "./pages";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main/>,
	},
	{
		path: "/news",
		element: <News/>,
	},
	{
		path: "/profile",
		element: <Profile/>,
	},
]);
