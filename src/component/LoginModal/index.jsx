import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import { authMock } from "../../authMock";

const initialValue = {
	username: "",
	password: ""
};

const validationSchema = yup.object({
	username: yup
		.string("Enter your username")
		.required("Username is required"),
	password: yup
		.string("Enter your password")
		.min(5, "Password should be of minimum 5 characters length")
		.required("Password is required"),
});

export default function LoginModal({ open, handleClose }) {
	const navigate = useNavigate();

	return (
		<>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					width: 400,
					bgcolor: "background.paper",
					border: "2px solid #000",
					boxShadow: 24,
					p: 4,
				}}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Log In
					</Typography>

					<Formik
						initialValues={initialValue}
						validationSchema={validationSchema}
						onSubmit={(values, { setErrors }) => {
							if (
								values.username === authMock.username
								&& values.password === authMock.password
							) {
								localStorage.setItem("username", values.username);
								localStorage.setItem("password", values.password);
								handleClose();
								navigate("/profile");
							}
							if (values.username !== authMock.username) {
								setErrors({ username: "Username is invalid" });
							}
							if (values.password !== authMock.password) {
								setErrors({ password: "Password is invalid" });
							}
						}}
					>
						{({ values,
							errors,
							touched,
							handleChange,
							handleSubmit }) => (
							<Box
								component="form"
								noValidate
								autoComplete="off"
								onSubmit={handleSubmit}
							>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										justifyContent: "space-between",
										height: "30vh",
										marginTop: "15px",
										alignItems: "center"
									}}
								>
									<TextField
										fullWidth
										id="username"
										name="username"
										label="Username"
										value={values.username}
										onChange={handleChange}
										error={touched.username && Boolean(errors.username)}
										helperText={touched.username && errors.username}
									/>

									<TextField
										fullWidth
										id="password"
										name="password"
										label="Password"
										type="password"
										value={values.password}
										onChange={handleChange}
										error={touched.password && Boolean(errors.password)}
										helperText={touched.password && errors.password}
									/>

									<Button
										fullWidth
										type={"submit"}
										variant="contained"
										color="primary"
									>
											Log In
									</Button>
								</Box>
							</Box>
						)}
					</Formik>
				</Box>
			</Modal>
		</>
	);
}

LoginModal.propTypes = {
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired
};
