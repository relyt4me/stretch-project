import React from 'react';
import { DrinkRecipe, collectRecipe } from './DrinkRecipe';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import  configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { createDrinkRecipe } from '../../actions/index.js'
jest.mock('../../helpers/apiCalls');
import { fetchDrinkRecipe } from '../../helpers/apiCalls';

describe('DrinkRecipe', () => {
  it('should display a drink\'s information upon fetching data', async () => {
    // const mockRecipe = {
    //   id: '12',
    //   name: 'old fashioned',
    //   type: 'alcoholic',
    //   glass: 'tumbler',
    //   instructions: 'do stuff. drink it.',
    //   picture: 'www.stuff.com',
    //   ingredients: ['rum', 'bitters', 'ice'],
    //   ingredientAmounts: ['lots', '1 tsp', '2']
    // }

    const middleware = [thunk]
    const mockStore = configureMockStore(middleware? Array) => mockStore: Function;

    const store = mockStore(getState? Object,Function) => store: Function;

    return store.dispatch(collectRecipe(11007))
      .then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual(createDrinkRecipe())
      })

    // const button = screen.getByRole('button', {name: 'Back'});
    // const drinkImg = screen.getByAltText('image of drink');
    // const drinkName = screen.getByText('Rum Old-fashioned');
    // const drinkType = screen.getByText('Alcoholic');
    // const glassType = screen.getByText('Old-fashioned glass');
    // const ingredientsTitle = screen.getByText('Ingredients');
    // const firstIngredient = screen.getByText('1 1/2 oz Light rum');
    // const instructionsTitle = screen.getByText('Instructions');
    // const firstStep = screen.getByText('Stir powdered sugar, water, and bitters in an old-fashioned glass')
    //
    // expect(button).toBeInTheDocument();
    // expect(drinkImg).toBeInTheDocument();
    // expect(drinkName).toBeInTheDocument();
    // expect(drinkType).toBeInTheDocument();
    // expect(glassType).toBeInTheDocument();
    // expect(ingredientsTitle).toBeInTheDocument();
    // expect(firstIngredient).toBeInTheDocument();
    // expect(instructionsTitle).toBeInTheDocument();
    // expect(firstStep).toBeInTheDocument();
  })
//   it('should call fetchRecipe on page load', () => {
//
//   })
//   it('should retrieve data for a recipe given ID', () => {
//
//   })
//   it('should call displayIngredients on fetch resolving', () => {
//
//   })
//   it('should call displayInstructions on fetch resolving', () => {
//
//   })
//   it('should display loading on screen while waiting/if there is an error', () => {
//
//   })
})
//
// describe('mapDispatchToProps', () => {
//   it('calls dispatch with a collectRecipe action when fetchRecipe is called', () => {
//
//   })
//   it('calls dispatch with an errorCreator action when errorHanlder is called', () => {
//
//   })
// })
//
// describe('mapStateToProps', () => {
//   it('should only return the necessary information from the store', () => {
//
//   })
// })
//
// describe('collectRecipe', () => {
//   it('should fetch a recipe from the api', () => {
//
//   })
// })
//
// describe('fixRecipeData', () => {
//   it('should convert data passed in into a new object', () => {
//
//   })
// })
