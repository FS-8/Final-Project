import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Reducers/productReducer";
import cartReducer from "./Reducers/cartReducer";
import { totalReducer } from "./Reducers/totalReducer";
import sepatuReducer from "./Reducers/sepatuReducer";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    total: totalReducer,
    sepatu: sepatuReducer,
  },
});

export default store;
