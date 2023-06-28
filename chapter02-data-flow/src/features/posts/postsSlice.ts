import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TypePosts = {
  id: string,
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
  reducers: {
    addNewPost: {
    reducer: (state, action: PayloadAction<TypePosts>) => {
      // fixed using 
      // https://redux-toolkit.js.org/api/createSlice#customizing-generated-action-creators
      state.push(action.payload)
    }, prepare(id, title, content) {
      return {
        payload: {
          id,
          title,
          content,
        }
      }
    }
  }
  }
});

export const selectAllPost = (state: PostsState) => state.posts;

export const { addNewPost } = postsSlice.actions;

export default postsSlice.reducer;