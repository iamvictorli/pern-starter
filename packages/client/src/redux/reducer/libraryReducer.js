import api from '../../api';

// Actions
const LOAD_LIBRARIES = 'LOAD_LIBRARIES';

// Reducer
export default function libraries(state = [], action) {
  switch (action.type) {
    case LOAD_LIBRARIES:
      return action.payload;
    default:
      return state;
  }
}

// Action Creators
export const loadLibraries = payload => ({
  type: LOAD_LIBRARIES,
  payload
});

// Side effects
export const getLibraries = () => dispatch =>
  api.libraries.getLibraries().then(libs => {
    dispatch(loadLibraries(libs));
  });
