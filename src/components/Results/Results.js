import React from 'react';
import DrinkCard from '../DrinkCard/DrinkCard';
import './Results.css'
import results from './testdata'

const Results = () => {
  const resultsList = results.map(result => {
    return (
      <DrinkCard 
        key={result.idDrink}
        id={result.idDrink}
        name={result.strDrink}
        image={result.strDrinkThumb}
        alcoholContent={result.strAlcoholic}
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
      <section className='Results'>
        {resultsList.length > 0 &&
          resultsList
        }
      </section>
      </>
      }
    </>
  )
}

export default Results