import React from "react";
import CartItem from "@/components/molcules/cart-item";
import CartHeader from "@/components/atoms/cart-header";
import CartFooter from "@/components/atoms/cart-footer";

const HompePageContainer = () => {
  return (
    <React.Fragment>
      <CartHeader />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />

      <CartFooter />
    </React.Fragment>
  );
};

export default HompePageContainer;
