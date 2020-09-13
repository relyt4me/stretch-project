import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers/index';
import { Search } from './Search';
import { fetchDrinkByIngredient, fetchRandomDrink } from '../../helpers/apiCalls';
import '@testing-library/jest-dom';
jest.mock('../../helpers/apiCalls');

describe.only('Search', () => {
  let store;
  beforeEach(() => {
    store = createStore(rootReducer);
  });
  it('Should display search form on render', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Search />
        </MemoryRouter>
      </Provider>
    );

    const searchLabel = screen.getByText('What do you have?');
    const searchBox = screen.getByPlaceholderText('Vodka');
    const preferenceLabel = screen.getByText('Preference');
    const preferenceBoth = screen.getByRole('radio', { name: 'Both' });
    const preferenceAlcoholic = screen.getByRole('radio', { name: 'Alcoholic' });
    const preferenceNonAlcoholic = screen.getByRole('radio', { name: 'Non Alcoholic' });
    const findButton = screen.getByRole('button', { name: 'Find' });
    const randomButton = screen.getByRole('button', { name: 'Random' });

    expect(searchLabel).toBeInTheDocument();
    expect(searchBox).toBeInTheDocument();
    expect(preferenceLabel).toBeInTheDocument();
    expect(preferenceBoth).toBeInTheDocument();
    expect(preferenceAlcoholic).toBeInTheDocument();
    expect(preferenceNonAlcoholic).toBeInTheDocument();
    expect(findButton).toBeInTheDocument();
    expect(randomButton).toBeInTheDocument();
  });

  it('Should change change the input as the form is filled out', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Search />
        </MemoryRouter>
      </Provider>
    );

    const searchBox = screen.getByPlaceholderText('Vodka');

    fireEvent.change(searchBox, { target: { value: 'Gin' } });

    expect(searchBox.value).toBe('Gin');
  });

  it('Should check the radio buttons as the form is filled out', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Search />
        </MemoryRouter>
      </Provider>
    );

    const preferenceBoth = screen.getByRole('radio', { name: 'Both' });
    const preferenceAlcoholic = screen.getByRole('radio', { name: 'Alcoholic' });
    const preferenceNonAlcoholic = screen.getByRole('radio', { name: 'Non Alcoholic' });

    fireEvent.click(preferenceBoth);

    expect(preferenceBoth).toBeChecked();

    fireEvent.click(preferenceAlcoholic);

    expect(preferenceBoth).not.toBeChecked();
    expect(preferenceAlcoholic).toBeChecked();

    fireEvent.click(preferenceNonAlcoholic);

    expect(preferenceBoth).not.toBeChecked();
    expect(preferenceAlcoholic).not.toBeChecked();
    expect(preferenceNonAlcoholic).toBeChecked();
  });

  it('Should filter the search and call handle Search when inputs are filled out for a alcohol preference', async () => {
    const foundGinDrinks = {
      drinks: [
        { strDrink: 'Drink1NA', idDrink: '1' },
        { strDrink: 'Drink2A', idDrink: '2' },
        { strDrink: 'Drink3A', idDrink: '3' },
        { strDrink: 'Drink4A', idDrink: '4' },
      ],
    };
    const filteredGinDrinks = [
      { strDrink: 'Drink2A', idDrink: '2' },
      { strDrink: 'Drink3A', idDrink: '3' },
      { strDrink: 'Drink4A', idDrink: '4' },
    ];
    const alcoholicDrinks = [{ idDrink: '2' }, { idDrink: '3' }, { idDrink: '4' }];

    fetchDrinkByIngredient.mockResolvedValueOnce(foundGinDrinks);
    const mockHandleSearch = jest.fn();

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Search handleSearch={mockHandleSearch} alcoholicDrinks={alcoholicDrinks} />
        </MemoryRouter>
      </Provider>
    );

    const preferenceAlcoholic = screen.getByRole('radio', { name: 'Alcoholic' });
    const searchBox = screen.getByPlaceholderText('Vodka');
    const findButton = screen.getByRole('button', { name: 'Find' });

    fireEvent.change(searchBox, { target: { value: 'Gin' } });
    fireEvent.click(preferenceAlcoholic);
    fireEvent.click(findButton);

    await waitFor(() => expect(mockHandleSearch).toBeCalledTimes(1));
    expect(mockHandleSearch).toBeCalledWith(filteredGinDrinks);
  });

  it('Should call handle Search when inputs are filled out without an alcohol preference', async () => {
    const foundGinDrinks = {
      drinks: [
        { strDrink: 'Drink1NA', idDrink: '1' },
        { strDrink: 'Drink2A', idDrink: '2' },
        { strDrink: 'Drink3A', idDrink: '3' },
        { strDrink: 'Drink4A', idDrink: '4' },
      ],
    };

    fetchDrinkByIngredient.mockResolvedValueOnce(foundGinDrinks);
    const mockHandleSearch = jest.fn();

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Search handleSearch={mockHandleSearch} />
        </MemoryRouter>
      </Provider>
    );

    const preferenceBoth = screen.getByRole('radio', { name: 'Both' });
    const searchBox = screen.getByPlaceholderText('Vodka');
    const findButton = screen.getByRole('button', { name: 'Find' });

    fireEvent.change(searchBox, { target: { value: 'Gin' } });
    fireEvent.click(preferenceBoth);
    fireEvent.click(findButton);

    await waitFor(() => expect(mockHandleSearch).toBeCalledTimes(1));
    expect(mockHandleSearch).toBeCalledWith(foundGinDrinks.drinks);
  });

  it('Should call handleError when there is no valid search', () => {
    // render(<Search />);
    // const randomButton = screen.getByRole('button', { name: 'Random' });
    // fireEvent.click(randomButton);
  });

  it('Should call handleError when there is a bad response from the server', () => {
    // render(<Search />);
    // const randomButton = screen.getByRole('button', { name: 'Random' });
    // fireEvent.click(randomButton);
  });

  it('Should return only the necessary information from the redux store', () => {
    // render(<Search />);
    // const randomButton = screen.getByRole('button', { name: 'Random' });
    // fireEvent.click(randomButton);
  });
});

// test line 35
// line 37
// line 41
// line 67
// test props based on message
