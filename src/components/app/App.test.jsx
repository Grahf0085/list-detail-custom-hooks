import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe('App component', () => {
  it('displays a list of characters on the home page', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    screen.getByText('Loading List...');

    const ul = await screen.findByRole('list');
    expect(ul).not.toBeEmptyDOMElement();
  });

  it('displays a characters details', async () => {
    render(
      <MemoryRouter initialEntries={['/character/1']}>
        <App />
      </MemoryRouter>
    );

    screen.getByText('Loading List...');
    waitFor(async () => {
      const section = await screen.findByRole('details'); 
      await screen.findByText('Alive');
      await screen.findByText('Male');
      await screen.findByText('Rick Sanchez');
      expect(section).not.toBeEmptyDOMElement();
    }, 1000);


  });
});
