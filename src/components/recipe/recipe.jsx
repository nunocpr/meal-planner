import React, {
  useState
} from "react";
import {
  useSelector
} from 'react-redux';
import {
  selectRecipe,
  selectRecipeInstructions,
} from "../../store/recipeSlice";


const Recipe = () => {
  const recipe = useSelector(selectRecipe),
    recipeInstructions = useSelector(selectRecipeInstructions),
    ingredients = recipe.extendedIngredients,
    [content, setContent] = useState('instructions');

  /* Button Click Handlers */
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
              <div
                className="ingredient-headings"
              >
                <h4 className="ingredient-name-heading">
                  Ingredients
                </h4>
                <h4 className="ingredient-amount-heading">
                  Amounts
                </h4>
              </div>

              {ingredients.map(ingredient =>
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

      <p className="recipe-time">
        How much time: {recipe.readyInMinutes} minutes
      </p>
      <p className="recipe-servings">
        Number of servings: {recipe.servings}
      </p>
      <p className="recipe-vegan">
        Vegan: {recipe.vegan ? 'Yes' : 'No'}
      </p>
      <p className="recipe-vegetarian">
        Vegetarian: {recipe.vegetarian ? 'Yes' : 'No'}
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
  )
}

export default Recipe;