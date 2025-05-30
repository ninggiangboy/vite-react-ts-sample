import axios from "axios";
import type {
  AxiosInstance,
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";
import axiosRetry from "axios-retry";

// Create axios instance with base configuration
const http: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Configure retry mechanism
axiosRetry(http, {
  retries: 3,
  retryDelay: (retryCount: number) => {
    return retryCount * 1000; // Progressive delay between retries
  },
  retryCondition: (error: AxiosError) => {
    // Only retry on GET requests with network errors or 5xx server errors
    return Boolean(
      error.config?.method === "get" &&
        (axiosRetry.isNetworkOrIdempotentRequestError(error) ||
          (error.response?.status && error.response.status >= 500))
    );
  },
});

// Request interceptor
http.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // You can add auth token here if needed
    // const token = ...
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor
http.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    // Handle errors globally here
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Response error:", error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Request error:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default http;
