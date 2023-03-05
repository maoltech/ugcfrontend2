import { createSlice } from "@reduxjs/toolkit";
import {
  login,
  register,
  googleauth,
  twitterauth,
  getProfile,
} from "./authServices";

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
  googleauth: {
    loading: "googleauthpending",
  },
  twitterauth: {
    loading: "twitterauthpending",
  },
  getProfile: {
    loading: "getProfilepending",
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
      state.user = action.payload.user;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = "";
    });
    builder.addCase(register.pending, (state) => {
      state.isLoading = statusActions.register.loading;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoading = "";
      state.user = action.payload.user;
    });
    builder.addCase(register.rejected, (state) => {
      state.isLoading = "";
    });
    builder.addCase(googleauth.pending, (state) => {
      state.isLoading = statusActions.googleauth.loading;
    });
    builder.addCase(googleauth.fulfilled, (state, action) => {
      state.isLoading = "";
      state.user = action.payload;
    });
    builder.addCase(googleauth.rejected, (state) => {
      state.isLoading = "";
    });
    builder.addCase(twitterauth.pending, (state) => {
      state.isLoading = statusActions.twitterauth.loading;
    });
    builder.addCase(twitterauth.fulfilled, (state, action) => {
      state.isLoading = "";
      state.user = action.payload.data;
    });
    builder.addCase(twitterauth.rejected, (state) => {
      state.isLoading = "";
    });
    builder.addCase(getProfile.pending, (state, action) => {
      state.isLoading = statusActions.getProifle.loading;
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.isLoading = "";
      state.user = action.payload.user;
    });
    builder.addCase(getProfile.rejected, (state, action) => {
      state.isLoading = "";
    });
  },
});

export default authSlice.reducer;
