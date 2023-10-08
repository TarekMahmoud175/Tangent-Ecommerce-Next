import React from "react";
import { Product } from "@/common/types/product";
import styles from "./product.module.scss";
import ButtonComponent from "@/components/atoms/button";
import { handleCurrency } from "@/utils/handleCurrency";

type productCardProps = {
  product: Product;
};

const ProductCard = ({ product }: productCardProps) => {

  handleCurrency(1500)
  return (
    <div className={`card ${styles.productCard} h-100`}>
      <img
        src={product.thumbnail}
        className={`card-img-top ${styles.productImage}`}
        alt={product.title}
      />

      <div className={`card-body ${styles.productCardBody}`}>
        <h5 className={`card-title ${styles.productTitle}`}>{product.title}</h5>
        <p className={`card-text ${styles.productDescription}`}>
          {product.description}
        </p>

        <div
          className={`d-flex justify-content-between align-items-center ${styles.productInfo}`}
        >
          <p className={`card-text ${styles.productPrice}`}>
            <span className={styles.originalPrice}>
              {handleCurrency(product.price)}
            </span>
            {handleCurrency(
              Math.round(
                product.price -
                  (product.price * product.discountPercentage) / 100
              )
            )}
          </p>
        </div>

        <ButtonComponent className={`${styles.atc}`}>
          Add to Cart
        </ButtonComponent>
      </div>
    </div>
  );
};

export default ProductCard;
