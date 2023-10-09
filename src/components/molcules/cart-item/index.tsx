import Counter from "@/components/atoms/counter";
import React from "react";
import styles from "./cartItem.module.scss";
import { handleCurrency } from "@/utils/handleCurrency";

const CartItem = ({}) => {
  const product = {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
  };
  const hasDiscount = product.discountPercentage > 0
  const PriceBeforDiscount = parseFloat((product.price / (1 - product.discountPercentage / 100)).toFixed(2))
  return (
    <div className="row">
      <div className="col-md-4 d-flex align-items-center gap-2">
        <img
          src={product.thumbnail}
          alt={product.title}
          className={styles.productImage}
        />
        <p className={styles.productName}>{product.title}</p>
      </div>

      <div className="col-md-4 cart-item-details d-flex align-items-center gap-3">
        <p className={styles.price}>{handleCurrency(product.price)}</p>
        {hasDiscount && (<p className={styles.priceBeforeDiscount}> {handleCurrency(PriceBeforDiscount)}</p>)}
      </div>

      <div className="col-md-4 d-flex align-items-center">
        <Counter />
      </div>
    </div>
  );
};

export default CartItem;
