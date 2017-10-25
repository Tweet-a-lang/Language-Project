import * as types from '../actions/types';

export const getInitialState = () => ({
    score: 0
});

export default (prevState = getInitialState(), action) => {
    switch (action.type) {
        case types.DECREASE_SCORE: {
            const newState = Object.assign({}, prevState)
            newState.score = prevState.score - action.payload
            return newState;
        }
        default:
            return prevState;
    };
};