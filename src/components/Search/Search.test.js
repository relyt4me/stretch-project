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
    // Mock the drinks that i get from my fetch drinks by ingredients
    const foundGinDrinks = {
      drinks: [
        { strDrink: 'Drink1NA', idDrink: '1' },
        { strDrink: 'Drink2A', idDrink: '2' },
        { strDrink: 'Drink3A', idDrink: '3' },
        { strDrink: 'Drink4A', idDrink: '4' },
      ],
    };

    // Mock the drinks that i get after they have been filtered that i will use when i pass to my handle search dispatch
    const filteredGinDrinks = [
      { strDrink: 'Drink2A', idDrink: '2' },
      { strDrink: 'Drink3A', idDrink: '3' },
      { strDrink: 'Drink4A', idDrink: '4' },
    ];

    // Mock the alcoholic drinks that will be in the store and got with mapstatetoprops
    //I will give this to search in the render as if passing props
    const alcoholicDrinks = [{ idDrink: '2' }, { idDrink: '3' }, { idDrink: '4' }];

    // mock the fetch call
    fetchDrinkByIngredient.mockResolvedValueOnce(foundGinDrinks);

    // create my fake handleSeach to give as a prop to the Search component in render
    const mockHandleSearch = jest.fn();

    //Render
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Search handleSearch={mockHandleSearch} alcoholicDrinks={alcoholicDrinks} />
        </MemoryRouter>
      </Provider>
    );

    // Enter search and fire the click
    const preferenceAlcoholic = screen.getByRole('radio', { name: 'Alcoholic' });
    const searchBox = screen.getByPlaceholderText('Vodka');

    fireEvent.change(searchBox, { target: { value: 'Gin' } });
    fireEvent.click(preferenceAlcoholic);

    const findButton = screen.getByRole('button', { name: 'Find' });
    fireEvent.click(findButton);

    // Check that my mockedfunction is called
    await waitFor(() => expect(mockHandleSearch).toBeCalledTimes(1));
    expect(mockHandleSearch).toBeCalledWith(filteredGinDrinks);

    // I started by thinking through all the steps from click to handleSearch to see what all needed to be mocked and passed as props.
  });

  it('Should call handle Search when inputs are filled out without an alcohol preference', () => {
    // render(<Search />);
    // const randomButton = screen.getByRole('button', { name: 'Random' });
    // fireEvent.click(randomButton);
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
