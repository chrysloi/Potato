import axios from "axios";
import { Action, BASE_URL } from "../../utils";
import * as SecureStore from "expo-secure-store";
import {
  CREATING_USER,
  CREATING_USER_FAILED,
  DELETING_USER,
  DELETING_USER_FAILED,
  GETTING_ALL_USERS,
  GETTING_ALL_USERS_FAILED,
  GOT_ALL_USERS,
  USER_CREATED,
  USER_DELETED,
} from "..";
import { getValueForToken } from "../../utils/config";

export const getAllUsers = () => async (dispatch) => {
  dispatch(Action(GETTING_ALL_USERS));
  getValueForToken("token").then(async () => {
    await axios({
      method: "get",
      url: `${BASE_URL}/rab/user`,
      headers: {
        Authorization: `Bearer ${await SecureStore.getItemAsync("token")}`,
      },
    })
      .then((res) => {
        dispatch(Action(GOT_ALL_USERS, res.data.users));
      })
      .catch((err) => {
        console.error(err);
        dispatch(Action(GETTING_ALL_USERS_FAILED, err));
      });
  });
};

export const CreateUser = (newUser) => (dispatch) => {
  dispatch(Action(CREATING_USER));
  getValueForToken("token").then(async (res) => {
    await axios({
      method: "post",
      url: `${BASE_URL}/rab/register/user`,
      data: newUser,
      headers: {
        Authorization: `Bearer ${await SecureStore.getItemAsync("token")}`,
      },
    })
      .then((res) => {
        // console.log(res.data);
        dispatch(Action(USER_CREATED, res.data));
      })
      .catch((err) => {
        console.error(err);
        dispatch(Action(CREATING_USER_FAILED, err));
      });
  });
};

export const deleteUser = (phone) => async (dispatch) => {
  dispatch(Action(DELETING_USER));
  getValueForToken("token").then(async (res) => {
    await axios({
      method: "delete",
      url: `${BASE_URL}/rab/user/${phone}`,
      headers: {
        Authorization: `Bearer ${await SecureStore.getItemAsync("token")}`,
      },
    })
      .then((res) => {
        console.log(res);
        dispatch(Action(USER_DELETED, res));
      })
      .catch((err) => {
        console.error(err);
        dispatch(Action(DELETING_USER_FAILED, err));
      });
  });
};
