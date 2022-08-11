import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: process.env.API_HOST,
  timeout: 30000,
  withCredentials: false,
});

export default {};
