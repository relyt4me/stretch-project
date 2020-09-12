import React from 'react';
import './DrinkCard.css'

const DrinkCard = ({id, name, image, alcoholContent}) => {
  return (
    <section className='DrinkCard'>
      <section className='cocktail-img' style={{ backgroundImage: `url(${image})` }} title={name} id={id}>
        {alcoholContent &&
          <section className='alcohol-tag'>
            <p className='alcohol-info'>Non alcoholic</p>
          </section>
        }
      </section>
      <h4 className='cocktail-name'>{name}</h4>
    </section>
  )
}

export default DrinkCard