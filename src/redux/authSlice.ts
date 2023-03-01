import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
	username: string
}

const initialState: AuthState = {
	username: "",
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logIn: (state, action: PayloadAction<string>) => {
			state.username = action.payload;
		},
		logOut: (state) => {
			state.username = "";
		},
	},
});

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
