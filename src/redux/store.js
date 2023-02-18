import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authslice/authSlice";
import servicesReducer from "./servicesSlice/servicesSlice";

export const store = configureStore({
  reducer: {
    services: servicesReducer,
    auth: authSlice,
  },
});
