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
import { BsHeart, BsHeartFill } from 'react-icons/bs'

/* 
----------------------------
 
TO DOs:
 
1. Css, styling and animation

----------------------------
*/


const Recipe = () => {
  const recipe = useSelector(selectRecipe),
    recipeInstructions = useSelector(selectRecipeInstructions),
    ingredients = recipe.extendedIngredients,
    [content, setContent] = useState('instructions'),
    [saved, setSaved] = useState(false);


  /* Button Click Handlers */
  const toggleRenderContent = (e) => {
    setContent(e.target.className);
  }

  const toggleSaveRecipe = () => {
    if (Object.keys(localStorage).includes(JSON.stringify(recipe.id))) {
      localStorage.removeItem(JSON.stringify(recipe.id))
      setSaved(false);
    } else {
      localStorage.setItem(recipe.id, JSON.stringify(recipe));
      setSaved(true);
    }
  }

  /* Render Recipe Content */
  const renderRecipeContent = () => {
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
      return 'Please select another Recipe';
    }
  }

  const renderSaveRecipe = () => {
    if (!saved) {
      return (
        <button onClick={toggleSaveRecipe}>
          Save this Recipe
          <BsHeart />
        </button>
      )
    } else {
      return (
        <button onClick={toggleSaveRecipe}>
          Remove this Recipe
          <BsHeartFill />
        </button>
      )
    }
  }

  return (
    <div className="recipe">
      <h3 className="title">
        {recipe.title}
      </h3>
      <div className="save">
        {renderSaveRecipe()}
      </div>
      <br />

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
          {renderRecipeContent()}
        </div>

      </div>
    </div>
  )
}

export default Recipe;