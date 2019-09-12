import { DO_AUTH, DO_DE_AUTH, REQUEST_AUTH } from "../Constants/authTypes";

export const doAuth = payload => {
  return {
    type: DO_AUTH,
    payload,
  };
};

export const doDeAuth = () => {
  return {
    type: DO_DE_AUTH,
  };
};

export const requestAuth = () => {
  return {
    type: REQUEST_AUTH,
  };
};
