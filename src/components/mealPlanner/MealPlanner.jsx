import React, { useEffect, useState } from "react";
import { fetchRandomRecipe, selectRecipe, selectRecipeInstructions } from "../../store/recipeSlice";
import { useDispatch, useSelector } from 'react-redux';


const MealPlanner = () => {
  const dispatch = useDispatch();
  const recipe = useSelector(selectRecipe);
  const recipeInstructions = useSelector(selectRecipeInstructions);
  const ingredients = recipe.extendedIngredients;
  const [content, setContent] = useState('instructions');
  console.log(recipe)
  console.log(recipeInstructions)


  useEffect(() => {
    dispatch(fetchRandomRecipe())
  }, [])

  /* Button Click Handlers */
  const getRandomRecipeHandler = () => {
    dispatch(fetchRandomRecipe());
  }

  const toggleRenderContent = (e) => {
    setContent(e.target.className);
  }

  /* Render Recipe Content */

  const renderContent = () => {

    /* Recipe Instruction list */
    if (content === 'instructions') {
      return (
        <div className={content}>
          <ol className="instructions-list">
            {recipeInstructions.map(steps =>
              <li
                className="instructions-step"
                key={steps.number}
              >
                {steps.step}
              </li>)
            }
          </ol>
        </div>
      )
    }
    /* Recipe Ingredients list */

    if (content === 'ingredients') {
      return (
        <div className={content}>
          {
            <ul className="ingredients-list">
              <div className="ingredient-headings">
                <h4 className="ingredient-name-heading">
                  Ingredients
                </h4>
                <h4 className="ingredient-amount-heading">
                  Amounts
                </h4>
              </div>

              {ingredients.map(ingredient =>
                <>
                  <li
                    className="ingredients-unit"
                    key={ingredient.id}
                  >
                    <div className="ingredient-name">
                      {ingredient.nameClean}
                    </div>
                    <div className="ingredient-amount">
                      {ingredient.measures.metric.amount} {ingredient.measures.metric.unitShort}
                    </div>
                  </li>
                </>
              )}
            </ul>
          }
        </div >
      )
    } else {
      return
    }
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

        <div className="recipe-info">
          <div className="recipe-info-selectors">
            <button className="instructions" onClick={toggleRenderContent}>
              Instructions
            </button>
            <button className="ingredients" onClick={toggleRenderContent}>
              Ingredients
            </button>
          </div>

          <div className="recipe-info-content">
            {renderContent()}
          </div>

        </div>
      </div>
    </div >

  )
}

export default MealPlanner;