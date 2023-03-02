import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postsReducer from '../features/posts/PostsSlice';
import categoriesReducer from '../features/categories/fetchCategories';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    categories: categoriesReducer
  },
});
