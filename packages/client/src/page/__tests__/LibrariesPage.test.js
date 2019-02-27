import React from 'react';
import { mount } from 'enzyme';

import { LibrariesPage } from '../LibrariesPage';

describe('LibrariesPage', () => {
  it('shows a list of libraries on LibrariesPage', async () => {
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

    const mockFetchLibraries = jest.fn();

    const librariesPageWrapper = mount(
      <LibrariesPage libraries={[]} fetchLibraries={mockFetchLibraries} />
    );

    expect(librariesPageWrapper.state().loading).toBe(true);

    expect(librariesPageWrapper.props().libraries).toEqual([]);
    expect(librariesPageWrapper.props().fetchLibraries).toEqual(
      mockFetchLibraries
    );

    expect(librariesPageWrapper.childAt(0).html()).toBe(
      '<h1>Libraries Used</h1>'
    );
    expect(librariesPageWrapper.childAt(1).html()).toBe('<p>Loading...</p>');

    // simulate change
    librariesPageWrapper.setProps({ libraries });
    librariesPageWrapper.setState({ loading: false });
    expect(mockFetchLibraries).toHaveBeenCalledTimes(1);
    expect(librariesPageWrapper.props().libraries).toEqual(libraries);
    expect(librariesPageWrapper.state().loading).toBe(false);

    expect(librariesPageWrapper.childAt(0).html()).toBe(
      '<h1>Libraries Used</h1>'
    );

    expect(librariesPageWrapper.childAt(1).type()).toBe('ul');
    expect(
      librariesPageWrapper
        .childAt(1)
        .childAt(0)
        .type()
    ).toBe('li');
    expect(
      librariesPageWrapper
        .childAt(1)
        .childAt(0)
        .key()
    ).toBe('1');
    expect(
      librariesPageWrapper
        .childAt(1)
        .childAt(0)
        .text()
    ).toBe('Express');

    expect(
      librariesPageWrapper
        .childAt(1)
        .childAt(1)
        .type()
    ).toBe('li');
    expect(
      librariesPageWrapper
        .childAt(1)
        .childAt(1)
        .key()
    ).toBe('2');
    expect(
      librariesPageWrapper
        .childAt(1)
        .childAt(1)
        .text()
    ).toBe('pg');
  });
});
