import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const asyncPosts = createAsyncThunk(
    'posts/loadPosts',
    async (category = 'ProgrammerHumor') => {
        let response = await fetch(`https://www.reddit.com/r/${category}/new.json?limit=10`);
        let data = await response.json();
        let initialState =  data.data.children.map((post) => {
          return {
            imgUrl: post.data.url,
            author: post.data.author,
            title: post.data.title,
            link: `https://www.reddit.com${post.data.permalink}`,
            upVotes: post.data.ups,
            downVotes: post.data.downs,
            subReddit: post.data.subreddit,
            subRedditPrefix: post.data.subreddit_name_prefixed,
          };
        });
        return initialState
    }
  );
export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        isLoading: false,
        hasErrors: false,
    },
    reducers:{
        // loadPost: (state, action) => {
    },
    extraReducers:{
        [asyncPosts.pending]: (state) => {
            state.isLoading = true;
            state.hasErrors = false;
        },
        [asyncPosts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasErrors = false;
            state.posts = action.payload;
        },
        [asyncPosts.rejected]: (state) => {
            state.isLoading = false;
            state.hasErrors = true;
        }
    }
})
export const { } = postsSlice.actions;
export const selectPosts = (state) => state.posts.posts
export const selectLoading = (state) => state.isLoading
export default postsSlice.reducer;