import * as types from '../actions/types';

export const initialState = {
  loading: false,
  error: null,
  userData: {}
};

export default (prevState = initialState, action) => {
  switch (action.type) {
  case types.FETCH_USER_REQUEST:
    return Object.assign({}, prevState, {
      loading: true,
      error: null,
      userData: {}
    });
  case types.FETCH_USER_SUCCESS:
    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      userData: action.payload
    });
  case types.FETCH_USER_FAILURE:
    return Object.assign({}, prevState, {
      loading: false,
      error: action.payload,
      userData: {}
    });
  default:
    return prevState;
  }
};