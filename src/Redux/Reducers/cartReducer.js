const initialState = {
  cartItems: [],
  hasError: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART_SUCCESS":
      return {
        ...state,
        cartItems: action.payload.data,
      };
    case "GET_LIST_CART_SUCCESS":
      return {
        ...state,
        cartItems: action.payload,
      };
    case "HANDLE_NON_ARRAY_DATA_ERROR":
    case "HANDLE_FETCH_DATA_ERROR":
      return {
        ...state,
        hasError: true,
      };
    default:
      return state;
  }
};

export default cartReducer;
