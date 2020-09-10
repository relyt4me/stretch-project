import React from 'react';
import './DrinkCard.css'

const DrinkCard = ({id, name, image, alcoholContent}) => {
  return (
    <section className='DrinkCard'>
      <section className='cocktail-img' style={{ backgroundImage: `url(${image})` }} title={name} id={id}>
        {alcoholContent === 'Alcoholic' &&
          <section className='alcohol-tag alcoholic'>
            <p className='alcohol-info'>{alcoholContent}</p>
          </section>
        }
        {alcoholContent === 'Non alcoholic' &&
          <section className='alcohol-tag non-alcoholic'>
            <p className='alcohol-info'>{alcoholContent}</p>
          </section>
        }
      </section>
      <h4 className='cocktail-name'>{name}</h4>
    </section>
  )
}

export default DrinkCard