import React from 'react';
import { render } from '@testing-library/react';
import ToonDetailPage from './ToonDetailPage';
import { MemoryRouter as Router } from 'react-router-dom';


describe('ToonDetailPage component', () => {
  it('makes toon details', () => {
    const { asFragment } = render(
      <Router>
        <ToonDetailPage name="Rick Sanchez" status="alive" 
          species="human" gender="male" />
      </Router>
    );

    expect(asFragment()).toMatchSnapshot;
  });
});
