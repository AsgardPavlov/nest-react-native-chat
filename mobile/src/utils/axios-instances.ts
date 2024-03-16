import axios from "axios";
import { encode as btoa } from "base-64";

const encodedOmiseSecretKey = btoa(
  `${process.env.EXPO_PUBLIC_OMISE_SECRET_KEY as string}:`
);
const encodedOmisePublicKey = btoa(
  `${process.env.EXPO_PUBLIC_OMISE_PUBLIC_KEY as string}:`
);

export const omiseAxiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_OMISE_API_URL as string,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Basic ${encodedOmiseSecretKey}`
  },
  withCredentials: true
});

export const omiseVaultAxiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_OMISE_VAULT_API_URL as string,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: `Basic ${encodedOmisePublicKey}`
  },
  withCredentials: true
});
