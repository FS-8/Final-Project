import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Reducers/productReducer";

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
