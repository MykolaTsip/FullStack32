import { USERS } from '../constants';

import { usersInit } from '../store';

export const userReducer = (state = usersInit, action) => {

    switch (action.type) {
        case USERS: return {...state, users: action.payload};
        default: return {...state, users: []};
    }
}