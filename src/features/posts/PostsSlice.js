import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const asyncPosts = createAsyncThunk(
    'posts/loadPosts',
    async (category = 'ProgrammerHumor') => {
        let response = await fetch(`https://www.reddit.com/r/${category}/new.json?limit=10&post_hint=image`);
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
            type: post.data.post_hint
          };
        });

        return initialState
    }
  );
export const asyncComments = createAsyncThunk(
    'posts/loadComments',
    async (permalink = 'https://www.reddit.com/r/ProgrammerDadJokes/comments/11dasbt/i_run_a_coding_camp_for_kids_hacking_windows/') => {
        let response = await fetch(`${permalink}.json`);
        let data = await response.json();
        data = data[1].data.children.map((children) => {
            return {
                comment: children.data.body,
                author: children.data.author,
            }
        })
        return data
    })
export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        comments: [],
        isLoadingComments: false,
        hasErrorsComments: false,
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
        },
        [asyncComments.pending]: (state) => {
            state.isLoadingComments = true;
            state.hasErrorsComments = false;
        },
        [asyncComments.fulfilled]: (state, action) => {
            state.isLoadingComments = false;
            state.hasErrorsComments = false;
            state.comments = action.payload;
        },
        [asyncComments.rejected]: (state) => {
            state.isLoadingComments = false;
            state.hasErrorsComments = true;
        }
    }
})
export const { } = postsSlice.actions;
export const selectPosts = (state) => state.posts.posts
export const selectComments = (state) => state.posts.comments
export const selectLoading = (state) => state.isLoading
export const selectLoadingComments = (state) => state.isLoadingComments
export default postsSlice.reducer;