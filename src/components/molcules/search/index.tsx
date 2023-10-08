"use client";

import React, { useCallback, useRef, useState } from "react";
import styles from "./search.module.scss";
import InputComponent from "@/components/atoms/input";
import ButtonComponent from "@/components/atoms/button";
import SearchSuggestionItem from "@/components/atoms/search-suggestion-item";
import { useRouter, useSearchParams } from "next/navigation";
import { Product } from "@/common/types/product";
import UseSetQUeryParams from "@/hooks/useSetQueryParam";

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

const SearchComponent = () => {
  const [InputFocused, SetInputFocused] = useState<Boolean>(false);
  const [SearchValue, setSearchValue] = useState<string>("");
  const [SearchSuggestion, setSearchSuggestion] = useState<Product[]>([]);
  const router = useRouter();

  const InputRef = useRef<HTMLInputElement>(null);

  const shouldShowSuggestion =
    SearchSuggestion.length && SearchValue && InputFocused;

  const [ pathname, createQueryString] = UseSetQUeryParams();

  return (
    <div className={`d-flex ${styles.searchContainer}`}>
      <InputComponent
        className={styles.searchInput}
        value={SearchValue}
        setValue={setSearchValue}
        Inputref={InputRef}
        handleFocus={() => SetInputFocused(true)}
        handleBlur={() => SetInputFocused(false)}
      />
      <ButtonComponent
        className={styles.searchbtn}
        onClick={() => {
          // @ts-ignore
          router.push(pathname + "?" + createQueryString("search", SearchValue));
        }}
      >
        <img src="/icons/search-icon.svg" alt="search icon" />
      </ButtonComponent>
      <ul
        className={`${styles.searchSuggestion} ${
          !shouldShowSuggestion ? styles.hide : ""
        }`}
      >
        {[1, 2, 3, 4, 5].map((_product, index) => (
          <SearchSuggestionItem product={product} key={"heiueio" + index} />
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
