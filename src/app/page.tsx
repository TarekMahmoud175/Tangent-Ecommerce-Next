import React from "react";
import ShopPageContainer from "@/components/pages/shop-container";
import { RequestObject } from "@/common/types/requestObject";
import { ProductServices } from "@/apis/Services/ProductServices";
import calcPage from "@/utils/handleRequestedPage";

type ShopPropsType = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function Shop({ searchParams }: ShopPropsType) {
  let RequsetObject: RequestObject = {
    skip: searchParams?.page
      ? calcPage(parseInt(searchParams?.page as string)) * 9
      : "",
    limit: 9,
  };
  const products = await ProductServices.getProducts(RequsetObject);
  return <ShopPageContainer productsRes={products} />;
}
