import React from "react";
import styles from "./search.module.scss";
import InputComponent from "@/components/atoms/input";
import ButtonComponent from "@/components/atoms/button";
import SearchSuggestionItem from "@/components/atoms/search-suggestion-item";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';


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

  return (
    <div className={`d-flex ${styles.searchContainer}`}>
      <InputComponent className={styles.searchInput} />
      <ButtonComponent className={styles.searchbtn}>
        <img src="/icons/search-icon.svg" alt="search icon" />
      </ButtonComponent>
      <ul className={styles.searchSuggestion} >
        {[1, 2, 3, 4, 5].map((_product) => (
          <SearchSuggestionItem product={product} />
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
