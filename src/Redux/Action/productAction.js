import axios from "axios";

export const fetchProductSuccess = (product) => ({
  type: "FETCH_PRODUCT_SUCCESS",
  payload: product,
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
