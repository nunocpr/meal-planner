import React, { useRef } from "react";
import { getRecipeFromWeb } from '../../api/spoonacularAPI';
import { changeCurrentRecipe, getRecipeInstructions } from "../../store/recipeSlice";
import { useDispatch } from "react-redux";

const RecipeByURL = () => {

  const urlTextInput = useRef(null),
    dispatch = useDispatch();


  const submitE = async (e) => {
    e.preventDefault();
    const newRecipe = await getRecipeFromWeb(urlTextInput.current.value);
    dispatch(changeCurrentRecipe(newRecipe));
    dispatch(getRecipeInstructions());
    return newRecipe;
  }

  return (
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
  )

}

export default RecipeByURL;