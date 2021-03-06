import { FETCH_PHONES, FILTER_PHONES } from "./actionTypes";

export const fetchPhonesAction = phones => ({
  type: FETCH_PHONES,
  payload: phones,
});

export const filterPhonesAction = category => ({
  type: FILTER_PHONES,
  payload: category,
});