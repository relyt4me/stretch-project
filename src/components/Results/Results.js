import React from 'react';
import DrinkCard from '../DrinkCard/DrinkCard';
import './Results.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types'

const Results = (props) => {
  let resultsList = []
  if (props.drinksList.length > 0) {
    resultsList = props.drinksList.map(drink => {
      const alcoholContent = props.nonAlcoholicDrinks.find(alcDrink => {
        return alcDrink.idDrink === drink.idDrink
      });
      return (
        <Link to={`/recipe/${drink.idDrink}/${drink.strDrink}`} key={drink.idDrink}>
          <DrinkCard
            id={drink.idDrink}
            name={drink.strDrink}
            image={drink.strDrinkThumb}
            alcoholContent={alcoholContent}
          />
        </Link>
      )
    })
  } 

  return (
    <>
      {resultsList.length === 0 &&
        <p className='results-heading'>Sorry, we couldn't find any cocktails that match your search.</p>
      }
      {resultsList.length > 0 &&
      <>
      <h2 className='results-heading'>Your Cocktail Results</h2>
      <section className='Results' aria-label='cocktail results'>
        {resultsList.length > 0 &&
          resultsList
        }
      </section>
      </>
      }
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    drinksList: state.drinksList, 
    alcoholicDrinks: state.alcoholicDrinks, 
    nonAlcoholicDrinks: state.nonAlcoholicDrinks 
  }
}

Results.propTypes = {
  drinksList: propTypes.array,
  alcoholicDrinks: propTypes.array, 
  nonAlcoholicDrinks: propTypes.array
}

export default connect(mapStateToProps, null)(Results);
