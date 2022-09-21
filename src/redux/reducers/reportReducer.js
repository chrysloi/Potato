import {
  APPROVED,
  APPROVING,
  APPROVING_FAILED,
  GETTING_ALL_REPORTS,
  GETTING_ALL_REPORTS_FAILED,
  GOT_ALL_REPORTS,
} from "..";

const initialState = {
  gettingReports: false,
  approving: false,
  reportedDisease: {},
  approvedMsg: "",
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GETTING_ALL_REPORTS:
      return {
        ...state,
        gettingReports: true,
      };
    case GOT_ALL_REPORTS:
      return {
        ...state,
        gettingReports: false,
        reportedDisease: payload,
      };
    case GETTING_ALL_REPORTS_FAILED:
      return {
        ...state,
        gettingReports: false,
        error: payload,
      };

    case APPROVING:
      return {
        ...state,
        approving: true,
      };
    case APPROVED:
      return {
        ...state,
        approving: false,
        approvedMsg: payload,
      };
    case APPROVING_FAILED:
      return {
        ...state,
        approving: false,
        error: payload,
      };
    default:
      return state;
  }
};
