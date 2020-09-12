import React, { Component } from 'react';
//import drinkData from './drinkData.js'
import propTypes from 'prop-types';
import './DrinkRecipe.css';
import { Link } from 'react-router-dom';

class DrinkRecipe extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchRecipe(this.props.id)
  }

  render() {
    let instructions = drinkData[0].strInstructions.split('. ');
    return (
      <section className='drink-recipe'>
        <Link exact to='/'>Back</Link>
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
}

const fetchRecipe = (id) => {
  return (dispatch) => {
    fetchDrinkRecipe(id)
      .then((recipe) => {

      })
      .catch((error) => {
        dispatch(createError("We're sorry, we couldn\'t find that recipe!"));
      });
  };
};

export default DrinkRecipe;
