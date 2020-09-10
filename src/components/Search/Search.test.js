import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from './Search';

describe('Search', () => {
  it('Should display search form on render', () => {
    render(<Search />);

    const searchLabel = screen.getByText('What do you have?');
    const searchBox = screen.getByPlaceholderText('Vodka');
    const preferenceLabel = screen.getByText('Preference');
    const preferenceBoth = screen.getByRole('radio', { name: 'Both' });

    expect(searchLabel).toBeInTheDocument();
    expect(searchBox).toBeInTheDocument();
    expect(preferenceLabel).toBeInTheDocument();
    expect(preferenceBoth).toBeInTheDocument();
  });
});
