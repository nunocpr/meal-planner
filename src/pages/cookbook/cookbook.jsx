import React from "react";
import RecipeList from "../../features/recipe/recipeList";
import Recipe from '../../features/recipe/recipe';

export const Cookbook = () => {

  return (
    <div className="main-container">
      <h1>
        Cookbook
      </h1>
      <RecipeList />
    </div>
  )
}

export default Cookbook;