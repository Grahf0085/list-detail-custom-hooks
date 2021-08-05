import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router';
import ToonList from './ToonList';

describe('ToonList component', () => {
  it('makes ul filled with lis from Toon component', () => {
    const toons = [{
      'id': '1',
      'image': 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    }];

    const { asFragment } = render(
      <Router>
        <ToonList toons={toons} />
      </Router>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
