import products from './products';

import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from '../../ActionTypes';

const productsData = [
  {
    name: 'Nike Air Jordan',
  },
  {
    name: 'Nike Air Force',
  },
];

const response = { data: productsData };
const error = { message: 'Request failed with status code 404' };
const state = {
  isLoading: false,
  payload: [],
  error: null,
};

describe('products reducer', () => {
  it('should return the initial state', () => {
    expect(products(undefined, {})).toEqual(state);
  });

  it('should display loading indicator', () => {
    const successAction = {
      type: GET_PRODUCTS_REQUEST,
      isLoading: true,
    };
    expect(products({}, successAction)).toEqual({ isLoading: true });
  });

  it('should return products', () => {
    const successAction = {
      type: GET_PRODUCTS_SUCCESS,
      response,
      error: null,
    };
    expect(products([], successAction)).toEqual({ isLoading: false, payload: productsData });
  });

  it('should return error', () => {
    const errorAction = {
      type: GET_PRODUCTS_FAILURE,
      error,
    };
    expect(products([], errorAction)).toEqual({ isLoading: false, error });
  });
});