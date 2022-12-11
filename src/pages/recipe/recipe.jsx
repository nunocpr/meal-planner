import React, { useState } from "react";
import {
  AiOutlinePlusCircle,
  AiOutlineEdit,
  AiOutlineMinusCircle
} from "react-icons/ai";


// EACH RECIPE COMPOSITION:
/*******
**
** title
** id
** image (optional -> must have a default image)
** readyInMinutes
** servings
** vegan
** vegetarian
** extendedIngredients
**
*******/


export const Recipe = () => {

  // temp state (for step instruction + ingredients)
  const [ingredients, setIngredients] = useState([]),
    [instructions, setInstructions] = useState([]),
    [newIngredientQuantity, setNewIngredientQuantity] = useState(''),
    [newIngredientName, setNewIngredientName] = useState(''),
    [newInstruction, setNewInstruction] = useState('');

  // Add Ingredient
  const addIngredient = () => {
    if (newIngredientQuantity && newIngredientName) {
      let newEntry = { "quantity": newIngredientQuantity, "name": newIngredientName }
      setIngredients([...ingredients, newEntry]);
      setNewIngredientName('');
      setNewIngredientQuantity('');
    }
  }

  // Add Instruction
  const addInstruction = () => {
    if (newInstruction) {
      let id = instructions.length + 1;
      let newEntry = { "step": id, "description": newInstruction };
      setInstructions([...instructions, newEntry]);
      setNewInstruction('');
    }
  }

  // Edit Ingredient / Instruction



  // Remove Ingredient / Instruction


  return (
    <div className="main-container">
      <h1>
        Recipe
      </h1>

      <h4>Create your own recipe below: </h4>

      <form method="POST" action="#">
        {/* TITLE */}
        <div className="input-group">
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" id="title"></input>
        </div>
        <br />
        {/* RECIPE TIME */}
        <div className="input-group">
          <label htmlFor="time">Time: </label>
          <input type="text" name="time" id="time"></input>
        </div>
        <br />
        {/* RECIPE SERVINGS */}
        <div className="input-group">
          <label htmlFor="servings">Servings: </label>
          <input type="text" name="servings" id="servings"></input>
        </div>
        <br />
        {/* VEGAN? */}
        <div className="input-group-checkbox">
          <label htmlFor="vegan">Vegan: </label>
          <input type="checkbox" name="vegan" id="vegan"></input>
        </div>
        <br />
        {/* VEGETARIAN? */}
        <div className="input-group-checkbox">
          <label htmlFor="vegetarian">Vegetarian: </label>
          <input type="checkbox" name="vegetarian" id="vegetarian" />
        </div>
        <br />
        <hr className="line" />
        <p><b><u>Recipe Ingredients</u></b></p>
        {/* INGREDIENTS LIST */}
        <div className="list-group">
          <ul className={ingredients.length < 1 ? 'ingredient-list hidden' : 'ingredient-list'}>
            {ingredients.map((i, index) => {
              return (
                <li key={index} className="ingredient-item">
                  {i.quantity} {i.name}
                  <div className="item-btn-group">
                    <button type="button">
                      <AiOutlineEdit className="btn-edit" color="#737b56b7" size={20} />
                    </button>
                    <button type="button" >
                      <AiOutlineMinusCircle color="#737b56b7" size={20} />
                    </button>
                  </div>
                </li>
              )
            })}
          </ul>
          {/* INPUT INGREDIENT QUANTITY */}
          <div className="input-group-ingredients">
            <label htmlFor="ingredientQuantity">Quantity: </label>
            <input
              type="number"
              value={newIngredientQuantity}
              onChange={(e) => setNewIngredientQuantity(e.target.value)}
              name="ingredientQuantity"
              id="ingredientQuantity"
              placeholder="1"
            />
            <br />
            {/* INPUT INGREDIENT NAME */}
            <label htmlFor="ingredientName">Name: </label>
            <input
              type="text"
              value={newIngredientName}
              onChange={(e) => setNewIngredientName(e.target.value)}
              name="ingredientName"
              id="ingredientName"
              placeholder="tablespoon of wheat"
            />
            <button type="button" className="btn-add" onClick={() => addIngredient()}>
              <AiOutlinePlusCircle color="#737B56" size={30} />
            </button>
          </div>
        </div>
        <hr className="line" />
        <p><b><u>Recipe Instructions</u></b></p>
        {/* INSTRUCTIONS LIST */}
        <div className="list-group">
          <ol className={instructions.length < 1 ? 'instruction-list hidden' : 'instruction-list'}>
            {instructions.map((i) => {
              return (
                <li
                  className="instruction-item"
                  key={i.step}
                >
                  {i.step}. {i.description}
                  <div className="item-btn-group">
                    <button type="button" className="btn-edit">
                      <AiOutlineEdit color="#737b56b7" size={20} />
                    </button>
                    <button type="button">
                      <AiOutlineMinusCircle color="#737b56b7" size={20} />
                    </button>
                  </div>
                </li>
              )
            })}
          </ol>
          <div className="input-group">
            {/* INPUT INSTRUCTION */}
            <input
              type="text"
              value={newInstruction}
              onChange={(e) => setNewInstruction(e.target.value)}
              name="instructions"
              id="instructions"
              placeholder="Add the recipe instructions here"
            />
            <button type="button" className="btn-add" onClick={() => addInstruction()}>
              <AiOutlinePlusCircle color="#737B56" size={30} />
            </button>
          </div>
        </div>
        <br />
        <br />
        <input className="btn-submit" type="submit" value="Submit Recipe" />
      </form >
    </div >
  )
}

export default Recipe;