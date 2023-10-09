"use client";

import React, { useCallback, useRef, useState } from "react";
import styles from "./search.module.scss";
import InputComponent from "@/components/atoms/input";
import ButtonComponent from "@/components/atoms/button";
import SearchSuggestionItem from "@/components/atoms/search-suggestion-item";
import { useRouter } from "next/navigation";
import UseSetQUeryParams from "@/hooks/useSetQueryParam";
import useSearchProduct from "@/hooks/requests-hooks/useSearchProducts";

type SearchProps = {
  className?: string;
};

const SearchComponent = ({ className }: SearchProps) => {
  const [InputFocused, SetInputFocused] = useState<Boolean>(false);
  const [SearchValue, setSearchValue] = useState<string>("");
  const [changeSearchValue, products] = useSearchProduct();

  const router = useRouter();
  const InputRef = useRef<HTMLInputElement>(null);
  const shouldShowSuggestion = products.length && SearchValue && InputFocused;
  const [pathname, createQueryString] = UseSetQUeryParams();

  return (
    <div className={`d-flex ${styles.searchContainer} ${className}`}>
      <InputComponent
        className={styles.searchInput}
        value={SearchValue}
        setValue={(e) => {
          setSearchValue(e);
          changeSearchValue(e);
        }}
        Inputref={InputRef}
        handleFocus={() => SetInputFocused(true)}
        handleBlur={() => SetInputFocused(false)}
      />
      <ButtonComponent
        className={styles.searchbtn}
        onClick={() => {
          router.push(
            // @ts-ignore
            pathname + "?" + createQueryString("search", SearchValue)
          );
        }}
      >
        <img src="/icons/search-icon.svg" alt="search icon" />
      </ButtonComponent>
      <ul
        className={`${styles.searchSuggestion} ${
          !shouldShowSuggestion ? styles.hide : ""
        }`}
      >
        {Boolean(products.length) &&
          products.map((product) => (
            <SearchSuggestionItem
              product={product}
              key={`SearchSuggestion ==> product_ID:${product.id},product_title:${product.title}`}
            />
          ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
