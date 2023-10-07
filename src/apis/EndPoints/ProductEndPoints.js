export const ProductEndPoints = {
  getCategories: {
    url: (params) => `/categories/${params}`,
    method: "GET",
  },
  getCategoryBySlug: {
    url: (slug) => `/categories/${slug}/`,
    method: "GET",
  },
  getSubCategory: {
    url: (slug) => `/subcategories/?category__slug=${slug}`,
    method: "GET",
  },
  getCategoryOffers: {
    url: (params) => `/category-offers/${params}`,
    method: "GET",
  },
  getProductsList: {
    url: (params) => `/products/${params}`,
    method: "GET",
  },
  getProductDetails: {
    url: (slug) => `/products/${slug}/`,
    method: "GET",
  },
  getProductAccessories: {
    url: (slug, params) =>
      `/products/${slug}/product_related_accessories/${params}`,
    method: "GET",
  },
  getProductAccessoriesPreorder: {
    url: (slug, params) =>
      `/products/${slug}/pre_order_related_accessories/${params}`,
    method: "GET",
  },
  getBrands: {
    url: (params) => `/brands/${params}`,
    method: "GET",
  },
  getSlider: {
    url: `/sliders/`,
    method: "GET",
  },
  getCartRelatedAccessories: {
    url: (params) => `/products/cart_related_accessories/${params}`,
    method: "GET"
  },
  getCampaigns: {
    url: '/campaign/',
    method: "GET"
  },

  getProductDetailsForInstallment: {
    url: (slug) => `/products/${slug}/product_affodability_details/`,
    method: "GET"
  },

  downloadPdf: {
    url: `/affordability/`,
    method: "POST"
  }

};
