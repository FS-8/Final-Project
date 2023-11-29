import { configureStore } from "@reduxjs/toolkit";
import sepatuReducer from "./reducer/sepatuReducer";

const store = configureStore({
  reducer: {
    sepatu: sepatuReducer,
  },
});

export default store;
