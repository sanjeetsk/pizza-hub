import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        loading: false,
        products: [],
        error: null,
    },
    reducers: {
        fetchCart: (state) =>{
            return {
                ...state,
                loading: true,
                error: null,
                products: [],
            };
        },
        cartFetched: (state, {payload}) => {
            return{
                ...state,
                loading: false,
                error: null,
                products: payload,
            };
        },
        cartError: (state, {payload}) => {
            return{
                ...state,
                loading: false,
                products: [],
                error: payload,
            };
        },
    },
});

export const {fetchCart, cartFetched, cartError} = CartSlice.actions;

export default CartSlice.reducer;