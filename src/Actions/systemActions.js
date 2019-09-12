import * as a from "../Constants/systemTypes";

export const setContentDisplay = display => {
  return {
    type: a.SET_CONTENT_DISPLAY,
    display,
  };
};
