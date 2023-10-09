'use client'
import React from "react";
import ProductCard from "@/components/molcules/product-card";
import { ProductsResponse } from "@/common/types/productsResponse";
import { useSelector } from "react-redux";

type ShopPageContainerProps = {
  productsRes: ProductsResponse;
};
const ShopPageContainer = ({ productsRes }: ShopPageContainerProps) => {
  // @ts-ignore
  let cart = useSelector((state) => state?.cart?.cart);
  return (
    <React.Fragment>
      <h3>Products</h3>
      <div className="row my-3 align-items-stretch">
        {productsRes.products?.map((product) => (
          <div
            className="col-md-4 col-sm-6 col-xs-12 my-2"
            key={`products Section ==> product_ID:${product.id},Product_title:${product.title}`}
          >
            <ProductCard product={product} cart={cart} />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default ShopPageContainer;
