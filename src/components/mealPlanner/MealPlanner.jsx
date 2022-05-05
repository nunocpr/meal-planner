import React, {
  useEffect
} from "react";
import { useDispatch } from 'react-redux';
import { fetchRandomRecipe } from "../../store/recipeSlice";
import Recipe from '../recipe/recipe';
import RecipeByURL from "../recipe/recipeByURL";

const MealPlanner = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRandomRecipe())
  }, [])

  /* Button Click Handlers */
  const getRandomRecipeHandler = () => {
    dispatch(fetchRandomRecipe());
  }

  return (
    <div className="main-container">
      <div className="random-recipe-button-c-ontainer">
        <button className="random-recipe-button" onClick={getRandomRecipeHandler}>
          Click me for a random Recipe
        </button>
      </div>

      <Recipe />

      <RecipeByURL />

    </div >
  )
}

export default MealPlanner;