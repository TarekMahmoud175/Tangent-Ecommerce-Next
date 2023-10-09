import Counter from "@/components/atoms/counter";
import React from "react";
import styles from "./cartItem.module.scss";
import { handleCurrency } from "@/utils/handleCurrency";
import { CartItem } from "@/common/types/cartItem";

type CartItemProps = {
  product: CartItem;
};

const CartItemComponent = ({ product }: CartItemProps) => {
  const hasDiscount = product.discountPercentage > 0;
  const PriceBeforDiscount = parseFloat(
    (product.price / (1 - product.discountPercentage / 100)).toFixed(2)
  );
  return (
    <div className={`row ${styles.cartItem} my-2 py-2`}>
      <div className="col-md-4 d-flex align-items-center justify-content-center justify-content-md-start flex-column flex-md-row gap-2">
        <img
          src={product.thumbnail}
          alt={product.title}
          className={styles.productImage}
        />
        <div className="d-flex">
          <p className={styles.productName}>{product.title}</p>
        </div>
      </div>

      <div className="col-md-4  cart-item-details d-flex align-items-center justify-content-center justify-content-md-start gap-3">
        <p className={styles.price}>{handleCurrency(product.price)}</p>
        {hasDiscount && (
          <p className={styles.priceBeforeDiscount}>
            {handleCurrency(PriceBeforDiscount)}
          </p>
        )}
      </div>

      <div className="col-md-4 d-flex align-items-center justify-content-center justify-content-md-start">
        <Counter counterStart={product.quantity} />
      </div>
    </div>
  );
};

export default CartItemComponent;
