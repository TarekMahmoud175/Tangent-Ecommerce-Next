import React from "react";
import styles from "./cartHeader.module.scss";
const CartHeader = () => {
  return (
    <div className={`row ${styles.cartHeader}`}>
      <div className=" d-md-block d-none col-md-4">
        <p>Product</p>
      </div>
      <div className=" d-md-block d-none col-md-4">
        <p>Price</p>
      </div>
      <div className=" d-md-block d-none col-md-4">
        <p>QTY</p>
      </div>
    </div>
  );
};

export default CartHeader;
