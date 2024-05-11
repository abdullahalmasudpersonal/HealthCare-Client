import { authkey } from "@/constants/authkey";
import { decodedToken } from "@/utils/jwt";
import {
  getFromLocalStorage,
  removeFormLocalStorage,
  setToLocalStorage,
} from "@/utils/local-storage";
import { instance as axiosInstance } from "@/helpers/axios/axiosInstance";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authkey, accessToken);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authkey);
  if (authToken) {
    const decodedData: any = decodedToken(authToken);
    return {
      ...decodedData,
      role: decodedData?.role.toLowerCase(),
    };
  }
};

export const isLogedIn = () => {
  const authToken = getFromLocalStorage(authkey);
  if (authToken) {
    if (authToken) {
      return !!authToken;
    }
  }
};

export const removeUser = () => {
  return removeFormLocalStorage(authkey);
};

export const getNewAccessToken = async () => {
  return await axiosInstance({
    url: "http://localhost:5000/api/v1/auth/refresh-token",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
};
