import React from 'react';
import DrinkCard from './DrinkCard';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';

describe('Drink Card', () => {
  it('should display an image and cocktail name when rendered', () => {

    render(
        <BrowserRouter>
          <DrinkCard
            key={'1'}
            id={'1'}
            name='Margarita'
            image='http://margarita.com'
            alcoholContent={undefined}
          />
        </BrowserRouter>
    )

    const drinkName = screen.getByText('Margarita');
    const drinkImage = screen.getByTitle('Margarita')

    expect(drinkName).toBeInTheDocument();
    expect(drinkImage).toBeInTheDocument();
  });

  it('if drink is non-alcoholic, should display an image, cocktail name, and non-alcoholic tag when rendered', () => {

    const drink = {
      strDrink: 'Apple Pie Smoothie',
      strDrinkThumb: 'https://apple-pie-smoothie.com',
      idDrink: '45'
    }

    render(
        <BrowserRouter>
          <DrinkCard
            key={'45'}
            id={'45'}
            name='Apple Pie Smoothie'
            image='https://apple-pie-smoothie.com'
            alcoholContent={drink}
          />
        </BrowserRouter>
    )

    const drinkName = screen.getByText('Apple Pie Smoothie');
    const drinkImage = screen.getByTitle('Apple Pie Smoothie')
    const drinkTag = screen.getByText('Non alcoholic');

    expect(drinkName).toBeInTheDocument();
    expect(drinkImage).toBeInTheDocument(); 
    expect(drinkTag).toBeInTheDocument(); 
  });
})