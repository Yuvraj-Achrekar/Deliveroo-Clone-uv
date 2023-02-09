import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features/basketSlice";
import restaurentSlice from "./features/restaurentSlice";

export default configureStore({
	reducer: {
		basket: basketReducer,
		restaurent: restaurentSlice,
	},
});
