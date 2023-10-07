import React from "react";
import { Product } from "@/common/types/product";

type productCardProps = {
  product: Product;
};

const ProductCard = ({ product }: productCardProps) => {
  return (
    <div className="card">
      <img
        src={product.images[0]}
        className="card-img-top"
        alt={product.title}
      />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">${product.price}</p>
        <a href="#" className="btn btn-primary">
          Add to Cart
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
