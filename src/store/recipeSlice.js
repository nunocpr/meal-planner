import { createSlice } from '@reduxjs/toolkit';
import { getRandomRecipe } from '../api/spoonacularAPI.js';

const initialState = {
  recipe: [],
  recipeInstructions: [],
  error: false,
  isLoading: false,
};

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    // Reducers for Random Recipe
    getRandomRecipePending(state) {
      state.isLoading = true;
      state.error = false;
    },
    getRandomRecipeSuccess(state, action) {
      state.isLoading = false;
      state.recipe = action.payload;
    },
    getRandomRecipeFailed(state) {
      state.isLoading = false;
      state.error = true;
    },
    getRandomRecipeInstructions(state, action) {
      state.isLoading = false;
      state.recipeInstructions = action.payload;
    }
  },
});

export const {
  getRandomRecipePending,
  getRandomRecipeSuccess,
  getRandomRecipeFailed,
  getRandomRecipeInstructions,
} = recipeSlice.actions

export default recipeSlice.reducer;

/* Selectors */
export const selectRecipe = (state) => state.recipe.recipe;
export const selectRecipeInstructions = (state) => state.recipe.recipeInstructions;

/* Async Thunks to fetch recipes */

export const fetchRandomRecipe = () => async dispatch => {
  try {
    dispatch(getRandomRecipePending());
    const recipe = await getRandomRecipe();

    dispatch(getRandomRecipeSuccess(recipe));
    dispatch(getRandomRecipeInstructions(recipe.analyzedInstructions[0].steps));
  } catch (error) {
    console.log(error + ' This is an API error')
    dispatch(getRandomRecipeFailed());
  }
}