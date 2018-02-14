import {ActionTypes} from "../constants/index";
import {handleActions} from "redux-actions";

const defaultState = {
      log: [],
      logMessage: ''
    };

export default handleActions({
  [ActionTypes.getDataRequestTwTipLogs]: (state) => ({...state}),
  [ActionTypes.getDataResponseTwTipLogs]: (state, {payload}) => ({...state, log: payload.log, logMessage: payload.logMessage})
}, defaultState);


