import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/Auth/AuthSlice";
import cartReducer from "../Features/Cart/CartSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
});
