import { FETCH_LIBRARIES } from '../types';

export default function libraries(state = {}, action) {
  switch (action.type) {
    case FETCH_LIBRARIES:
      return action.payload;
    default:
      return state;
  }
}
