import React from 'react';
import DrinkCard from './DrinkCard';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom'
// import { BrowserRouter } from 'react-router-dom';

describe('Drink Card', () => {
  it('should display an image, name, and alcohol status when rendered', () => {

    render(
      <DrinkCard
        key={1}
        id={1}
        name='Margarita'
        image='http://margarita.com'
        alcoholContent={'Alcoholic'}
      />
    )

    const drinkName = screen.getByText('Margarita');
    const drinkImage = screen.getByTitle('Margarita')

    expect(drinkName).toBeInTheDocument(); 
    expect(drinkImage).toBeInTheDocument(); 
  });
})