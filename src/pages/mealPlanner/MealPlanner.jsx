import React from "react";
import Recipe from '../../features/recipe/recipe';
import RecipeByURL from "../../features/recipe/recipeByURL";
import RecipeRandom from "../../features/recipe/recipeRandom";

const MealPlanner = () => {
  return (
    <div className="main-container">
      <RecipeRandom />

      <Recipe />

      <RecipeByURL />

    </div >
  )
}

export default MealPlanner;