import React, { useEffect } from "react";
import { fetchRandomRecipe, selectRecipe } from "../../store/recipeSlice";
import { useDispatch, useSelector } from 'react-redux';


const MealPlanner = () => {
  const dispatch = useDispatch();
  const recipe = useSelector(selectRecipe);

  useEffect(() => {
    dispatch(fetchRandomRecipe())
  }, [])

  const getRandomRecipeHandler = () => {
    dispatch(fetchRandomRecipe());
  }

  return (
    <div className="container">
      <div className="random-recipe-container">
        <button className="random-recipe" onClick={getRandomRecipeHandler}>
          Click me for a random Recipe
        </button>
      </div>

      <div className="recipe">
        <h3 className="title">
          {recipe.title}
        </h3>

        <img
          src={recipe.image}
          alt={recipe.title}
          width="300px"
        >
        </img>

        <p className="dishType">
          {recipe.dishTypes}

        </p>

        <button className="random-recipe">
          Check instructions
        </button>
      </div>
    </div >

  )
}

export default MealPlanner;