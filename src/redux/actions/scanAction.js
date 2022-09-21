import axios from "axios";
import {
  REPORTING_SCAN,
  REPORT_SCAN_SUCCESS,
  RESET,
  SCANNING,
  SCAN_FAILED,
  SCAN_SUCCESS,
} from "..";
import { Action, BASE_URL } from "../../utils";
import * as SecureStore from "expo-secure-store";
import { getValueForToken } from "../../utils/config";

export const Scan = (data) => async (dispatch) => {
  dispatch(Action(SCANNING));
  await axios({
    method: "post",
    url: "https://potato125.herokuapp.com/predict",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: data,
  })
    .then((res) => {
      console.log(res);
      dispatch(Action(SCAN_SUCCESS, res.data));
    })
    .catch((err) => {
      console.error(err);
      dispatch(Action(SCAN_FAILED, err.response.data));
    });
};

export const reportScan = (data) => async (dispatch) => {
  dispatch(Action(REPORTING_SCAN));
  getValueForToken("token").then(async () => {
    axios({
      method: "post",
      url: `${BASE_URL}/users/askexpart`,
      data: data,
      headers: {
        Authorization: `Bearer ${await SecureStore.getItemAsync("token")}`,
      },
    })
      .then((res) => {
        console.log(res);
        dispatch(Action(REPORT_SCAN_SUCCESS, res.data));
      })
      .catch((err) => {
        console.error(err.response);
        dispatch(Action(SCAN_FAILED, err.response.data));
      });
  });
};

export const resetScan = () => (dispatch) => {
  dispatch(Action(RESET, "Reset scan success"));
};
