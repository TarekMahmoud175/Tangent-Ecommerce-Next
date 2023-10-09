"use client";
import React from "react";
import styles from "./cart.module.scss";

import CartItemComponent from "@/components/molcules/cart-item";
import CartHeader from "@/components/atoms/cart-header";
import CartFooter from "@/components/atoms/cart-footer";
import { useSelector } from "react-redux";
import { CartItem } from "@/common/types/cartItem";

const CartPageContainer = () => {
  // @ts-ignore
  let { cart, total } = useSelector((state) => state?.cart);

  return (
    <React.Fragment>
      <CartHeader />

      {cart.map((item: CartItem) => (
        <CartItemComponent
          product={item}
          key={`CartItemsSection ==>  product_ID ${item.id} , product_title ${item.title} `}
        />
      ))}

      <CartFooter CartTotal={total} />
    </React.Fragment>
  );
};

export default CartPageContainer;
