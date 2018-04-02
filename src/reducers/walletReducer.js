import {ActionTypes} from "../constants/index";
import {handleActions} from "redux-actions";


const defaultState = {
  transactions: [],
  count: 0,
  logMessage: '',
  pendingTransaction: [],
  pendingMessage: '',
  monthlyFee: false,
  balance: 0,
  subsriptionHistory: [],
  subsriptionHistoryCount: 0,
  subsriptionHistoryMessage: ''
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
  },
  [ActionTypes.getDataResponsePayMonthlyFee]: (state, {payload}) => {
    return ({...state,  monthlyFee: payload.monthlyFee});
  },
  [ActionTypes.getDataResponseMonthlyFee]: (state, {payload}) => {
    return ({
      ...state,
      subsriptionHistory: payload.subsriptionHistory,
      subsriptionHistoryCount: payload.subsriptionHistoryCount,
      subsriptionHistoryMessage: payload.subsriptionHistoryMessage
    });
  }
}, defaultState);
