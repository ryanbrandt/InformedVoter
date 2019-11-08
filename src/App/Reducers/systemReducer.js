import * as a from "../Constants/systemTypes";

const initialState = {
  mobile: false,
  apiErrors: null,
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

    case a.API_ERROR: {
      const { error } = action;

      return {
        ...state,
        apiErrors: error,
      };
    }

    default: {
      return state;
    }
  }
}
