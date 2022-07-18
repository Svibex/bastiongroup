export interface ProductState {
    productTypes: string[],
    products: Product[]
}

export interface Product {
    id: number,
    name: string,
    price: string,
    gost: string,
    type: string,
    img?: string
}

export enum ActionTypes {
    ADD_PRODUCT_TYPE = "ADD_PRODUCT_TYPE",
    ADD_PRODUCT = "ADD_PRODUCT"
}

export interface AddProductTypeAction {
    type: ActionTypes.ADD_PRODUCT_TYPE,
    payload: string
}

export interface AddProductAction {
    type: ActionTypes.ADD_PRODUCT,
    payload: Product
}

export type UserAction = AddProductAction | AddProductTypeAction