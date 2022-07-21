export interface ProductState {
    productTypes: ProductType[],
    products: Product[],
    filters: Filters,
    basket: Product[]
}

export interface Product {
    id: number | string,
    name: string,
    price: number | string,
    gost: string,
    type: string,
    img: string | File,
    amount?: number
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

export type UserAction = AddProductAction | AddProductTypeAction | SetFilterAction