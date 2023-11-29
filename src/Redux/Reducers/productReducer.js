const initialState = {
  products: {},
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT_SUCCESS":
      return {
        ...state,
        products: action.payload.data,
      };
    default:
      return state;
  }
};

export default productReducer;
