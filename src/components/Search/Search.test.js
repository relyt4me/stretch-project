import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Search from './Search';

describe('Search', () => {
  it('Should display search form on render', () => {
    render(<Search />);

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
    render(<Search />);

    const searchBox = screen.getByPlaceholderText('Vodka');

    fireEvent.change(searchBox, { target: { value: 'Gin' } });

    expect(searchBox.value).toBe('Gin');
  });

  it('Should check the radio buttons as the form is filled out', () => {
    render(<Search />);

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

  it('Should fire the searchClick method on click of search button', () => {});

  it('Should fire the searchClick method on click of search button', () => {});
});
