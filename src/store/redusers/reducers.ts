import { combineReducers } from '@reduxjs/toolkit';
import productsSlice from './products/products-slice';

const rootReducer = combineReducers({ productsSlice });

export default rootReducer;