import React from "react";
import styles from "./shop.module.scss";
import ProductCard from "@/components/molcules/product-card";

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
const ShopPageContainer = () => {
  return (
    <div className="row my-3">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_product) => (
        <div className="col-md-4 col-lg-3 col-sm-6 col-xs-12 my-2 ">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ShopPageContainer;
