import { createSlice } from '@reduxjs/toolkit';
import { getRandomRecipe } from '../api/spoonacularAPI.js';

const initialState = {
  recipe: [],
  error: false,
  isLoading: false,
};

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    // Reducer template from reddit-client 
    getRecipePending(state) {
      state.isLoading = true;
      state.error = false;
    },
    getRecipeSuccess(state, action) {
      state.isLoading = false;
      state.recipe = action.payload;
    },
    getRecipeFailed(state) {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const {
  getRecipePending,
  getRecipeSuccess,
  getRecipeFailed,
} = recipeSlice.actions

export default recipeSlice.reducer;

/* Selectors */
export const selectRecipe = (state) => state.recipe.recipe;

/* Async Thunks to fetch recipes */

export const fetchRandomRecipe = () => async dispatch => {
  try {
    dispatch(getRecipePending());
    const recipe = await getRandomRecipe();

    dispatch(getRecipeSuccess(recipe));
  } catch (error) {
    console.log(error + ' This is an API error')
    dispatch(getRecipeFailed());
  }
}