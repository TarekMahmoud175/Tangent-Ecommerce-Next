import React from "react";
import ProductCard from "@/components/molcules/product-card";
import { ProductsResponse } from "@/common/types/productsResponse";

type ShopPageContainerProps = {
  productsRes: ProductsResponse;
};
const ShopPageContainer = ({ productsRes }: ShopPageContainerProps) => {
  return (
    <React.Fragment>
      <h3>Products</h3>
      <div className="row my-3 align-items-stretch">
        {productsRes.products?.map((product) => (
          <div className="col-md-4 col-sm-6 col-xs-12 my-2 ">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default ShopPageContainer;
