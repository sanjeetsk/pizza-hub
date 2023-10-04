import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slices/productSlice';
import cartReducer from './slices/CartSlice';

export const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
    },
});