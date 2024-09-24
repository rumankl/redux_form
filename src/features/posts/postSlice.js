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
      setPostsToLocal(state.posts);
    },
    removePost: (state, action) => {
      state.posts.splice(action.payload, 1);
      setPostsToLocal(state.posts);
    }


  }
});

export const { addPost, removePost } = postSlice.actions;