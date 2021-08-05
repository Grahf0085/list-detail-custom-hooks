import React from 'react';
import { render } from '@testing-library/react';
import Toon from './Toon';
import { MemoryRouter as Router } from 'react-router-dom';

describe('Toon component', () => {
  it('renders clickable image', () => {
    const url = 'https://rickandmortyapi.com/api/character/avatar/1.jpeg';
    const name = 'Rick Sanchez';
    const id = '1';

    const { asFragment } = render(
      <Router>
        <Toon id={id} image={url} name={name} />
      </Router>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
