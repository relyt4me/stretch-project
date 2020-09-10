import React from 'react';
import Results from './Results';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom'
// import { BrowserRouter } from 'react-router-dom';

describe('Results component', () => {
  it('should display a list of drink results when rendered', () => {
    
    render(
      <Results /> 
    )

    const resultsHeading = screen.getByRole('heading', {name: 'Your Cocktail Results'});
    const resultsSection = screen.getByLabelText('cocktail results');

    expect(resultsHeading).toBeInTheDocument();
    expect(resultsSection).toBeInTheDocument(); 
  });

  it('should display the correct amount of drink cards based on the results', () => {
    // mock out resolved value of results array to have 2 objects with the drink names of what is indicated in the test below

    render(
      <Results />
    )

    const recipeCard1Name = screen.getByText('3-Mile Long Island Iced Tea');
    const recipeCard2Name = screen.getByText('Ace');

    expect(recipeCard1Name).toBeInTheDocument(); 
    expect(recipeCard2Name).toBeInTheDocument(); 

  });

  it('should display an error message if there are no results to display', () => {

    //mock out resolved value of results array to be empty

    // render(
    //   <Results />
    // )

    // const noResults = screen.getByText('Sorry, we couldn\'t find any cocktails that match your search.');

    // expect(noResults).toBeInTheDocument(); 
  })
})