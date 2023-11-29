// reducers.js

// Reducer untuk menyimpan total harga di Redux store
export const totalReducer = (state = 0, action) => {
  switch (action.type) {
    case "SET_TOTAL_PRICE":
      return action.payload;
    default:
      return state;
  }
};
