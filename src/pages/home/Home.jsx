import React from "react";
import { Link } from "react-router-dom";
import Recipe from '../../features/recipe/recipe';
import RecipeRandom from "../../features/recipe/recipeRandom";

const Home = () => {
  return (
    <div className="main-container">
      <h1 className="title">Plan Sooper Delicious Meals</h1>
      <section className="call-to-action">

        <Link to='/calendar'>
          <div className="card meal"><span>Check your Meal Plan</span></div>
        </Link>

        <Link to='/recipe'>
          <div className="card create-recipe"><span>Create a Recipe</span></div>
        </Link>

        <Link to='/cookbook'>
          <div className="card add-recipe"><span>Add a Recipe</span></div>
        </Link>

      </section>
      <RecipeRandom />
      <Recipe />
    </div >
  )
}

export default Home;