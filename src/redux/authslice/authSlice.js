import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./authServices";

const initialState = {
  user: {},
  isLoading: "",
  isError: "",
  isSuccess: "",
};

export const statusActions = {
  login: {
    loading: "loginpending",
  },
  register: {
    loading: "registerpending",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.isLoading = statusActions.login.loading;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = "";
      state.user = action.payload.data;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = "";
    });
    builder.addCase(register.pending, (state, action) => {
      state.isLoading = statusActions.register.loading;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoading = "";
      state.user = action.payload.data;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isLoading = "";
    });
  },
});

export default authSlice.reducer;
