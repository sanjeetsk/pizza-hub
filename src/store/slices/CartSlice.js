import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        cartItem: {},
        message: "Cart is Empty!",
        products: [],
        isInCart: false,
        error: "",
    },
    reducers: {
        cartFetched: (state, {payload}) => {
            console.log(
                'payload',payload
            )
            return{
                ...state,
                isInCart: true,
                // products: [...state.products,...payload],
                products: payload,
            };
        },

        cartError: (state, {payload}) => {
            console.log('here')
            return{
                ...state,
                isInCart: false,
                products: [],
                error: payload,
            };
        },
    },
});

export const {cartFetched, cartError} = CartSlice.actions;

export default CartSlice.reducer;