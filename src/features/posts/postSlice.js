import { createSlice } from "@reduxjs/toolkit";
import { getPostsFromLocal, setPostsToLocal } from "../shared/localstorage";


export const postSlice = createSlice({
  name: 'postSlice',
  initialState: {
    posts: getPostsFromLocal()
  },
  reducers: {

    addPost: (state, action) => {
      state.posts.push(action.payload);
      setPostsToLocal(state.posts)
    }


  }
});

export const { addPost } = postSlice.actions;

