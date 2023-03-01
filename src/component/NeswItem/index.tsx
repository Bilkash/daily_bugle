import React, { useState } from "react";
import { Box, Button, Grid, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { NewsType } from "../../types";
import { RootState } from "../../redux/store";
import { getNewsList } from "../../redux/newsSlice";
import deletePost from "../../requsts/deletePost";

type NewsItemType = {
	data: NewsType;
	openSnackbar: () => void;
}

export default function News({ data, openSnackbar }: NewsItemType) {
	const dispatch = useDispatch();
	const news = useSelector((state: RootState) => state.news.news);
	const [mouseOver, setMouseOver] = useState<boolean>(false);

	const handleMouseOver = () => setMouseOver(true);
	const handleMouseLeave = () => setMouseOver(false);

	const handleDelete = (newsId: number) => {
		const newArr = news.filter((it) => it.id !== newsId);
		openSnackbar();
		deletePost(newsId).then();
		dispatch(getNewsList(newArr));
	};

	const renderDeleteButton = () => {
		if (mouseOver) {
			return (
				<Button
					color="error"
					variant="outlined"
					sx={{
						height: "35px"
					}}
					onClick={() => handleDelete(data.id)}
				>
					Delete
				</Button>
			);
		} else {
			return null;
		}
	};

	const buttonWrapperStyles = () => {
		if (mouseOver) {
			return {
				marginBottom: "5px"
			};
		} else {
			return {
				marginBottom: "40px"
			};
		}
	};

	return (
		<Grid
			item
			xs={4}
			onMouseEnter={handleMouseOver}
			onMouseLeave={handleMouseLeave}
		>
			<Grid
				container
				spacing={2}
				direction="column"
				justifyContent="center"
				alignItems="center"
			>
				<Grid
					item
					xs={8}
					sx={{
						fontSize: 24,
						fontWeight: 600,
						marginBottom: "10px"
					}}
				>
					{data.title}
				</Grid>

				<Grid
					item
					xs={8}
					sx={{ marginBottom: "10px" }}
				>
					{data.body}
				</Grid>

				<Grid
					item
					xs={8}
					sx={buttonWrapperStyles()}
				>
					{renderDeleteButton()}
				</Grid>
			</Grid>
		</Grid>
	);
}
