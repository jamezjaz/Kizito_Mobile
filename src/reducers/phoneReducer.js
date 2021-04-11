import { FETCH_PHONES } from '../actions/actionTypes';
import initialState from './constants';

const phoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHONES:
      return {
        ...state,
        phones: action.payload,
      };
    default:
      return state;
  }
};

export default phoneReducer;
