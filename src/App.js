import React from 'react';
import MealPlanner from './components/mealPlanner/MealPlanner';
import Header from './components/header/Header';
import './css/app.css';


const App = () =>
  <div className="App">

    <Header />

    <MealPlanner />

    <div>
      Add a recipe
    </div>

    <div>
      Check your recipes
    </div>

  </div>

export default App;