import React from 'react';
import Results from '../Results/Results'
import './App.css';
import DrinkRecipe from '../DrinkRecipe/DrinkRecipe';
import drinkData from '../DrinkRecipe/drinkData.js';
import { Route } from 'react-router-dom';

//change /drinkRecipe to /:drinkId when we start importing data from api

function App() {
  return (
    <div className='App'>
      <Route exact path='/drinkRecipe' render={() =>
        <DrinkRecipe drinkData={drinkData}/>
      } />
      <Route exact path='/' render={() =>
        <Results />
      } />
    </div>
  )
}

export default App;
