import {createStore, applyMiddleware} from 'redux'
import {rootReducer} from './redusers'

export const store = createStore(rootReducer, applyMiddleware());