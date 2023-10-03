import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        loading: false,
        products: [],
        originalProducts: [],
        error: null,
    },
    reducers: {
        fetchProducts: (state) =>{
            return {
                ...state,
                loading: true,
                error: null,
                products: [],
                originalProducts: [],
            };
        },
        productsFetched: (state, {payload}) => {
            return{
                ...state,
                loading: false,
                error: null,
                products: payload,
                originalProducts: payload,
            };
        },
        productsError: (state, {payload}) => {
            return{
                ...state,
                loading: false,
                products: [],
                originalProducts: [],
                error: payload,
            };
        },
        filterProducts: (state, {payload}) => {
            return{
                ...state,
                products: payload ? (payload === 'All' ? state.originalProducts : state.originalProducts.filter((dish) =>(dish.category === payload)))
                    : state.originalProducts,      
            };
        },
    },
});

export const {fetchProducts, productsFetched, productsError, filterProducts} = productSlice.actions;

export default productSlice.reducer;