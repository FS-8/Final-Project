import axios from "axios";

export const fetchProductSuccess = (product) => ({
  type: "FETCH_PRODUCT_SUCCESS",
  payload: product,
});

export const addToCartSuccess = (cartItem) => ({
  type: "ADD_TO_CART_SUCCESS",
  payload: cartItem,
});

export const fetchProductById = (productId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        // "http://localhost:3000/products/656445f127e00af45feb3cf7"
        `http://localhost:3000/products/${productId}`
      );
      dispatch(fetchProductSuccess(response.data));
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };
};

export const addToCart = (product, quantity, color, size) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3000/users/cart", {
        productId: product.id,
        quantity,
        color,
        size,
      });
      dispatch(addToCartSuccess(response.data));
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };
};
