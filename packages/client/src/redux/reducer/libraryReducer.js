import api from '../../api';

// Actions
export const LOAD_LIBRARIES = 'LOAD_LIBRARIES';

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
export const getLibraries = () => async dispatch => {
  const libs = await api.libraries.getLibraries();
  dispatch(loadLibraries(libs));
};
