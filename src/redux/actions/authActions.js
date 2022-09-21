import axios from "axios";
import {
  LOGGING_USER,
  LOGGING_USER_FAILED,
  LOGGING_USER_OUT,
  LOGOUT_USER,
  REGISTERING_USER,
  REGISTERING_USER_FAILED,
  USER_LOGGED_IN,
  USER_REGISTERED,
} from "..";
import { getValueForToken, removerToken, storeToken } from "../../utils/config";
import { Action, BASE_URL } from "../../utils";
import * as SecureStore from "expo-secure-store";

export const Register = (newUser) => (dispatch) => {
  dispatch(Action(REGISTERING_USER));
  axios
    .post(`${BASE_URL}/users/signup`, newUser)
    .then((res) => {
      console.log(res.data);
      const { user } = res.data;
      storeToken("token", user.token);
      dispatch(Action(USER_REGISTERED, user));
    })
    .catch((err) => {
      console.error(err);
      dispatch(Action(REGISTERING_USER_FAILED, err));
    });
};

export const LoginUser = (user) => (dispatch) => {
  dispatch(Action(LOGGING_USER));
  axios
    .post(`${BASE_URL}/users/signin`, user)
    .then((res) => {
      const { user } = res.data;
      console.log(res);
      storeToken("token", user.token);
      dispatch(Action(USER_LOGGED_IN, user));
    })
    .catch((err) => {
      console.error(err);
      dispatch(Action(LOGGING_USER_FAILED, err.response));
    });
};

export const Logout = () => async (dispatch) => {
  getValueForToken("token").then(async (res) => {
    // dispatch(Action(LOGGING_USER_OUT));
    await axios({
      method: "post",
      url: `${BASE_URL}/users/signout`,
      headers: {
        Authorization: `Bearer ${await SecureStore.getItemAsync("token")}`,
      },
    })
      .then(() => {
        removerToken();
        dispatch(Action(LOGOUT_USER));
      })
      .catch((err) => {
        console.error(err);
      });
  });
};
