import { types } from './types';

import { Map } from 'immutable';

const inititalState = Map({
    isSpinning: false,
});

export const uiReducer = (state = inititalState, action) => {
    switch (action.type) {
        case types.START_SPINNING:
            return state.set('isSpinning', true);
        case types.STOP_SPINNING:
            return state.set('isSpinning', false);
        default:
            return state;
    }
};
