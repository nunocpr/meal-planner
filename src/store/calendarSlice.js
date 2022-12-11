import { createSlice } from '@reduxjs/toolkit';

/* THE SLICE BELOW IS AN EXAMPLE FROM REDDIT-CLIENT, JUST TO REMEMBER HOW TO CREATE A STORE SLICE WITH REACT & REDUX */

const initialState = {
  posts: [],
  error: false,
  isLoading: false,
};

const calendarSlice = createSlice({
  name: 'monthlyCalendar',
  initialState,
  reducers: {
    // Reducer template from reddit-client 
    getPostsPending(state) {
      state.isLoading = true;
      state.error = false;
    },
    getPostsSuccess(state, action) {
      state.isLoading = false;
      state.posts = action.payload;
    },
    getPostsFailed(state) {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const {
  getPostsPending,
  getPostsSuccess,
  getPostsFailed
} = calendarSlice.actions

export default calendarSlice.reducer;

/* Selectors */
export const selectPosts = (state) => state.posts.posts;