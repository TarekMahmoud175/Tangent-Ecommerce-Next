import React, { useEffect, useState, useMemo } from "react";
import { Product } from "@/common/types/product";
import styles from "./product.module.scss";
import ButtonComponent from "@/components/atoms/button";
import { handleCurrency } from "@/utils/handleCurrency";
import UseCart from "@/hooks/useCart";
import Counter from "@/components/atoms/counter";
import { CartItem } from "@/common/types/cartItem";
import { debounce } from "@/utils/depounce";
type productCardProps = {
  product: Product;
  cart: CartItem[];
};

const ProductCard = ({ product, cart = [] }: productCardProps) => {
  const { saveToCart, removeFromCart, changeQuantity } = UseCart();
  const [CartProduct, setCartProduct] = useState<CartItem | undefined>(
    undefined
  );

  const increaseValue = useMemo(
    () => debounce((e: number) => changeQuantity(product, e), 500),
    []
  );

  const decreaseValue = useMemo(
    () => debounce((e: number) => changeQuantity(product, e), 500),
    []
  );

  useEffect(() => {
    let isInCart = cart.find((item: CartItem) => item.id == product.id);
    setCartProduct(isInCart);
  }, [cart]);

  return (
    <div className={`card ${styles.productCard} h-100`}>
      <img
        src={product.thumbnail}
        className={`card-img-top ${styles.productImage}`}
        alt={product.title}
        loading="lazy"
      />

      <div
        className={`card-body ${styles.productCardBody} d-flex flex-column justify-content-between`}
      >
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
            <p className={`card-text ${styles.productPrice} d-flex flex-wrap`}>
              <span className={styles.originalPrice}>
                {handleCurrency(product.price)}
              </span>
              <span>
                {handleCurrency(
                  Math.round(
                    product.price -
                      (product.price * product.discountPercentage) / 100
                  )
                )}
              </span>
            </p>
          </div>

          {CartProduct ? (
            <div className="d-flex align-items-center justify-content-between flex-wrap  mt-3">
              <Counter
                counterStart={CartProduct.quantity}
                className={styles.counterContainer}
                handleDecrease={decreaseValue}
                handleIncrease={increaseValue}
                onZeroReach={() => removeFromCart(CartProduct)}
              />
              <ButtonComponent
                className={styles.removeBtn}
                onClick={() => removeFromCart(CartProduct)}
              >
                Remove
              </ButtonComponent>
            </div>
          ) : (
            <ButtonComponent
              className={`${styles.atc}`}
              onClick={() => saveToCart({ ...product, quantity: 1 })}
            >
              Add to Cart
            </ButtonComponent>
          )}
        </section>
      </div>
    </div>
  );
};

export default ProductCard;
