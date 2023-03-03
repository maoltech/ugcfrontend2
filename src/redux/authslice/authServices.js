import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAPI, postAPI } from "../../api/api";

export const register = createAsyncThunk("auth/register", async (body) => {
  const response = await postAPI("auth/signup", { ...body });
  return response.data;
});

export const login = createAsyncThunk("auth/login", async (body) => {
  const response = await postAPI("auth/login", { ...body });
  return response.data;
});

export const googleauth = createAsyncThunk("auth/google", async () => {
  window.open("https://ugc-backend2.onrender.com/api/auth/google", "_self");
});

export const twitterauth = createAsyncThunk("auth/twitter", async () => {
  window.open("https://ugc-backend2.onrender.com/api/auth/twitter", "_self");
});
