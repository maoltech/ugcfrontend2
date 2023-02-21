import axios from "axios";
const baseURL = "https://ugc-backend2.onrender.com/api";

const api = axios.create({
  baseURL: baseURL,
});

export const getAPI = (url, signal, param) => {
  return api.get(`${url}`, {
    signal: signal,
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    params: {},
  });
};

export const postAPI = (url, body) => {
  return api.post(`${url}`, body, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  });
};

export const putAPI = (url, body) => {
  return api.put(`${url}`, body, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  });
};

export const patchAPI = (url, body) => {
  return api.patch(`${url}`, body, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  });
};
