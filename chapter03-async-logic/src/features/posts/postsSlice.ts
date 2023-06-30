import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { sub } from 'date-fns';

export type TypePosts = {
  id: string;
  title: string;
  content: string;
  userId: string;
  datetime: string;
  reactions: {
    thumbsUp: number,
    wow: number,
    heart: number,
    rocket: number,
    coffee: number
  }
};

type PostsState = {
  posts: TypePosts[];
};

type InitialStatePosts = {
  posts: TypePosts[],
  status: string,
  error: boolean | null,
}

const initialState: InitialStatePosts = {
  posts: [],
  status: 'idle', // idle | loading | succeeded | failed
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addNewPost: {
      reducer: (state, action: PayloadAction<TypePosts>) => {
        // fixed using
        // https://redux-toolkit.js.org/api/createSlice#customizing-generated-action-creators
        state.posts.push(action.payload);
      },
      prepare(id, title, content, userId, datetime) {
        return {
          payload: {
            id,
            userId,
            title,
            content,
            datetime,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            }
          },
        };
      },
    },

    //incrementReaction: (state, action: PayloadAction<TypePosts, 'id'>) => {
    incrementReaction: (state, action) => {
      const { postId, reaction } = action.payload;
      const existPost = state.posts.find(post => post === postId)
      if(existPost) {
        existPost.reactions[reaction] += 1
        
        // const react = Object.entries(existPost.reactions).find(reaction)
        // console.log(react);
        
      }
    }
  },
});

export const selectAllPost = (state: PostsState) => state.posts;

export const { addNewPost, incrementReaction } = postsSlice.actions;

export default postsSlice.reducer;
