import { createSlice } from "@reduxjs/toolkit";

type TypePosts = {
  id: number,
  title: string,
  content: string,
}

export type PostsState = {
  posts: TypePosts[],
}

const initialState = [
  { id: "1", title: "Learning Redux Toolkit", content:"Always good to learn new stuff."},
  { id: "2", title: "Using slices", content: `Slices are pieces of the state managed by Redux, and here,
  is where you implement the initial state and actions `}
]

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {}
});

export const selectAllPost = (state: PostsState) => state.posts;

export default postsSlice.reducer;