import React from 'react';
import drinkData from './drinkData.js'
import propTypes from 'prop-types';
import './DrinkRecipe.css';
import { Link } from 'react-router-dom';

//will need to format ingredients & their amounts into arrays after data has been retrieved and before data has been added to state

const DrinkRecipe = () => {
  let instructions = drinkData[0].strInstructions.split('. ');
  return (
    <section className='drink-recipe'>
      <Link to={'/'}>Back</Link>
      <img src={drinkData[0].strDrinkThumb} className='drink-image' alt='image of drink'/>
      <article className='drink-info'>
        <div className='drink-title'>
          <p className='drink-name'>{drinkData[0].strDrink}</p>
          <h3>{drinkData[0].strAlcoholic}</h3>
          <h4>{drinkData[0].strGlass}</h4>
        </div>
        <div className='ingredients'>
          <h2 className='ingredients-title'>Ingredients</h2>
          <ul>
            {
              drinkData[0].ingredients.filter(ingredient => {
                if(ingredient != null) {
                  console.log(drinkData[0].strMeasure1)
                  return ingredient;
                }
              }).map((ingredient, index) => {
                return (
                  <li>{drinkData[0].ingredientAmounts[index]}{ingredient}</li>
                )
              })
            }
        </ul>
        </div>
        <div className='instructions'>
          <h2 className='instructions-title'>Instructions</h2>
          <ol>
            {
              instructions.map(instruction => {
                return (
                  <li>{instruction}</li>
                )
              })
            }
          </ol>
        </div>
      </article>
    </section>
  )
}

export default DrinkRecipe;
