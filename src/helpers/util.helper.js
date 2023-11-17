import cloneDeep from "lodash/cloneDeep";
import { PUBLIC_URLS, URLS } from "../constants/URLS";
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
  return PUBLIC_URLS.includes(pathname) || pathname.includes(URLS.INQUIRY);
};
