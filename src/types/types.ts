export interface ProductState {
    productTypes: ProductType[],
    products: Product[],
    filters: Filters,
}

export interface Product {
    id: number | string,
    name: string,
    price: number | string,
    gost: string,
    type: string,
    img: string | File,
    amount: number
}

interface Filters {
    price: Price,
    types: ProductType[],
    gosts: string[]
}

export interface Price {
    min: number,
    max: number
}

export interface ProductType {
    id: number | string,
    type: string
}

export enum ActionTypes {
    ADD_PRODUCT_TYPE = "ADD_PRODUCT_TYPE",
    ADD_PRODUCT = "ADD_PRODUCT",
    SET_FILTER = "SET_FILTER",
    SET_BASKET = "SET_BASKET",
}

interface AddProductTypeAction {
    type: ActionTypes.ADD_PRODUCT_TYPE,
    payload: ProductType
}

interface AddProductAction {
    type: ActionTypes.ADD_PRODUCT,
    payload: Product
}

interface SetFilterAction {
    type: ActionTypes.SET_FILTER,
    payload: Filters
}

interface SetBasketAction {
    type: ActionTypes.SET_BASKET,
    payload: {
        id: number | string,
        amount: number,
    }
}

export type UserAction = AddProductAction | AddProductTypeAction | SetFilterAction | SetBasketAction