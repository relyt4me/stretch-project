import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Search, mapStateToProps } from './Search';
import { fetchDrinkByIngredient, fetchRandomDrink } from '../../helpers/apiCalls';
import '@testing-library/jest-dom';
jest.mock('../../helpers/apiCalls');

describe('Search', () => {
  it('Should display search form on render', () => {
    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
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
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    );

    const searchBox = screen.getByPlaceholderText('Vodka');

    fireEvent.change(searchBox, { target: { value: 'Gin' } });

    expect(searchBox.value).toBe('Gin');
  });

  it('Should check the radio buttons as the form is filled out', () => {
    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
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
      <MemoryRouter>
        <Search handleSearch={mockHandleSearch} alcoholicDrinks={alcoholicDrinks} />
      </MemoryRouter>
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
      <MemoryRouter>
        <Search handleSearch={mockHandleSearch} />
      </MemoryRouter>
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

  it('Should call handleError when there is no valid search', async () => {
    const foundNothing = null;

    fetchDrinkByIngredient.mockResolvedValueOnce(foundNothing);
    const mockHandleError = jest.fn();

    render(
      <MemoryRouter>
        <Search handleError={mockHandleError} />
      </MemoryRouter>
    );

    const preferenceAlcoholic = screen.getByRole('radio', { name: 'Alcoholic' });
    const searchBox = screen.getByPlaceholderText('Vodka');
    const findButton = screen.getByRole('button', { name: 'Find' });

    fireEvent.change(searchBox, { target: { value: 'Gi' } });
    fireEvent.click(preferenceAlcoholic);
    fireEvent.click(findButton);

    await waitFor(() => expect(mockHandleError).toBeCalledTimes(1));
    expect(mockHandleError).toBeCalledWith("We're sorry we could not find that ingredient. Check that you have spelled the ingredient correctly or try a different search.");
  });

  it('Should call handleError when there is a bad response from the server', async () => {
    const randomRecipeError = null;

    fetchRandomDrink.mockResolvedValueOnce(randomRecipeError);
    const mockHandleError = jest.fn();

    render(
      <MemoryRouter>
        <Search handleError={mockHandleError} />
      </MemoryRouter>
    );

    const randomButton = screen.getByRole('button', { name: 'Random' });

    fireEvent.click(randomButton);

    await waitFor(() => expect(mockHandleError).toBeCalledTimes(1));
    expect(mockHandleError).toBeCalledWith('Our bartender is out. Please try again later.');
  });

  it('Should return only the necessary information from the redux store', () => {
    const mockState = {
      alcoholicDrinks: [{ idDrink: '2' }, { idDrink: '3' }, { idDrink: '4' }],
      nonAlcoholicDrinks: [{ idDrink: '1' }, { idDrink: '5' }, { idDrink: '8' }],
      drinkRecipe: {},
      drinkId: '45',
      errorMessage: 'Test Error',
    };
    const expected = {
      alcoholicDrinks: [{ idDrink: '2' }, { idDrink: '3' }, { idDrink: '4' }],
      nonAlcoholicDrinks: [{ idDrink: '1' }, { idDrink: '5' }, { idDrink: '8' }],
    };

    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});
