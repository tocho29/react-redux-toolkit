import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productList: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addProductToCart: (state, action) => {
            // Este es un ejemplo de como añadir elementos a un array dentro de un estate
            state.productList = [...state.productList, action.payload]
        }
    },
})

export const { addProductToCart } = cartSlice.actions

export default cartSlice.reducer