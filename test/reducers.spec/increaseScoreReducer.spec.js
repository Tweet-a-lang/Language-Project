import { expect } from 'chai';
import increaseScoreReducer, { getInitialState } from '../../src/reducers/increaseScoreReducer';
import { increaseScore } from '../../src/actions/increaseScore';

describe.only('increaseScore reducer', () => {
    describe('default behaviour', () => {
        it('returns the passed prevState if passed an unrecognised action', () => {
            const prevState = {}
            const newState = increaseScoreReducer(prevState, { type: 'whatever' })
            expect(newState).to.equal(prevState)
        })
        it('uses the default initialState if no prevState is passed', () => {
            const newState = increaseScoreReducer(undefined, { type: 'whatever' })
            expect(newState).to.eql(getInitialState())
        })
    })
    describe('actions::INCREASE_SCORE', () => {
        it('increases the score', () => {
            let action = increaseScore(10)
            let newState = increaseScoreReducer(getInitialState(), action)
            expect(newState.score).to.eql(10)
        })
        //     it('totals the coins in credit', () => {
        //         let action = actions.insertCoin(10)
        //         let newState = reducer(getInitialState(), action)
        //         expect(newState.credit).to.eql(165);
        //     })
    })
})