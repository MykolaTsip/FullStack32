import { createStore, legacy_createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import { countReducer } from './reducers/count';


export const store = legacy_createStore(countReducer, composeWithDevTools());