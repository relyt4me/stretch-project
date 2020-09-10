import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
  it('Should display the title and logo of the page', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const headerTitle = screen.getByRole('heading', { name: 'Fridge to Glass' });
    const logo = screen.getByAltText('Three neon glasses logo for Fridge to Glass');

    expect(headerTitle).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
  });
});
