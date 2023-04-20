import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./productslice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  }
});

