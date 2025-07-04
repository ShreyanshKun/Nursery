import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // ✅ since it's in src/

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
