import { FETCH_LIBRARIES } from '../types';
import api from '../api';

// action creator
export const fetchLibraries = payload => ({
  type: FETCH_LIBRARIES,
  payload
});

export const getLibraries = () => dispatch =>
  api.libraries.getLibraries().then((libraries) => {
    dispatch(fetchLibraries(libraries));
  });
