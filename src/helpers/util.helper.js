import cloneDeep from "clone-deep";
import { ADMIN_URLS, PUBLIC_URLS } from "../constants/USER_URLS";
export const makeId = (length = 27) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const sleep = (delay) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export const clone = cloneDeep;

export const isItPublicURL = (pathname) => {
  return Object.values(PUBLIC_URLS).find((key) => key === pathname);
};

export const isItAdminURL = (pathname) => {
  return Object.values(ADMIN_URLS).find((key) => key === pathname);
};
