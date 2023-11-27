const initialState = {
  products: {},
  cart: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT_SUCCESS":
      return {
        ...state,
        products: action.payload.data,
      };

    case "ADD_TO_CART_SUCCESS":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    default:
      return state;
  }
};

export default productReducer;
