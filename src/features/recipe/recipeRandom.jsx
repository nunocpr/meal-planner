import React, {
  useEffect
} from "react";
import { useDispatch } from 'react-redux';
import { fetchRandomRecipe } from "../../store/recipeSlice";

const RecipeRandom = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRandomRecipe())
  }, [])

  /* Button Click Handlers */
  const getRandomRecipeHandler = () => {
    dispatch(fetchRandomRecipe());
  }

  return (
    <div className="random-recipe-button-container">
      <button className="random-recipe-button" onClick={getRandomRecipeHandler}>
        Click me for a random Recipe
      </button>
    </div>
  )
}

export default RecipeRandom;