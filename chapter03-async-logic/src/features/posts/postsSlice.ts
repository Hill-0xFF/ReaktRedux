import { Action, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

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

const initialState = [
  {
    id: '1',
    title: 'Learning Redux Toolkit',
    content: 'Always good to learn new stuff.',
    datetime: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0
    },
  },
  {
    id: '2',
    title: 'Using slices',
    content: `Slices are pieces of the state managed by Redux, and here, is where you implement the initial state and actions `,
    datetime: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0
    },
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
      const existPost = state.find(post => post.id === postId)
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
