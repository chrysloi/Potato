import {
  LOGGING_USER,
  LOGGING_USER_FAILED,
  LOGOUT_USER,
  REGISTERING_USER,
  REGISTERING_USER_FAILED,
  USER_LOGGED_IN,
  USER_REGISTERED,
} from "..";

const initialState = {
  isLoggingUser: false,
  isRegisteringUser: false,
  isLoggedin: false,
  isLoggingOut: false,
  registeredUser: {},
  loggedInUser: {},
  userType: null,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTERING_USER:
      return {
        ...state,
        isRegisteringUser: true,
      };
    case USER_REGISTERED:
      return {
        ...state,
        isRegisteringUser: false,
        isLoggedin: true,
        registeredUser: payload,
        loggedInUser: payload,
      };
    case REGISTERING_USER_FAILED:
      return {
        ...state,
        isRegisteringUser: false,
        error: payload,
      };

    case LOGGING_USER:
      return {
        ...state,
        isLoggingUser: true,
      };
    case USER_LOGGED_IN:
      return {
        ...state,
        isLoggingUser: false,
        isLoggedin: true,
        loggedInUser: payload,
      };
    case LOGGING_USER_FAILED:
      return {
        ...state,
        isLoggingUser: false,
        error: payload,
      };

    case LOGOUT_USER:
      return {
        ...state,
        isLogging: false,
        isLoggedin: false,
        isLoggingOut: false,
        registeredUser: {},
        loggedInUser: {},
        error: null,
      };

    default:
      return state;
  }
};
