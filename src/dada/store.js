import { configureStore } from "@reduxjs/toolkit";
import sepatuReducer from "./Reducer/sepatuReducer";

const store = configureStore({
  reducer: {
    sepatu: sepatuReducer,
  },
});

export default store;
