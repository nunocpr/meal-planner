import React, {
  useEffect,
  useRef
} from "react";
import { useDispatch } from 'react-redux';
import { getRecipeFromWeb } from '../../api/spoonacularAPI';
import { fetchRandomRecipe } from "../../store/recipeSlice";
import Recipe from '../recipe/recipe';

const MealPlanner = () => {
  const dispatch = useDispatch(),
    urlTextInput = useRef(null);

  useEffect(() => {
    dispatch(fetchRandomRecipe())
  }, [])

  /* Button Click Handlers */
  const getRandomRecipeHandler = () => {
    dispatch(fetchRandomRecipe());
  }

  const submitE = (e) => {
    e.preventDefault();
    getRecipeFromWeb(urlTextInput.current.value)
  }

  return (
    <div className="main-container">
      <div className="random-recipe-button-container">
        <button className="random-recipe-button" onClick={getRandomRecipeHandler}>
          Click me for a random Recipe
        </button>
      </div>

      <Recipe />

      <form className="url-selector" onSubmit={submitE}>
        <h3>Please enter a link to a recipe</h3>
        <input
          type="text"
          placeholder="URL"
          ref={urlTextInput}
          required
        />
        <button type="submit">Search Recipe</button>
      </form>
    </div >

  )
}

export default MealPlanner;