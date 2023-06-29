import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

type TypePosts = {
  id: string;
  title: string;
  content: string;
  userId: string;
  datetime: string;
};

type PostsState = {
  posts: TypePosts[];
};

const initialState = [
  {
    id: '1',
    title: 'Learning Redux Toolkit',
    content: 'Always good to learn new stuff.',
    datetime: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: '2',
    title: 'Using slices',
    content: `Slices are pieces of the state managed by Redux, and here, is where you implement the initial state and actions `,
    datetime: sub(new Date(), { minutes: 5 }).toISOString(),
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addNewPost: {
      reducer: (state, action: PayloadAction<TypePosts>) => {
        // fixed using
        // https://redux-toolkit.js.org/api/createSlice#customizing-generated-action-creators
        state.push(action.payload);
      },
      prepare(id, title, content, userId, datetime) {
        return {
          payload: {
            id,
            userId,
            title,
            content,
            datetime
          },
        };
      },
    },
  },
});

export const selectAllPost = (state: PostsState) => state.posts;

export const { addNewPost } = postsSlice.actions;

export default postsSlice.reducer;
