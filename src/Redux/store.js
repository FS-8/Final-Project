import { configureStore } from '@reduxjs/toolkit';
import productReducer from './Reducers/productReducer';
import cartReducer from './Reducers/cartReducer';
import { totalReducer } from './Reducers/totalReducer';
import sepatuReducer from './Reducers/sepatuReducer';
import userReducer from './Reducers/userReducer';
import orderReducer from './Reducers/orderReducer';

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    total: totalReducer,
    sepatu: sepatuReducer,
    user: userReducer,
    order: orderReducer,
  },
});

export default store;
