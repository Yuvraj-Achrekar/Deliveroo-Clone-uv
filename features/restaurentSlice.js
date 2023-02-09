import { createSlice } from "@reduxjs/toolkit";

export const restaurentSlice = createSlice({
	name: "restaurent",
	initialState: {
		restaurent: {
			id: null,
			imgUrl: null,
			title: null,
			rating: null,
			genre: null,
			address: null,
			short_description: null,
			dishes: null,
			long: null,
			lat: null,
		},
	},
	reducers: {
		setRestaurent: (state, action) => {
			state.restaurent = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setRestaurent } = restaurentSlice.actions;

export const selectRestaurent = (state) => state.restaurent.restaurent;

export default restaurentSlice.reducer;
