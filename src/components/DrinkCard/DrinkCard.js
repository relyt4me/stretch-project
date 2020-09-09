import React from 'react';
import './DrinkCard.css'

const DrinkCard = ({id, name, image, alcoholContent}) => {
  return (
    <section style={{backgroundImage: `url(${image})`}}>
      <p>{alcoholContent}</p>
      <h3>{name}</h3>
    </section>
  )
}

export default DrinkCard