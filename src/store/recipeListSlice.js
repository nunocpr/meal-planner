import { createSlice } from '@reduxjs/toolkit';
import { rando } from '../utils/util_randomNumber.js';

const initialState = {
  recipeList: [],
  error: false,
  isLoading: false,
};

const recipeSlice = createSlice({
  name: 'recipeList',
  initialState,
  reducers: {
    // Add the currentRecipe to the recipeList
    addRecipeToList(state, action) {
      state.isLoading = false;
      state.error = false;
    },
    // Remove the currentRecipe from the recipeList
    removeRecipeFromList(state, action) {

    },
    // Create a Recipe and add it to the list
    createRecipe(state, action) {

    },
    // Delete a Recipe and remove it from the list
    deleteRecipe(state, action) {

    }
  },
});

export const {
  addRecipeToList,
  removeRecipeFromList,
  createRecipe,
  deleteRecipe
} = recipeSlice.actions

export default recipeSlice.reducer;

/* Selectors */
export const selectRecipeList = (state) => state.recipe.recipeList;

/* Async Thunks to fetch recipes */
