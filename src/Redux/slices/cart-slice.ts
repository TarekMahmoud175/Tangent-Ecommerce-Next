
"use client";

import { CartItem } from "@/common/types/cartItem";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type CartSliceState = {
    cart: CartItem[],
    total: number,
}

const initialState: CartSliceState = {
    cart: [],
    total: 0
};

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        saveCart: (state, action: PayloadAction<CartItem[]>) => {
            state.cart = [...action.payload]
        },
        saveTotal: (state, action: PayloadAction<number>) => {
            state.total = action.payload
        },
    },
});

export const { saveCart } = CartSlice.actions

export default CartSlice.reducer;