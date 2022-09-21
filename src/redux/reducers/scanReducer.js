import {
  REPORTING_SCAN,
  REPORT_SCAN_FAILED,
  REPORT_SCAN_SUCCESS,
  RESET,
  SCANNING,
  SCAN_FAILED,
  SCAN_SUCCESS,
} from "..";

const initialState = {
  isScanning: false,
  reportingscan: false,
  result: {},
  reportedScan: {},
  scanDone: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SCANNING:
      return {
        ...state,
        isScanning: true,
        scanDone: false,
      };
    case SCAN_SUCCESS:
      return {
        ...state,
        isScanning: false,
        scanDone: true,
        result: payload,
      };
    case SCAN_FAILED:
      return {
        ...state,
        isScanning: false,
        scanDone: false,
        error: payload,
      };

    case RESET:
      return {
        ...state,
        isScanning: false,
        scanDone: false,
        result: null,
      };

    case REPORTING_SCAN:
      return {
        ...state,
        reportingscan: true,
        scanDone: false,
      };
    case REPORT_SCAN_SUCCESS:
      return {
        ...state,
        reportingscan: false,
        reportedScan: payload,
        scanDone: false,
      };
    case REPORT_SCAN_FAILED:
      return {
        ...state,
        reportingscan: false,
        error: payload,
      };

    default:
      return state;
  }
};
