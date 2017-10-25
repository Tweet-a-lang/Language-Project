import * as types from '../actions/types';

export const initialState = () => ({
  username: ''
});

export default (prevState = initialState(), action) => {
  console.log('action', action.payload);
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