import { configureStore, combineReducers } from '@reduxjs/toolkit';
import calendarSliceReducer from './calendarSlice';
import recipeSliceReducer from './recipeSlice';


/* Create a slice for recipe gathering */


export default configureStore({
  reducer: combineReducers({
    calendar: calendarSliceReducer,
    recipe: recipeSliceReducer
  }),
});
