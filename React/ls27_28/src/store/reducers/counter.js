import { countInit } from '../store';
import {
    PLUS,
    MINUS,
    ZERO
} from '../constants';


export const countReducer = (store = countInit, action) => {
    let { count } = store;

    switch (action.type) {
        case PLUS: return {...store, count: count + 1};
        case MINUS: return {...store, count: count - 1};
        case ZERO: return {...store, count: 0};
        default: return {...store, count};
    }
}
