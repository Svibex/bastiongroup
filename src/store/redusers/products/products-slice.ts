import { createSlice } from '@reduxjs/toolkit';

interface IProduct {
    id: string;
    name: string;
}

interface IContactsState {
    products: IProduct[];
}

const initialState: IContactsState = {
    products: [] as IProduct[],
};

export const productsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        reset(state) {
            state.products = [];
        },
    },
});

export default productsSlice.reducer;