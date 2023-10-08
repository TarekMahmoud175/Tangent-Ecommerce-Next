import { Endpoints } from "@/common/types/endpoints"

export const ProductEndPoints: Endpoints = {
  getProducts: {
    url: (query: string) => `/products${query}`,
    method: "GET"
  }



};
