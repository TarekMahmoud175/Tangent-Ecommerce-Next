"use client";
import React from "react";
import styles from "./cart.module.scss";

import CartItemComponent from "@/components/molcules/cart-item";
import CartHeader from "@/components/atoms/cart-header";
import CartFooter from "@/components/atoms/cart-footer";
import { useSelector } from "react-redux";
import { CartItem } from "@/common/types/cartItem";
import Link from "next/link";

const CartPageContainer = () => {
  // @ts-ignore
  let { cart, total } = useSelector((state) => state?.cart);

  return (
    <React.Fragment>
      {Boolean(cart.length) ? (
        <div className="text-center">
          <h3>Cart Is Empty</h3>

          <Link className={styles.link} href={"/shop"}>
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <CartHeader />

          {cart.map((item: CartItem) => (
            <CartItemComponent
              product={item}
              key={`CartItemsSection ==>  product_ID ${item.id} , product_title ${item.title} `}
            />
          ))}

          <CartFooter CartTotal={total} />
        </>
      )}
    </React.Fragment>
  );
};

export default CartPageContainer;
