import { Product } from "./product";


export interface ProductsResponse {
    total: number;
    skip: number;
    limit: number;
    products: Product[];
}