import React from "react";
import ButtonComponent from "@/components/atoms/button";
import styles from "./cartFooter.module.scss";
import { handleCurrency } from "@/utils/handleCurrency";

type CartFooterProps = {
  CartTotal: number;
};

const CartFooter = ({ CartTotal }: CartFooterProps) => {
  return (
    <div className="row justify-content-md-end">
      <div className="col-12 d-flex flex-column align-items-end">
        <div className={`text-md-start ${styles.cartFooterData}`}>
          <p>Total: {handleCurrency(CartTotal)}</p>
          <ButtonComponent className={styles.checoutbtn}>
            Checkout
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default CartFooter;
