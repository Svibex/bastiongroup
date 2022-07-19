import {ProductState, ActionTypes, UserAction} from '../../types/types';
import db from '../../assets/db';

const initialState: ProductState = {
    productTypes: [{id: 1, type: 'Опора'}, {id: 2, type: 'Колонна'}],
    products: db,
}

export const productReducer = (state = initialState, action: UserAction): ProductState => {
    switch (action.type) {
        case ActionTypes.ADD_PRODUCT_TYPE:
            return {...state, productTypes: [...state.productTypes, action.payload]}
        case ActionTypes.ADD_PRODUCT:
            return {...state, products: [...state.products, action.payload]}
        default:
            return state
    }
}