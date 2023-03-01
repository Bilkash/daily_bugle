import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, Snackbar } from "@mui/material";

import Layout from "../../Layout";
import { RootState } from "../../redux/store";
import getNews from "../../requsts/getNews";
import { getMoreNews, getNewsList, incrementPage } from "../../redux/newsSlice";
import { NewsItem } from "../../component";
import { NewsType } from "../../types";

export default function News() {
	const dispatch = useDispatch();
	const news = useSelector((state: RootState) => state.news.news);
	const itemFrom = useSelector((state: RootState) => state.news.itemFrom);
	const [openSnackbar, setOpenSnackbar] = React.useState(false);

	const handleOpenSnackbar = () => {
		setOpenSnackbar(true);
	};
	const handleCloseSnackbar = () => {
		setOpenSnackbar(false);
	};

	const handleLoadMore = () => {
		dispatch(incrementPage());
	};

	const renderNews = () => {
		if (news.length) {
			return news.map((it: NewsType) => <NewsItem key={it.id} data={it} openSnackbar={handleOpenSnackbar}/>);
		}
	};

	useEffect(() => {
		getNews(itemFrom).then((response) => {
			dispatch(getNewsList(response));
		});
	}, []);

	useEffect(() => {
		if (itemFrom > 0) {
			getNews(itemFrom).then((response) => {
				dispatch(getMoreNews(response));
			});
		}
	}, [itemFrom]);

	return (
		<Layout>
			<h1>NEWS</h1>

			<Grid container spacing={2}>
				{renderNews()}
			</Grid>

			<Button fullWidth onClick={handleLoadMore}>
				Load More
			</Button>

			<Snackbar
				open={openSnackbar}
				autoHideDuration={2500}
				onClose={handleCloseSnackbar}
				message="Post Deleted"
			/>
		</Layout>
	);
}
