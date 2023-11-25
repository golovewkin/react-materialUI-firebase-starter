import cloneDeep from "clone-deep";
import { PUBLIC_URLS, USER_URLS } from "../constants/URLS";
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

export const isUserURL = (pathname) => {
  return Object.values(USER_URLS).find((key) => key === pathname);
};

export const getInviteUrl = (inquiry) => {
  return `${PUBLIC_URLS.ACCEPT_INVITE}/${inquiry.id}`;
};

export const transformForAutoComplete = (data, prop) => {
  return data.map((item) => ({ id: item.id, label: item[prop] }));
};

export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
