import React from 'react';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../HomePage';

describe('Homepage', () => {
  it('matches HomePage Snapshot', () => {
    const homePageComponent = create(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    expect(homePageComponent.toJSON()).toMatchSnapshot();
  });
});
