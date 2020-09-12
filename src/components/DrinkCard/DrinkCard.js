import React from 'react';
import './DrinkCard.css'
import propTypes from 'prop-types'

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

DrinkCard.propTypes = {
  id: propTypes.string,
  name: propTypes.string,
  image: propTypes.string,
  alcoholContent: propTypes.object
}

export default DrinkCard