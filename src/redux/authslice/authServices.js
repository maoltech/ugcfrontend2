import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
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
  window.open(
    "https://ugc-backend2.onrender.com/api/auth/google",
    "popup",
    "popup=true"
  );
  // const response = await getAPI("auth/google");
  // console.log(response);
  // // window.open(response);
  // return response;
});

export const twitterauth = createAsyncThunk("auth/twitter", async () => {
  window.open(
    "https://ugc-backend2.onrender.com/api/auth/twitter",
    "popup",
    "popup=true"
  );
});
