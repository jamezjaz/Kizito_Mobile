import { FILTER_PHONES } from '../actions/actionTypes';

const filter = null;

const filterReducer = (state = filter, action) => {
  switch (action.type) {
    case FILTER_PHONES:
      return action.payload;
    default:
      return state;
  }
};

export default filterReducer;
