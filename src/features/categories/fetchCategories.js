const categoriesToFetch = ['programming','learnprogramming','ProgrammerHumor','AskProgramming','programminghorror','programmingcirclejerk','programmingmemes','programmingjokes','ProgrammerDadJokes'];

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const asyncCategories = createAsyncThunk(
    'categories/loadCategories',
    async (arg) => {
        let initialState = []
        categoriesToFetch.forEach(async (category) => {
            const response = fetch(`https://www.reddit.com/r/${category}/about.json`)
            const data = await response.json();
            initialState.push({
                name: data.data.display_name,
                title: data.data.title,
                icon: data.data.icon_img,
            });
        })
        return initialState
    })
export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [],
        isLoading: false,
        hasErrors: false,
    },
    reducers:{
        // loadPost: (state, action) => {
    },
    extraReducers:{
        [asyncCategories.pending]: (state) => {
            state.isLoading = true;
            state.hasErrors = false;
        },
        [asyncCategories.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasErrors = false;
            state.posts = action.payload;
        },
        [asyncCategories.rejected]: (state) => {
            state.isLoading = false;
            state.hasErrors = true;
        }
    }
})
export const { } = categoriesSlice.actions;
export const selectCategories = (state) => state.categories.categories
export const selectLoading = (state) => state.isLoading
export default categoriesSlice.reducer;