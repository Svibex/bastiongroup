import {ProductState, ActionTypes, UserAction} from '../../types/types';
import {productTypes, products, filters, basket} from '../../assets/db';

const initialState: ProductState = {
    productTypes,
    products,
    filters,
    basket,
}

export const productReducer = (state = initialState, action: UserAction): ProductState => {
    switch (action.type) {
        case ActionTypes.ADD_PRODUCT_TYPE:
            return {...state, productTypes: [...state.productTypes, action.payload]}
        case ActionTypes.ADD_PRODUCT:
            return {...state, products: [...state.products, action.payload]}
        case ActionTypes.SET_FILTER:
            return {...state, filters: action.payload}
        default:
            return state
    }
}