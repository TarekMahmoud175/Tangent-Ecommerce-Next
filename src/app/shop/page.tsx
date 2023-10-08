import React from "react";
import ShopPageContainer from "@/components/pages/shop-container";
import { RequestObject } from "@/common/types/requestObject";
import { ProductServices } from "@/apis/Services/ProductServices";

export default async function Shop() {
  let RequsetObject: RequestObject = {
    limit: 9,

  };
  const products = await ProductServices.getProducts(RequsetObject);
  console.log(products);
  return <ShopPageContainer productsRes={products} />;
}
