import React from "react";
import Layout from "../../Layout";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Profile() {
	const navigate = useNavigate();
	const username = localStorage.getItem("username");

	const handleLogOut = () => {
		localStorage.removeItem("username");
		localStorage.removeItem("password");
		navigate("/");
	};

	return (
		<Layout>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between"
				}}
			>
				<Box>
					<h1>Welcome, {username}</h1>
				</Box>

				<Button
					variant="contained"
					color="error"
					onClick={handleLogOut}
				>
					Log Out
				</Button>
			</Box>

			<Box
				sx={{
					fontSize: 20,
					marginTop: "10px",
					marginBottom: "10px",
				}}
			>
				{/* eslint-disable-next-line max-len */}
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque consequatur, dignissimos dolore eaque eos labore minima molestiae non, recusandae sapiente ullam velit.
			</Box>

			<Box
				sx={{
					fontSize: 20,
					marginTop: "10px",
					marginBottom: "10px",
				}}
			>
				{/* eslint-disable-next-line max-len */}
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ex ipsum possimus quas quos saepe ut voluptatem? A aliquam assumenda blanditiis cum cupiditate dolorem eaque enim eveniet exercitationem inventore labore laborum, nam neque non, nostrum obcaecati officiis perferendis, quae quisquam recusandae repellat vel velit voluptates! Animi debitis esse excepturi explicabo minus omnis quaerat sequi.
			</Box>

			<Box
				sx={{
					fontSize: 20,
					marginTop: "10px",
					marginBottom: "10px",
				}}
			>
				{/* eslint-disable-next-line max-len */}
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium alias amet assumenda at commodi corporis culpa cupiditate dolore est fuga fugit harum hic impedit in ipsa labore libero molestiae nobis obcaecati odio officia pariatur provident quae quam quod reprehenderit sequi sint sit sunt suscipit ut, vel voluptatibus. Accusantium aliquid aperiam aspernatur blanditiis cum deleniti earum error facilis illum laboriosam magni, nisi perspiciatis praesentium quasi quo quos sed veritatis voluptas voluptatibus voluptatum. Accusantium at blanditiis consequatur delectus deserunt dicta dignissimos dolore doloremque doloribus eligendi est excepturi exercitationem facere fuga fugiat hic ipsam laboriosam laborum magnam maiores molestiae nemo nihil nisi nulla odio optio porro quas, quasi quibusdam quis quos recusandae repellat reprehenderit temporibus vitae voluptas voluptate. Architecto nam perferendis quaerat?
			</Box>
		</Layout>
	);
}
