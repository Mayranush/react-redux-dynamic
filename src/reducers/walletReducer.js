import {ActionTypes} from "../constants/index";
import {handleActions} from "redux-actions";

const defaultState = {
  transactions: [],
  count: 0,
  logMessage: '',
  pendingTransaction: [],
  pendingMessage: '',
  monthlyFee: false,
  balance: 0
};

export default handleActions({
  [ActionTypes.getDataResponseTransactions]: (state, {payload}) => {
    return ({...state, transactions: payload.list, count: payload.count, logMessage: payload.logMessage});
  },

  [ActionTypes.getDataResponsePending]: (state, {payload}) => {
    return ({...state, pendingTransaction: payload.pendingList, pendingMessage: payload.pendingMessage});
  },

  [ActionTypes.getDataResponseBalance]: (state, {payload}) => {
    return ({...state, balance: payload.balance, monthlyFee: payload.monthlyFee});
  }
}, defaultState);
