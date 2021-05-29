import {
  ADD_QUANTITY,
  ADD_TO_CART,
  FETCH_PHONES,
  FILTER_PHONES,
  REMOVE_ITEM,
  SUB_QUANTITY,
} from './actionTypes';

export const fetchPhonesAction = phones => ({
  type: FETCH_PHONES,
  payload: phones,
});

export const filterPhonesAction = category => ({
  type: FILTER_PHONES,
  payload: category,
});

export const addToCart = id => ({
  type: ADD_TO_CART,
  id,
});

export const removeItem = id => ({
  type: REMOVE_ITEM,
  id,
});

export const addQuantity = id => ({
  type: ADD_QUANTITY,
  id,
});

export const subtractQuantity = id => ({
  type: SUB_QUANTITY,
  id,
});
