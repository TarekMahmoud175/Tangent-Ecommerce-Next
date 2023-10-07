import React from "react";
import styles from "./searchSuggestionItem.module.scss";
import { Product } from "@/common/types/product";

type ProductItemProps = {
  product: Product;
};

const SearchSuggestionItem = ({ product }: ProductItemProps) => {
  return (
    <li className={styles.SearchItem}>
      <img
        src={product.thumbnail}
        alt={product.title}
        className={styles.productImage}
      />
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{product.title}</h3>
        <p className={styles.productPrice}>${product.price}</p>
      </div>
    </li>
  );
};

export default SearchSuggestionItem;
