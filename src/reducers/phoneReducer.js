import {
  ADD_QUANTITY,
  ADD_SHIPPING,
  ADD_TO_CART,
  FETCH_PHONES,
  REMOVE_ITEM,
  SUB_QUANTITY,
  SUB_SHIPPING,
} from '../actions/actionTypes';
import initialState from './constants';

const phoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHONES:
      // console.log(action.id, action.type);
      return {
        ...state,
        phones: action.payload,
      };
    case ADD_TO_CART: {
      const addedItem = state.phones.mobiles.find(item => item.id === action.id);
      // check if the action id exists in the addedItems
      const existedItem = state.addedItems.find(item => action.id === item.id);

      if (existedItem) {
        addedItem.quantity += 1;
        return {
          ...state,
          total: state.total + addedItem.price,
        };
      }
      addedItem.quantity = 1;
      // calculating the total
      const newTotal = state.total + addedItem.price;
      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
      };
    }
    case REMOVE_ITEM: {
      const itemToRemove = state.addedItems.find(item => action.id === item.id);
      const newItems = state.addedItems.filter(item => action.id !== item.id);
      // calculating the total
      const newTotal = state.total - (itemToRemove.price * itemToRemove.quantity);
      // console.log(itemToRemove);
      return {
        ...state,
        addedItems: newItems,
        total: newTotal,
      };
    }
    case ADD_QUANTITY: {
      const addedItem = state.phones.mobiles.find(item => item.id === action.id);
      addedItem.quantity += 1;
      const newTotal = state.total + addedItem.price;
      return {
        ...state,
        total: newTotal,
      };
    }
    case SUB_QUANTITY: {
      const addedItem = state.phones.mobiles.find(item => item.id === action.id);
      // if the qt == 0 then it should be removed
      if (addedItem.quantity === 1) {
        const newItems = state.addedItems.filter(item => item.id !== action.id);
        const newTotal = state.total - addedItem.price;
        return {
          ...state,
          addedItems: newItems,
          total: newTotal,
        };
      }
      addedItem.quantity -= 1;
      const newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal,
      };
    }
    case ADD_SHIPPING:
      return {
        ...state,
        total: state.total + 800,
      };
    case SUB_SHIPPING:
      return {
        ...state,
        total: state.total - 800,
      };
    default:
      return state;
  }
};

export default phoneReducer;
