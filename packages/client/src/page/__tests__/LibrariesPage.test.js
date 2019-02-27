import React from 'react';
import { create } from 'react-test-renderer';

import { LibrariesPage } from '../LibrariesPage';

describe('LibrariesPage', () => {
  it.skip('shows a list of libraries on LibrariesPage', async () => {
    const libraries = [
      {
        id: 1,
        libraryname: 'Express'
      },
      {
        id: 2,
        libraryname: 'pg'
      }
    ];

    const librariesPageComponent = create(<LibrariesPage />);
    const instance = librariesPageComponent.getInstance();

    await instance.componentDidMount();
  });
});
