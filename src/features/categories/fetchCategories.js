import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const categoriesToFetch = ['ProgrammerHumor','programminghorror','programminghumor','programmingmemes','photos','memes','ProgrammerDadJokes'];
export const asyncCategories = createAsyncThunk(
    'categories/loadCategories',
    async (arg) => {
      const categoriesData = await Promise.all(categoriesToFetch.map(async (category) => {
        const response = await fetch(`https://www.reddit.com/r/${category}/about.json`);
        const data = await response.json();
        return {
          name: data.data.display_name,
          title: data.data.title,
          icon: data.data.icon_img,
        };
      }));
      console.log(categoriesData)
      return categoriesData;
    }
  );
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
            state.categories = action.payload;
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