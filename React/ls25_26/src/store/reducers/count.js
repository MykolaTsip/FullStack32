import { initStore } from '../store';
import { PLUS, MINUS, ZERO } from '../actions/counter';


export function countReducer (state = initStore, action) {
    let { count } = state;

    switch (action.type) {
        case PLUS: return { ...state, count: count + 1 }
        case MINUS: return {...state, count: count - 1}
        case ZERO: return {...state, count: 0}
        default: return {...state}
    }
};
