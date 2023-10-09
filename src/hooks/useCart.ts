// import React, { useEffect } from "react";
// // import useHandleErrors from "../hooks/useHandleErrors"
// // import store from "../redux/store"
// // import { useRouter } from "next/router";
// // import { deleteItem, SaveCart, saveItem } from "../redux/reducers/CartReducer";
// import { cartItem } from "@/common/types/cartItem";

// 'use client'
// const useHandleCart =()=>{
//     const dispatch = useDispatch()
    
//     const SaveToCart = (AddedItem: cartItem) => {
//         let SavedCart = localStorage.getItem("cart")
//         let cart = (SavedCart ? JSON.parse(SavedCart) : []) as cartItem[];
//         let index = cart.findIndex((item: cartItem) => item?.id == AddedItem?.id);
//         if (index == -1) cart.push(AddedItem)
//         else {
//             let newQuantity = cart[index].quantity + AddedItem.quantity
//             cart[index]["quantity"] = newQuantity
//         }
//         localStorage.setItem("cart", JSON.stringify(cart))
//     }

// }






// // const saveToCartLocal = async (data, handleSuccess) => {
// //     let newItem = {
// //         product: data?.product,
// //         quantity: data?.quantity,
// //         product_entry_obj: { ...data?.entry_obj, product_name: data?.product_details?.name, product_color: { images: data?.product_color?.images } },
// //         price_type: data?.price_type,
// //         insurance: data?.insurance
// //     };
// //     let index = offlineCart.findIndex((x) => x?.product_entry_obj?.id == newItem?.product_entry_obj?.id);
// //     if (index == -1) {
// //         offlineCart.push(newItem);
// //     } else {
// //         offlineCart[index] = newItem;
// //     }

// //     store.dispatch(SaveCart(offlineCart))
// //     localStorage.setItem("cart", JSON.stringify(offlineCart));

// //     handleSuccess()



// // }

// const HandleSaveToCart = async (data, handleSuccess, HandleError) => {
//     let request_obj = {
//         quantity: data?.quantity,

//         product: data?.product?.id,
//         product_details: data?.product,

//         product_entry: data?.entry_obj?.id,
//         entry_obj: data?.entry_obj,

//         product_color: data?.color,
//         price_type: data?.price_type,
//         insurance: data?.insurance
//     }
//     let token = localStorage.getItem("bearer") || null
//     if (token) saveToCartOnline(request_obj, handleSuccess, HandleError);
//     else saveToCartLocal(request_obj, handleSuccess);
// }

// const calcSubTotal = (userCart) => {
//     let subTotal = 0;
//     userCart.map(item => {
//         let price = item?.product_entry_obj?.price_after_discount || item?.product_entry_obj?.price
//         subTotal += (item?.quantity * price);
//     })
//     return subTotal;
// }

// const DeleteCartItemOnline = (item, handleSuccess, handleError) => {
//     let lang = localStorage.getItem("AppLang") || "en"
//     CartService.RemoveCartProductOnline(item?.id, lang).then(res => {
//         handleSuccess();
//         setTimeout(() => {
//             store.dispatch(deleteItem(item));
//         }, 20);
//     }).catch(handleError)
// }

// const DeleteCartItemLocal = async (item, handleSuccess) => {
//     let offlineCart = await JSON.parse(localStorage.getItem("cart"));
//     let index = offlineCart.findIndex((x) => x?.product_entry_obj?.id == item?.product_entry_obj?.id);
//     handleSuccess();
//     setTimeout(async () => {
//         offlineCart.splice(index, 1);
//         store.dispatch(SaveCart(offlineCart));
//         localStorage.setItem("cart", JSON.stringify(offlineCart));
//     }, 20);
// }

// const handleDeleteProduct = async (item, handleSuccess, handleError) => {

//     let token = localStorage.getItem("bearer") || null
//     if (token) DeleteCartItemOnline(item, handleSuccess, handleError);
//     else DeleteCartItemLocal(item, handleSuccess);
// }


// export default function UseGetCart({ isRefreshed = false } = {}) {
//     const router = useRouter();
//     useEffect(() => {
//         async function getCart() {
//             let token = localStorage.getItem('bearer')
//             let lang = localStorage.getItem('AppLang') || "en"
//             if (token) {
//                 CartService.GetCartItemsOnline(lang)
//                     .then(res => {
//                         store.dispatch(SaveCart(res))
//                     }).catch(err => console.log(err))
//             } else {
//                 let cart = await JSON.parse(localStorage.getItem('cart')) || []
//                 store.dispatch(SaveCart(cart))
//             }
//         }

//         isRefreshed && getCart();
//     }, [router, isRefreshed]);
// }


// const setCartItemsForRequest = (cart) => {
//     let BackendCart = [];
//     cart?.map(item => {
//         let element = {}
//         element["quantity"] = item?.quantity;
//         element["product_entry"] = item?.product_entry_obj?.id;
//         element["product"] = item?.product;
//         element["price_type"] = item?.price_type
//         element["insurance"] = item?.insurance
//         BackendCart.push(element);
//     })
//     return BackendCart
// }


// const syncCart = async () => {
//     const userCart = await JSON.parse(localStorage.getItem('cart')) || [];
//     let lang = localStorage.getItem("AppLang") || "en"
//     if (userCart?.length > 0) {
//         let BackendCart = setCartItemsForRequest(userCart)
//         await CartService.saveBulkInCart(BackendCart, lang).then(res => {
//             store.dispatch(SaveCart(userCart));
//             localStorage.removeItem('cart');
//         }).catch(err => console.log("sync cart Error", err))
//         return "sync cart"
//     } else return null
// }



// export { HandleSaveToCart, handleDeleteProduct, calcSubTotal, syncCart, setCartItemsForRequest }

