import React from 'react';
import Results from './Results';
import { screen, render} from '@testing-library/react';
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers/index';

describe('Results component', () => {

  it('should display a message to perform a search on load', () => {
    const store = createStore(rootReducer);
    
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Results /> 
        </BrowserRouter>
      </Provider>
    )

    const resultsHeading = screen.getByText('Sorry, we couldn\'t find any cocktails that match your search.');

    expect(resultsHeading).toBeInTheDocument();
  });


  //MAY NEED TO MOVE THIS TO APP INTEGRATION TESTS SINCE SEARCH NEEDS TO BE PERFORMED IN ORDER TO SEE RESULTS CARDS OR ERROR MSG
  // it('should display the correct amount of drink cards based on the results', () => {
  //   // mock out resolved value of results array to have 2 objects with the drink names of what is indicated in the test below

  //   const drinks = [
  //     {
  //       strDrink: 'Margarita',
  //       strDrinkThumb: 'https://margarita.com',
  //       idDrink: '1'
  //     }, 
  //     {
  //       strDrink: 'Whiskey Sour',
  //       strDrinkThumb: 'https://whiskey-sour.com',
  //       idDrink: '2'
  //     }
  //   ]

  //   const store = createStore(rootReducer);

  //   render(
  //     <Provider store={store}>
  //       <BrowserRouter>
  //         <Results drinksList={drinks} />
  //       </BrowserRouter>
  //     </Provider>
  //   )

  //   const recipeCard1Name = screen.getByText('Margarita');
  //   const recipeCard2Name = screen.getByText('Whiskey Sour');

  //   expect(recipeCard1Name).toBeInTheDocument(); 
  //   expect(recipeCard2Name).toBeInTheDocument(); 

  // });

  // it('should display an error message if there are no results to display', () => {

  //   //mock out resolved value of results array to be empty
  //   const store = createStore(rootReducer);

  //   render(
  //     <Provider store={store}>
  //       <BrowserRouter>
  //         <Results drinksList={[]} />
  //       </BrowserRouter>
  //     </Provider>
  //   )

  //   const noResults = screen.getByText('Sorry, we couldn\'t find any cocktails that match your search.');

  //   expect(noResults).toBeInTheDocument(); 
  // })
})