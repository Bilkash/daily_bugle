import { redirect } from "react-router-dom";

export async function authLoader() {
	const username = localStorage.getItem("username");

	if (!username) {
		return redirect("/");
	}

	return null;
}
