import React from "react";
import { Product } from "@/common/types/product";
import styles from "./product.module.scss";
import ButtonComponent from "@/components/atoms/button";
import { handleCurrency } from "@/utils/handleCurrency";

type productCardProps = {
  product: Product;
};

const ProductCard = ({ product }: productCardProps) => {
  return (
    <div className={`card ${styles.productCard} h-100`}>
      <img
        src={product.thumbnail}
        className={`card-img-top ${styles.productImage}`}
        alt={product.title}
        loading="lazy"
      />

      <div className={`card-body ${styles.productCardBody} d-flex flex-column justify-content-between`}>
        <section>
          <h5 className={`card-title ${styles.productTitle}`}>
            {product.title}
          </h5>
          <p className={`card-text ${styles.productDescription}`}>
            {product.description}
          </p>
        </section>

        <section>
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
        </section>
      </div>
    </div>
  );
};

export default ProductCard;
