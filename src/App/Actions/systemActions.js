import * as a from "../Constants/systemTypes";

export const setDeviceStatus = mobile => {
  return {
    type: a.SET_DEVICE_STATUS,
    mobile,
  };
};
