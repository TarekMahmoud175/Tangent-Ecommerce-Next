'use client'

import { saveCart, saveTotal } from "@/Redux/slices/cart-slice";
import { CartItem } from "@/common/types/cartItem";
import { useEffect } from "react";
import { useDispatch } from "react-redux"

const useHandleCart = () => {
    const dispatch = useDispatch()

    const GetCart = () => {
        let SavedCart = localStorage.getItem("cart")
        let cart = (SavedCart ? JSON.parse(SavedCart) : []) as CartItem[];
        return cart
    }

    const SaveToCart = (AddedItem: CartItem) => {
        let cart = GetCart();
        let index = cart.findIndex((item: CartItem) => item?.id == AddedItem?.id);
        let newCart = [...cart]
        if (index == -1) newCart.push(AddedItem)
        else {
            //@ts-ignore
            newCart?.[index] = AddedItem
        }
        dispatch(saveCart(newCart))
        localStorage.setItem("cart", JSON.stringify(newCart))
    }


    const CalcTotal = () => {
        let cart = GetCart();
        let total = 0;
        cart.forEach(product => {
            let price = product.price * product.quantity
            total += price
        })
        dispatch(saveTotal(total))
    }


    const RemoveFromCart = (Product: CartItem) => {
        let cart = GetCart()
        const updatedProducts: CartItem[] = cart.filter((item) => item.id !== Product.id);
        dispatch(saveCart(updatedProducts))
        localStorage.setItem("cart", JSON.stringify(updatedProducts))
    }

    useEffect(() => {
        let cart = GetCart()
        dispatch(saveCart(cart))
    }, [])



    return { SaveToCart, RemoveFromCart, CalcTotal }

}


export default useHandleCart;