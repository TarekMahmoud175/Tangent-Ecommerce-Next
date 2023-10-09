'use client'

import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/cart-slice";

const store = configureStore({
    reducer: {
        cart: CartSlice,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;