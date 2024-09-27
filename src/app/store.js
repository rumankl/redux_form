import { configureStore } from "@reduxjs/toolkit";
import { postSlice } from "../features/posts/postSlice";
import { todoApi } from "../features/todos/todosApi";



export const store = configureStore({
  reducer: {
    [postSlice.name]: postSlice.reducer,
    [todoApi.reducerPath]: todoApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    todoApi.middleware
  ])
});