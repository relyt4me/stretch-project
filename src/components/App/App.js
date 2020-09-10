import React from 'react';
import './App.css';
import Results from '../Results/Results';
import DrinkRecipe from '../DrinkRecipe/DrinkRecipe';
import { Route } from 'react-router-dom';

//change /drinkRecipe to /:drinkId when we start importing data from api

function App() {
  return (
    <div className='App'>
      <Route exact path='/drinkRecipe' render={() =>
        <DrinkRecipe />
      } />
      <Route exact path='/' render={() =>
        <Results />
      } />
    </div>
  )
}

export default App;
