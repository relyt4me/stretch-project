import React from 'react';
import { DrinkRecipe, mapStateToProps, fetchRecipe, collectRecipe } from './DrinkRecipe';
import { screen, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { createDrinkRecipe, createError } from '../../actions/index.js';
jest.mock('../../helpers/apiCalls');
import { fetchDrinkRecipe } from '../../helpers/apiCalls';

describe('DrinkRecipe', () => {
  it('should render a recipe on the page when given an id', () => {
    const mockFetchRecipe = jest.fn();

    const mockDrinkRecipe = {
      id: '11007',
      name: 'Margarita',
      type: 'Alcoholic',
      glass: 'Cocktail glass',
      instructions: "Add alcohol. Drink it.",
      picture: "https://www.thecocktaildb.com",
      ingredients: ['Tequila', 'Triple sec', 'Lime juice', 'Salt'],
      ingredientAmounts: ['1 1/2 oz', '1/2 oz', '1 oz']
    };

    render (
      <MemoryRouter>
        <DrinkRecipe fetchRecipe={mockFetchRecipe} recipe={mockDrinkRecipe} />
      </MemoryRouter>
    )

    const drinkName = screen.getByText('Margarita');
    const drinkType = screen.getByText('Alcoholic');
    const drinkGlass = screen.getByText('Cocktail glass');
    const instructions = screen.getByText('Add alcohol');
    const drinkPic = screen.getByAltText('Glass of Margarita');
    const ingredient = screen.getByText('1 1/2 oz', {exact: false})

    expect(drinkName).toBeInTheDocument();
    expect(drinkType).toBeInTheDocument();
    expect(drinkGlass).toBeInTheDocument();
    expect(instructions).toBeInTheDocument();
    expect(drinkPic).toBeInTheDocument();
    expect(ingredient).toBeInTheDocument();
  })
  it('should display loading screen before recipe loads', () => {
    const mockFetchRecipe = jest.fn();

    render (
      <MemoryRouter>
        <DrinkRecipe fetchRecipe={mockFetchRecipe} recipe={{}} hasErrored={''}/>
      </MemoryRouter>
    )

    const message = screen.getByText('Loading...');

    expect(message).toBeInTheDocument();
  })
  it('should display an error message if no drink is retrieved', () => {
    const mockFetchRecipe = jest.fn();

    render (
      <MemoryRouter>
        <DrinkRecipe fetchRecipe={mockFetchRecipe} recipe={{}} hasErrored={"We're sorry, we couldn't find that recipe!"}/>
      </MemoryRouter>
    )

    const message = screen.getByText('We\'re sorry, we couldn\'t find that recipe!');

    expect(message).toBeInTheDocument();
  })
  it('should execute fetchRecipe when called with the right argument', () => {
    const mockFetchRecipe = jest.fn();

    const mockDrinkRecipe = {
      id: '11007',
      name: 'Margarita',
      type: 'Alcoholic',
      glass: 'Cocktail glass',
      instructions: "Add alcohol. Drink it.",
      picture: "https://www.thecocktaildb.com",
      ingredients: ['Tequila', 'Triple sec', 'Lime juice', 'Salt'],
      ingredientAmounts: ['1 1/2 oz', '1/2 oz', '1 oz']
    };

    render (
      <MemoryRouter>
        <DrinkRecipe fetchRecipe={mockFetchRecipe} recipe={mockDrinkRecipe} drinkId={'11007'}/>
      </MemoryRouter>
    )

    expect(mockFetchRecipe).toBeCalledTimes(1);
    expect(mockFetchRecipe).toBeCalledWith('11007');
  })
})

describe('mapStateToProps', () => {
  it('should only return the necessary information from the store', () => {
    const mockState = {
      drinkRecipe: {
        id: '11007',
        name: 'old fashioned',
        type: 'alcoholic',
        glass: 'tumbler',
        instructions: 'Pour alcohol in glass. Drink',
        picture: 'www.image.com',
        ingredients: ['whiskey', 'ice', 'bitters', null, null],
        ingredientAmounts: ['2 shots', '3 ice cubes', '1 teaspoon', null, null]
      },
      drinkId: '11007',
      drinksList: [{strDrink: 'old-fashioned', strDrinkThumb: 'www.image.com', idDrink: '11007'}],
      nonAlcoholicDrinks: [{strDrink: 'moscow mule', strDrinkThumb: 'www.image.com', idDrink: '11003'}],
      alcoholicDrinks: [{strDrink: 'margarita', strDrinkThumb: 'www.image.com', idDrink: '11002'}],
      errorMessage: ''
    }
    const expected = {
      drinkId: '11007',
      recipe: {
        id: '11007',
        name: 'old fashioned',
        type: 'alcoholic',
        glass: 'tumbler',
        instructions: 'Pour alcohol in glass. Drink',
        picture: 'www.image.com',
        ingredients: ['whiskey', 'ice', 'bitters', null, null],
        ingredientAmounts: ['2 shots', '3 ice cubes', '1 teaspoon', null, null]
      },
      hasErrored: ''
    }

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  })
})
