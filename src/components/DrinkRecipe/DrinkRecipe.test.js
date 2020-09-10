import React from 'react';
import DrinkRecipe from './DrinkRecipe';
import drinkData from './drinkData.js';
import { screen, render } from '@testing-library/react';
// import '@testing-library/jest-dom';
import drinkData from './drinkData.js';

describe('DrinkRecipe', () => {
  it('should display a drink\'s information', () => {
    render(<DrinkRecipe drinkData={drinkData}/>);

    //display back, image, name, alocholic/not, glass, ingredients (header also), instructions (header also)
    const drinkImg = screen.getByAltText('image of drink');
    const drinkName = screen.getByText('Rum Old-fashioned');
    const drinkType = screen.getByText('Alcoholic');
    const glassType = screen.getByText('Old-fashioned glass');
    const ingredientsTitle = screen.getByText('Ingredients');
    const firstIngredient = screen.getByText('1 1/2 oz Light rum');
    const instructionsTitle = screen.getByText('Instructions');
    const firstStep = screen.getByText('Stir powdered sugar, water, and bitters in an old-fashioned glass')

    expect(button).toBeInTheDocument();
    expect(drinkImg).toBeInTheDocument();
    expect(drinkName).toBeInTheDocument();
    expect(drinkType).toBeInTheDocument();
    expect(glassType).toBeInTheDocument();
    expect(ingredientsTitle).toBeInTheDocument();
    expect(firstIngredient).toBeInTheDocument();
    expect(instructionsTitle).toBeInTheDocument();
    expect(firstStep).toBeInTheDocument();
  })
  // it('should return to home page on clicking back button', () => {
  //   render(<DrinkRecipe />);
  //
  //   //mock what happens on clicking back button
  //   const
  // });
})
