import React from 'react';
import MealPlanner from './components/mealPlanner/MealPlanner';
import Header from './components/header/Header';
import './css/app.css';
import RecipeList from './components/recipeList/recipeList';


const App = () =>
  <div className="App">

    <Header />

    <MealPlanner />

    <RecipeList />
  </div>

export default App;