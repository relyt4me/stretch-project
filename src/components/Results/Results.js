import React from 'react';
import DrinkCard from '../DrinkCard/DrinkCard';
import './Results.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types'


export const Results = (props) => {
  let resultsList;
  if (props.drinksList) {
    resultsList = props.drinksList.map(drink => {
      const alcoholContent = props.nonAlcoholicDrinks.find(nonAlcDrink => nonAlcDrink.idDrink === drink.idDrink);
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
      {!resultsList && !props.errorMessage && 
        <>
          <h2 className='results-heading'>Welcome to Fridge To Glass!</h2>
          <p className='welcome-msg'>Please type an ingredient in the search bar above, select your alcohol preference, and click <span className='bold italic'>Find Drinks</span> to see a list of cocktails with that ingredient.<br></br><br></br><span className='bold'>Happy bartending!</span></p>
        </>
      }
      {props.errorMessage &&
        <h2 className='welcome-msg'>{props.errorMessage}</h2>
      }

      {!props.errorMessage && resultsList && resultsList.length === 0 && 
        <h2 className='welcome-msg'>Sorry, we couldn't find any cocktails that match your search.</h2>
      }
      {resultsList && resultsList.length > 0 &&
        <>
          <h2 className='results-heading'>Your Cocktail Results</h2>
          <section className='Results' aria-label='cocktail results'>
              { resultsList }
          </section>
        </>
      }
    </>
  )
}

export const mapStateToProps = (state) => {
  return {
    drinksList: state.drinksList, 
    alcoholicDrinks: state.alcoholicDrinks, 
    nonAlcoholicDrinks: state.nonAlcoholicDrinks,
    errorMessage: state.errorMessage
  }
}

Results.propTypes = {
  drinksList: propTypes.array,
  alcoholicDrinks: propTypes.array, 
  nonAlcoholicDrinks: propTypes.array
}

export default connect(mapStateToProps, null)(Results);
