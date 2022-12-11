import { createSlice } from '@reduxjs/toolkit';
import { getRandomRecipe } from '../api/spoonacularAPI.js';
import { rando } from '../utils/util_randomNumber.js';


//? stuff to save in recipeList: { title, id, image, readyInMinutes, servings, vegan, vegetarian, extendedIngredients }
const initialState = {
  currentRecipe: [],
  recipeInstructions: [],
  recipeList: [],
  error: false,
  isLoading: false,
};

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    //* Reducers for Random Recipe
    getRandomRecipePending(state) {
      state.isLoading = true;
      state.error = false;
    },
    getRandomRecipeSuccess(state, action) {
      state.isLoading = false;
      state.currentRecipe = action.payload;
      console.log(state.currentRecipe);
    },
    getRandomRecipeFailed(state) {
      state.isLoading = false;
      state.error = true;
    },
    //* Get the current recipe instructions
    getRecipeInstructions(state) {
      state.isLoading = false;
      state.recipeInstructions = state.currentRecipe.analyzedInstructions[0].steps;
    },
    //* Add the currentRecipe to the recipeList
    addRecipeToList(state, action) {
      if (!action.payload.id) {
        return
      }
      const rId = state.recipeList.map(r => r.id);
      if (!rId.includes(action.payload.id)) {
        state.recipeList = [...state.recipeList, {
          title: action.payload.title,
          id: action.payload.id,
          image: action.payload.image,
          readyInMinutes: action.payload.readyInMinutes,
          servings: action.payload.servings,
          vegan: action.payload.vegan,
          vegetarian: action.payload.vegetarian,
          extendedIngredients: action.payload.extendedIngredients
        }];
        console.log('recipe is now saved')
        console.log(state.recipeList)
      }
      return
    },
    //* Remove the currentRecipe from the recipeList
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
  addRecipeToList,
  removeRecipeFromList
} = recipeSlice.actions

export default recipeSlice.reducer;

//* Selectors
export const selectRecipe = (state) => state.recipe.currentRecipe;
export const selectRecipeInstructions = (state) => state.recipe.recipeInstructions;
export const selectRecipeList = (state) => state.recipe.recipeList;

//* Async Thunks to fetch recipes 

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