import {ActionTypes} from "../constants/index";
import {handleActions} from "redux-actions";

const defaultState = {
  transactions: [],
  count: 0,
  logMessage: '',
  pendingTransaction: [],
  pendingMessage: ''
};

export default handleActions({

  // [ActionTypes.getDataRequestPayment]: (state) => ({...state}),
  //[ActionTypes.getDataResponsePayment]: (state, {payload}) => ({...state, usersList: payload}),
  [ActionTypes.getDataResponseTransactions]: (state, {payload}) => {
    return ({...state, transactions: payload.list, count: payload.count, logMessage: payload.logMessage});
  },

  [ActionTypes.getDataResponsePending]: (state, {payload}) => {
    return ({...state, pendingTransaction: payload.pendingList, pendingMessage: payload.pendingMessage});
  }
}, defaultState);
