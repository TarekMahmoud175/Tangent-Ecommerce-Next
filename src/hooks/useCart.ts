'use client'

import { saveCart, saveTotal } from "@/Redux/slices/cart-slice";
import { CartItem } from "@/common/types/cartItem";
import { Product } from "@/common/types/product";
import { useEffect } from "react";
import { useDispatch } from "react-redux"

const UseCart = () => {
    const dispatch = useDispatch()

    const getCart = () => {
        let SavedCart = localStorage.getItem("cart")
        let cart = (SavedCart ? JSON.parse(SavedCart) : []) as CartItem[];
        return cart
    }

    const saveToCart = (AddedItem: CartItem | Product) => {
        let cart = getCart();
        let newCart = [...cart]
        let index = newCart.findIndex((item: CartItem) => item?.id == AddedItem?.id);
        if (index == -1) newCart.push({ ...AddedItem, quantity: 1 })
        else {
            // @ts-ignore
            newCart[index] = AddedItem
        }
        calcTotal(newCart)
        dispatch(saveCart(newCart))
        localStorage.setItem("cart", JSON.stringify(newCart))
    }


    const calcTotal = (cartInstance?: CartItem[]) => {
        let cart = cartInstance || getCart();
        let total = 0;
        cart.forEach(product => {
            let price = product.price * product.quantity
            total += price
        })
        dispatch(saveTotal(total))
    }


    const removeFromCart = (Product: CartItem) => {
        let cart = getCart()
        const updatedProducts: CartItem[] = cart.filter((item) => item.id !== Product.id);
        calcTotal(updatedProducts)
        dispatch(saveCart(updatedProducts))
        localStorage.setItem("cart", JSON.stringify(updatedProducts))
    }

    const changeQuantity = (product: Product, quantity = 1) => {
        saveToCart({ ...product, quantity: quantity })
    }



    useEffect(() => {
            let cart = getCart()
            dispatch(saveCart(cart))
            calcTotal()
    }, [])




    return { saveToCart, removeFromCart, calcTotal, changeQuantity }

}


export default UseCart;