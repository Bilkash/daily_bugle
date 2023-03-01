import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { NewsType } from "../types";

export interface NewsState {
	news: NewsType[] | []
	itemFrom: number
}

const initialState: NewsState = {
	news: [],
	itemFrom: 0
};

export const newsSlice = createSlice({
	name: "news",
	initialState,
	reducers: {
		getNewsList: (state, action: PayloadAction<NewsType[]>) => {
			state.news = action.payload;
		},
		getMoreNews: (state,  action: PayloadAction<NewsType[]>) => {
			state.news = [...state.news, ...action.payload];
		},
		incrementPage: (state) => {
			state.itemFrom += 6;
		}
	},
});

export const { getNewsList, getMoreNews, incrementPage } = newsSlice.actions;

export default newsSlice.reducer;
