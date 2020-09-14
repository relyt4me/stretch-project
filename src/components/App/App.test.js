import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers/index.js';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { fetchDrinks, fetchDrinkByIngredient, fetchDrinkRecipe, fetchRandomDrink } from '../../helpers/apiCalls';
jest.mock('../../helpers/apiCalls');

describe('App', () => {
  let store;

  beforeEach(() => {
    store = createStore(rootReducer, applyMiddleware(thunk));
  });

  it('Should display app on page load', async () => {
    fetchDrinks.mockResolvedValue({});

    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );

    const headerTitle = await waitFor(() => screen.getByRole('heading', { name: 'Fridge to Glass' }));
    const searchLabel = screen.getByText('What do you have?');
    const welcomeHeading = screen.getByText('Welcome to Fridge To Glass!');

    expect(headerTitle).toBeInTheDocument();
    expect(searchLabel).toBeInTheDocument();
    expect(welcomeHeading).toBeInTheDocument();
  });

  it('Should show a list of search results based on a search', async () => {
    fetchDrinks.mockResolvedValue({});
    const foundGinDrinks = {
      drinks: [
        { strDrink: 'Drink1NA', idDrink: '1', strDrinkThumb: 'linkFor1' },
        { strDrink: 'Drink2A', idDrink: '2', strDrinkThumb: 'linkFor2' },
        { strDrink: 'Drink3A', idDrink: '3', strDrinkThumb: 'linkFor3' },
        { strDrink: 'Drink4A', idDrink: '4', strDrinkThumb: 'linkFor4' },
      ],
    };
    fetchDrinkByIngredient.mockResolvedValueOnce(foundGinDrinks);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );

    const preferenceBoth = await waitFor(() => screen.getByRole('radio', { name: 'Both' }));
    const searchBox = screen.getByPlaceholderText('Vodka');
    const findButton = screen.getByRole('button', { name: 'Find' });

    fireEvent.change(searchBox, { target: { value: 'Gin' } });
    fireEvent.click(preferenceBoth);
    fireEvent.click(findButton);

    const drink1Image = await waitFor(() => screen.getByTitle('Drink1NA'));
    const drink2Name = screen.getByText('Drink2A');
    const drink3Image = screen.getByTitle('Drink3A');
    const drink4Name = screen.getByText('Drink4A');

    expect(drink1Image).toBeInTheDocument();
    expect(drink2Name).toBeInTheDocument();
    expect(drink3Image).toBeInTheDocument();
    expect(drink4Name).toBeInTheDocument();
  });

  // it('Should show an error message if there is no matching search', () => {
  //    fetchDrinks.mockResolvedValue({});
  //   const foundNothing = null;
  //   fetchDrinkByIngredient.mockResolvedValueOnce(foundGinDrinks);

  //   render(
  //     <Provider store={store}>
  //       <MemoryRouter>
  //         <App />
  //       </MemoryRouter>
  //     </Provider>
  //   );

  //   const preferenceBoth = await waitFor(() => screen.getByRole('radio', { name: 'Both' }));
  //   const searchBox = screen.getByPlaceholderText('Vodka');
  //   const findButton = screen.getByRole('button', { name: 'Find' });

  //   fireEvent.change(searchBox, { target: { value: 'Gin' } });
  //   fireEvent.click(preferenceBoth);
  //   fireEvent.click(findButton);

  //   const drink1Image = await waitFor(() => screen.getByTitle('Drink1NA'));
  //   const drink2Name = screen.getByText('Drink2A');
  //   const drink3Image = screen.getByTitle('Drink3A');
  //   const drink4Name = screen.getByText('Drink4A');

  //   expect(drink1Image).toBeInTheDocument();
  //   expect(drink2Name).toBeInTheDocument();
  //   expect(drink3Image).toBeInTheDocument();
  //   expect(drink4Name).toBeInTheDocument();
  // });

  it('Should Change page when a drink from the list is selected', async () => {
    fetchDrinks.mockResolvedValue({});
    const foundGinDrinks = {
      drinks: [
        { strDrink: 'Drink1NA', idDrink: '1', strDrinkThumb: 'linkFor1' },
        { strDrink: 'Drink2A', idDrink: '2', strDrinkThumb: 'linkFor2' },
        { strDrink: 'Drink3A', idDrink: '3', strDrinkThumb: 'linkFor3' },
        { strDrink: 'Drink4A', idDrink: '4', strDrinkThumb: 'linkFor4' },
      ],
    };
    fetchDrinkByIngredient.mockResolvedValueOnce(foundGinDrinks);

    const mockDrinkRecipe = {
      drinks: [
        {
          idDrink: '1',
          strDrink: 'Drink1NA',
          strAlcoholic: 'Alcoholic',
          strGlass: 'Cocktail glass',
          strInstructions: 'Add alcohol. Drink it.',
          strDrinkThumb: 'linkFor1',
          strIngredient1: 'Tequila',
          strMeasure1: 'One Bottle',
        },
      ],
    };
    fetchDrinkRecipe.mockResolvedValue(mockDrinkRecipe);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );

    const preferenceBoth = await waitFor(() => screen.getByRole('radio', { name: 'Both' }));
    const searchBox = screen.getByPlaceholderText('Vodka');
    const findButton = screen.getByRole('button', { name: 'Find' });

    fireEvent.change(searchBox, { target: { value: 'Gin' } });
    fireEvent.click(preferenceBoth);
    fireEvent.click(findButton);

    const drink1Image = await waitFor(() => screen.getByTitle('Drink1NA'));

    fireEvent.click(drink1Image);

    const drinkGlass = await waitFor(() => screen.getByText('Cocktail glass'));

    expect(drinkGlass).toBeInTheDocument();
  });

  it.only('Should Display a random drink when the random drink is clicked', async () => {
    fetchDrinks.mockResolvedValue({});

    const mockDrinkRecipe = {
      drinks: [
        {
          idDrink: '1',
          strDrink: 'Drink1NA',
          strAlcoholic: 'Alcoholic',
          strGlass: 'Cocktail glass',
          strInstructions: 'Add alcohol. Drink it.',
          strDrinkThumb: 'linkFor1',
          strIngredient1: 'Tequila',
          strMeasure1: 'One Bottle',
        },
      ],
    };
    fetchRandomDrink.mockResolvedValue(mockDrinkRecipe);
    fetchDrinkRecipe.mockResolvedValue(mockDrinkRecipe);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );

    const randomButton = await waitFor(() => screen.getByRole('button', { name: 'Random' }));

    fireEvent.click(randomButton);

    const drinkGlass = await waitFor(() => screen.getByText('Cocktail glass'));

    expect(drinkGlass).toBeInTheDocument();
  });

  it('Should Return to the home page with previous search on logo click', () => {});

  it('Should Return to the home page with previous search on back click', () => {});

  it('should only return the necessary information from the store', () => {});

  // It should deal with fail in nonalcoholic drink fetch
});
