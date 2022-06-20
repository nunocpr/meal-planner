import React from "react";
import {
  useDispatch,
  useSelector
} from "react-redux";
import {
  selectRecipeList
} from "../../store/recipeSlice";

export const RecipeList = () => {
  const recipeList = useSelector(selectRecipeList);
  console.log(recipeList)
  return (
    recipeList.map(recipe =>
      <li key={recipe.id}>{recipe.title}</li>
    )
  )
}

export default RecipeList