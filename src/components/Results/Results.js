import React from 'react';
import DrinkCard from '../DrinkCard/DrinkCard';
import './Results.css';
import { connect } from 'react-redux';
// import results from './testdata'

const Results = (props) => {
  const resultsList = props.drinksList.map(drink => {
    //wrap each card below in a link
    return (
      <DrinkCard
        key={drink.idDrink}
        id={drink.idDrink}
        name={drink.strDrink}
        image={drink.strDrinkThumb}
        alcoholContent={drink.strAlcoholic}
      />
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
      {/* /May need onClick handler for results section to analyze the drink selected if need to update props accordingly */}
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
    drinksList: state.drinksListReducer
  }
}

// const mapDispatchToProps = (dispatch) => {
//
// }

export default connect(mapStateToProps, null)(Results);
