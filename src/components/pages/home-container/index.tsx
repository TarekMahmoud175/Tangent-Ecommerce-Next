import React from "react";
import CartItem from "@/components/molcules/cart-item";
import CartHeader from "@/components/atoms/cart-header";

const HompePageContainer = () => {
  return (
    <React.Fragment>
      <CartHeader />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </React.Fragment>
  );
};

export default HompePageContainer;
