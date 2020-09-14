import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers/index.js';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { fetchDrinks } from '../../helpers/apiCalls';
jest.mock('../../helpers/apiCalls');

describe('App', () => {
  let store;

  beforeEach(() => {
    store = createStore(rootReducer, applyMiddleware(thunk));
  });

  it.only('Should display app on page load', async () => {
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

  it('Should show a list of search results based on a search', () => {});

  it('Should show an error message if there is no matching search', () => {});

  it('Should Change page when a drink from the list is selected', () => {});

  it('Should Display a random drink when the random drink is clicked', () => {});

  it('Should Return to the home page with previous search on logo click', () => {});

  it('Should Return to the home page with previous search on back click', () => {});

  // It should deal with fail in nonalcoholic drink fetch
});
