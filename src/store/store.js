import { configureStore, combineReducers } from '@reduxjs/toolkit';
import calendarSliceReducer from './calendarSlice';
import recipeSliceReducer from './recipeSlice';

export default configureStore({
  reducer: combineReducers({
    calendar: calendarSliceReducer,
    recipe: recipeSliceReducer
  }),
});
