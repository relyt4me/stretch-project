import React from 'react';
import DrinkCard from '../DrinkCard/DrinkCard';
import './Results.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import results from './testdata'

const Results = (props) => {
  const resultsList = props.drinksList.map(drink => {
    return (
      <Link exact to={`/recipe/${drink.name}`}>
        <DrinkCard
          key={drink.idDrink}
          id={drink.idDrink}
          name={drink.strDrink}
          image={drink.strDrinkThumb}
        />
      </Link>
    )
  })

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
    drinksList: state.drinksList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, null)(Results);
