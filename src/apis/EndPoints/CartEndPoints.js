export const CartEndPoints = {
  upsertCartProduct: {
    url: `/cart-products/`,
    method: `POST`,
  },
  saveBulkIncart: {
    url: `/cart-products/bulk_add/`,
    method: "POST",
  },
  getCartProducts: {
    url: `/cart-products/`,
    method: "GET",
  },
  deleteCartProduct: {
    url: (Prod_id) => `/cart-products/${Prod_id}/`,
    method: "DELETE",
  },
  getCartDetails: {
    url: "/carts/me/",
    method: "GET",
  },

  /* orders */
  placeOrder: {
    url: `/orders/`,
    method: "POST",
  },
  placeOfflineOrder: {
    url: `/orders/create_offline_order/`,
    method: "POST",
  },
  verifyPromoCode: {
    url: (code, total) => `/promotions/${code}/?total=${total}`,
    method: "GET",
  },
  getOrderDetails: {
    url: (id) => `/orders/${id}`,
    method: `GET`,
  },
  getUserOrders: {
    url: `/orders`,
    method: `GET`,
  },
  cancelOrder: {
    url: (id) => `/orders/${id}/cancel_order/`,
    method: "POST",
  },
  getShippingFee: {
    url: `/shipping-fee/`,
    method: "GET",
  },
  getCancelationReasons: {
    url: `/cancelation-reasons/`,
    method: "GET",
  },
  preorder: {
    url: `/pre-order/`,
    method: "POST",
  },
  getComplaintReasons: {
    url: `/complaint-reasons/`,
    method: "GET",
  },
  submitComplaint: {
    url: `/complaints/`,
    method: "POST",
  },
};
