import axios from "axios";
import {
  APPROVED,
  APPROVING,
  APPROVING_FAILED,
  GETTING_ALL_REPORTS,
  GETTING_ALL_REPORTS_FAILED,
  GOT_ALL_REPORTS,
} from "..";
import { Action, BASE_URL } from "../../utils";
import { getValueForToken } from "../../utils/config";
import * as SecureStore from "expo-secure-store";

export const getReportedDisease = () => (dispatch) => {
  dispatch(Action(GETTING_ALL_REPORTS));
  getValueForToken("token").then(async (res) => {
    await axios({
      method: "get",
      url: `${BASE_URL}/users/tomato/disease`,
      headers: {
        Authorization: `Bearer ${await SecureStore.getItemAsync("token")}`,
      },
    })
      .then((response) => {
        // console.log(response.data);
        dispatch(Action(GOT_ALL_REPORTS, response.data.disease));
      })
      .catch((err) => {
        console.error(err.response);
        dispatch(Action(GETTING_ALL_REPORTS_FAILED, err.response));
      });
  });
};

export const approveReport = (id, comments) => (dispatch) => {
  dispatch(Action(APPROVING));
  getValueForToken("token").then(async (res) => {
    console.log("token:", res);
    axios({
      method: "post",
      url: `${BASE_URL}/users/tomato/disease/approve/${id}`,
      headers: {
        Authorization: `Bearer ${await SecureStore.getItemAsync("token")}`,
      },
      data: { admitted: true, comments },
    })
      .then((res) => {
        console.log(res.data);
        dispatch(Action(APPROVED, res.data));
      })
      .catch((err) => {
        console.error(err);
        dispatch(Action(APPROVING_FAILED, err.response));
      });
  });
};
