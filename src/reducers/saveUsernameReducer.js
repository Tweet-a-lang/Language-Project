import * as types from '../actions/types';

export const initialState = {
  username: ''
};

export default (prevState = initialState, action) => {
  switch (action.type) {
  case types.SAVE_USERNAME: {
    const newState = Object.assign({}, prevState);
    newState.username = action.payload;
    return newState;
  }
  default:
    return prevState;
  }
};