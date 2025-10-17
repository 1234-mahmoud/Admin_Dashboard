import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./dashboardSlice"; //alias
import cartReducer from "./cartSlice";
export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    cart: cartReducer,
  },
});
