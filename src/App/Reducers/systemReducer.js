import * as a from "../Constants/systemTypes";

const initialState = {
  mobile: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case a.SET_DEVICE_STATUS: {
      const { mobile } = action;

      return {
        ...state,
        mobile,
      };
    }

    default: {
      return state;
    }
  }
}
