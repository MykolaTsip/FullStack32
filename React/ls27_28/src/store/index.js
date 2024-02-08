import { legacy_createStore, createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';

import { countReducer, userReducer } from './reducers';

const allReducers = combineReducers({
    dataCount: countReducer,
    gettingUsers: userReducer
})

// const psevdoSt = () => ({});
export const store = legacy_createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));

console.log(store.getState());
