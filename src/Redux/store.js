import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Reducers/productReducer";
import cartReducer from "./Reducers/cartReducer";
import { totalReducer } from "./Reducers/totalReducer";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    total: totalReducer,
    sepatu: sepatuReducer,
  },
});


export default store;
