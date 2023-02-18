import { createAsyncThunk } from "@reduxjs/toolkit";
import { postAPI } from "../../api/api";

export const register = createAsyncThunk("auth/register", async (body) => {
  const response = await postAPI("auth/signup", { ...body });
  return response.data;
});

export const login = createAsyncThunk("auth/login", async (body) => {
  const response = await postAPI("auth/login", { ...body });
  return response.data;
});
