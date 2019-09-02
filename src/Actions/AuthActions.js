import { DO_AUTH, DO_DE_AUTH, REQUEST_API } from "./types";

export const doAuth = payload => {
  return {
    type: DO_AUTH,
    payload: payload
  };
};

export const doDeAuth = () => {
  return {
    type: DO_DE_AUTH,
    payload: {}
  };
};

export const requestApi = () => {
  return {
    type: REQUEST_API,
    payload: {}
  };
};
