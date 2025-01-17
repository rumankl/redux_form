import { createSlice } from "@reduxjs/toolkit";



export const postSlice = createSlice({
  name: 'postSlice',
  initialState: {
    posts: []
  },
  reducers: {

    addPost: (state, action) => {
      state.posts.push(action.payload);
    }


  }
});

export const { addPost } = postSlice.actions;

