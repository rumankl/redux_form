import { configureStore } from "@reduxjs/toolkit";
import { postSlice } from "../features/posts/postSlice";



export const store = configureStore({
  reducer: {
    [postSlice.name]: postSlice.reducer
  }
});