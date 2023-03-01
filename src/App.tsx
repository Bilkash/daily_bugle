import React from "react";
import { RouterProvider } from "react-router-dom";

import { router } from "./router/router";

import "./i18n/config";

const App: React.FC = () => {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	);
};






export default App;
