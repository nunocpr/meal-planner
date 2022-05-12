import { createSlice } from '@reduxjs/toolkit';
import { getRandomRecipe } from '../api/spoonacularAPI.js';
import { rando } from '../utils/util_randomNumber.js';

const initialState = {
  currentRecipe: [],
  currentRecipeInternalID: '',
  recipeInstructions: [],
  recipeList: [],
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
      state.currentRecipe = action.payload;
      state.currentRecipeInternalID = 'iid_' + rando(1, 100000);
    },
    getRandomRecipeFailed(state) {
      state.isLoading = false;
      state.error = true;
    },
    // Get the current recipe instructions
    getRecipeInstructions(state) {
      state.isLoading = false;
      state.recipeInstructions = state.currentRecipe.analyzedInstructions[0].steps;
    },
    // Change the current recipe to another one
    changeCurrentRecipe(state, action) {
      state.isLoading = false;
      state.currentRecipe = action.payload;
    },
    addRecipeToList(state, action) {
      state.recipeList = [...state.recipeList, action.payload];
      console.log('recipe is now saved')
      console.log(state.recipeList)
    },
    // Remove the currentRecipe from the recipeList
    removeRecipeFromList(state, action) {
      state.recipeList = state.recipeList.filter(recipe => recipe.id !== action.payload.id);
      console.log('recipe is now removed')
      console.log(state.recipeList)
    }
  },
});

export const {
  getRandomRecipePending,
  getRandomRecipeSuccess,
  getRandomRecipeFailed,
  getRecipeInstructions,
  changeCurrentRecipe,
  addRecipeToList,
  removeRecipeFromList
} = recipeSlice.actions

export default recipeSlice.reducer;

/* Selectors */
export const selectRecipe = (state) => state.recipe.currentRecipe;
export const selectRecipeInstructions = (state) => state.recipe.recipeInstructions;
export const selectRecipeInternalID = (state) => state.recipe.currentRecipeInternalID;
export const selectRecipeList = (state) => state.recipe.recipeList;

/* Async Thunks to fetch recipes */

export const fetchRandomRecipe = () => async dispatch => {
  try {
    dispatch(getRandomRecipePending());
    const recipe = await getRandomRecipe();

    dispatch(getRandomRecipeSuccess(recipe));
    dispatch(getRecipeInstructions());
  } catch (error) {
    console.log(error + ' This is an API error')
    dispatch(getRandomRecipeFailed());
  }
}