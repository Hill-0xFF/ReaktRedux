// import { sub } from 'date-fns';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export enum ReactionType {
  ThumbsUp = 'thumbsUp',
  Wow = 'wow',
  Heart = 'heart',
  Rocket = 'rocket',
  Coffee = 'coffee',
}

export type TypePosts = {
  id: string;
  title: string;
  content: string;
  userId: string;
  datetime: string;
  // reactions: {
  //   thumbsUp: number,
  //   wow: number,
  //   heart: number,
  //   rocket: number,
  //   coffee: number
  // }
  reactions: {
    [key in ReactionType]: number;
  };
};

type PostsState = {
  posts: TypePosts[];
};

type InitialStatePosts = {
  posts: TypePosts[];
  status: string;
  error: boolean | null;
};

type IncrementPayloadActionType = {
  postId: string;
  reaction: string;
};

const POSTS_URL = 'https://jsonplaceholder.typicode/posts';

const initialState: InitialStatePosts = {
  posts: [],
  status: 'idle', // idle | loading | succeeded | failed
  error: null,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  try {
    const resp = await axios.get(POSTS_URL);
    return [...resp.data];
  } catch (err: any) {
    return err.message;
  }
});

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
            },
          },
        };
      },
    },
    // incrementReaction: (state, action: PayloadAction<TypePosts, 'id'>) => {
    // incrementReaction: (state, action: PayloadAction<Pick<TypePosts, 'id': 'postId' | 'reactions'>>) => {
    // incrementReaction: (state, action: PayloadAction<Record<TypePosts, string>>) => {
    incrementReaction: (
      state,
      action: PayloadAction<IncrementPayloadActionType>
    ) => {
      // const { postId, reaction } = action.payload;
      const postId = action.payload.postId;
      const reaction = action.payload.reaction;
      const existPost = state.posts.find((post) => post.id === postId);
      // console.log(existPost);

      if (existPost) {
        // if (Object.keys(existPost.reactions).includes(reaction)) {
        //   existPost.reactions[reaction]++
        // }
        existPost.reactions[reaction as ReactionType] += 1;
      }
    },
  },
});

export const selectAllPost = (state: { posts: PostsState }) => state.posts;

export const { addNewPost, incrementReaction } = postsSlice.actions;

export default postsSlice.reducer;
