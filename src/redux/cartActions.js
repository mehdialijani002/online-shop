export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product,
});

export const removeItem = (productId) => ({
  type: "REMOVE_ITEM",
  payload: productId,
});

export const updateQuantity = (productId, quantity) => ({
  type: "UPDATE_QUANTITY",
  payload: { productId, quantity },
});

export const clearCart = () => ({
  type: "CLEAR_CART",
});
