import React from 'react';
import DrinkCard from '../DrinkCard/DrinkCard';
import './Results.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { addRecipeId } from '../../actions';

const Results = (props) => {
  const resultsList = props.drinksList.map(drink => {
    return (
      <Link exact to={`/recipe/${drink.idDrink}/${drink.strDrink}`}>
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     collectId: (id) => dispatch(addRecipeId(id)),
//   }
// }

export default connect(mapStateToProps, null)(Results);
