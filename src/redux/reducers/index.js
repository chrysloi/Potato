import { combineReducers } from "redux";
import authReducers from "./authReducers";
import usersReducer from "./usersReducer";
import scanReducer from "./scanReducer";
import reportReducer from "./reportReducer";

export default combineReducers({
  Auth: authReducers,
  Users: usersReducer,
  Scan: scanReducer,
  Report: reportReducer,
});
