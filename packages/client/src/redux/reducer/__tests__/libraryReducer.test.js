import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import { LOAD_LIBRARIES, getLibraries } from '../libraryReducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Async action on library Reducer', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('fetches libraries and updates store', () => {
    fetchMock.getOnce('/api/libraries', {
      body: {
        libraries: [
          {
            id: 1,
            libraryname: 'Express'
          },
          {
            id: 2,
            libraryname: 'pg'
          }
        ]
      },
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      {
        type: LOAD_LIBRARIES,
        payload: [
          {
            id: 1,
            libraryname: 'Express'
          },
          {
            id: 2,
            libraryname: 'pg'
          }
        ]
      }
    ];

    const store = mockStore({ libraries: [] });

    return store.dispatch(getLibraries()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
