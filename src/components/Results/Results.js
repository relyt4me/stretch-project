import React from 'react';
import DrinkCard from '../DrinkCard/DrinkCard';
import './Results.css'
import results from './testdata'

const Results = () => {
  console.log(results)
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
      <section>
        {resultsList.length > 0 &&
          resultsList
        }
        {resultsList.length === 0 &&
          <p>Sorry, we couldn't find any cocktails that match your search.</p>
        }
      </section>
  )
}

export default Results