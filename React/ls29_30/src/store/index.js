import { configureStore, combineReducers } from '@reduxjs/toolkit'

import counter from './slice/counter';
import users from './slice/user';

// const rootReducer = combineReducers(counter, users)

const rootReducer = {
    counter,
    users
}
export const store = configureStore({
    reducer: rootReducer,
    devTools: true
})