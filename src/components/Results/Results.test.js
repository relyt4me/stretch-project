import React from 'react';
import { Results, mapStateToProps } from './Results';
import { screen, render} from '@testing-library/react';
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom'

describe('Results component', () => {

  it('should display a message to perform a search on load', () => {
    
    render(
        <BrowserRouter>
          <Results 
            drinksList={null}
            alcoholicDrinks={[]}
            nonAlcoholicDrinks={[]}
          /> 
        </BrowserRouter>
    )

    const welcomeHeading = screen.getByText('Welcome to Fridge To Glass!');

    expect(welcomeHeading).toBeInTheDocument();
  }); 

  it('should display the correct amount of drink cards based on the results', () => {

    const mockDrinks = [
      {
        strDrink: 'Margarita',
        strDrinkThumb: 'https://margarita.com',
        idDrink: '1'
      }, 
      {
        strDrink: 'Whiskey Sour',
        strDrinkThumb: 'https://whiskey-sour.com',
        idDrink: '2'
      }
    ]

    render(
        <BrowserRouter>
          <Results 
            drinksList={mockDrinks}
            alcoholicDrinks={mockDrinks}
            nonAlcoholicDrinks={[]}
          />
        </BrowserRouter>
    )

    const recipeCard1Name = screen.getByText('Margarita');
    const recipeCard2Name = screen.getByText('Whiskey Sour');

    expect(recipeCard1Name).toBeInTheDocument(); 
    expect(recipeCard2Name).toBeInTheDocument(); 

  });

  it('should display an error message if there are no results to display', () => {

    render(
        <BrowserRouter>
          <Results drinksList={[]} />
        </BrowserRouter>
    )

    const noResults = screen.getByText('Sorry, we couldn\'t find any cocktails that match your search.');

    expect(noResults).toBeInTheDocument(); 
  });

  it('should display the error from the redux store if there is one', () => {

    render(
      <BrowserRouter>
        <Results 
          drinksList={[]} 
          errorMessage={'We\'re sorry we could not find that ingredient. Check that you have spelled the ingredient correctly or try a different search.'}
        />
      </BrowserRouter>
    )

    const noResults = screen.getByText('We\'re sorry we could not find that ingredient. Check that you have spelled the ingredient correctly or try a different search.');

    expect(noResults).toBeInTheDocument();
  });

  it('should only return the necessary info from the redux store', () => {

    const mockDrinks = [
      {
        strDrink: 'Margarita',
        strDrinkThumb: 'https://margarita.com',
        idDrink: '1'
      },
      {
        strDrink: 'Whiskey Sour',
        strDrinkThumb: 'https://whiskey-sour.com',
        idDrink: '2'
      }
    ]

    const mockState = {
      drinksList: mockDrinks,
      alcoholicDrinks: [],
      nonAlcoholicDrinks: [],
      drinkId: '',
      drinkRecipe: {},
      errorMessage: ''
    }

    const expected = {
      drinksList: mockDrinks,
      alcoholicDrinks: [],
      nonAlcoholicDrinks: [],
      errorMessage: ''
    }

    const props = mapStateToProps(mockState);
    expect(props).toEqual(expected)
  });
})
