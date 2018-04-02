import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import api from "../api/api";
import {errorHandler} from "./generalActions";


/////////////////////////////////////////////         add transaction to our db    ////////////////////////////////////////////////

const requestResponsePayment = createAction(ActionTypes.getDataRequestPayment);

export function getDataRequestPayment() {
  return (dispatch) => {
    return dispatch(requestResponsePayment());
  };
}

const responseResponsePayment = createAction(ActionTypes.getDataResponsePayment);

export function getDataResponsePayment(data) {
  return (dispatch) => {
    return dispatch(getPendingTransactionsList());
  };
}

export function addNewTransaction(transaction) {
  return (dispatch) => {
    dispatch(getDataRequestPayment());
    return api.addTransaction(transaction)
      .then(data => dispatch(getDataResponsePayment(data.data)))
      .catch(error => dispatch(errorHandler(error)));
  };
}

/////////////////////////////////////////////         get transactions    ////////////////////////////////////////////////

const getDataRequestTransactionsFunc = createAction(ActionTypes.getDataRequestTransactions);

export function getDataRequestTransactions() {
  return (dispatch) => {
    return dispatch(getDataRequestTransactionsFunc());
  };
}

const getDataResponseTransactionsFunc = createAction(ActionTypes.getDataResponseTransactions);

export function getDataResponseTransactions(data) {
  return (dispatch) => {
    let list = data.data;
    let count = data.count;
    let logMessage = '';
    if (list.length === 0) {
      logMessage = "There is no data to show";
    } else {
      logMessage = "";
    }
    return dispatch(getDataResponseTransactionsFunc({list, count, logMessage}));
  };
}

export function getTransactionsList(page, size) {
  return (dispatch) => {
    dispatch(getDataRequestTransactions());
    return api.getTransactions(page, size)
      .then(data => dispatch(getDataResponseTransactions(data.data)))
      .catch(error => dispatch(errorHandler(error)));
  };
}

/////////////////////////////////////////////         get pending transactions    ////////////////////////////////////////////////

const getDataRequestPending = createAction(ActionTypes.getDataRequestPending);

export function getDataRequestTrPending() {
  return (dispatch) => {
    return dispatch(getDataRequestPending());
  };
}

const getDataResponsePending = createAction(ActionTypes.getDataResponsePending);

export function getDataResponseTrPending(data) {
  return (dispatch) => {
    let pendingList = data.data;
    let pendingMessage = '';
    if (pendingList.length === 0) {
      pendingMessage = "There is no pending transaction";
    } else {
      pendingMessage = "";
    }
    return dispatch(getDataResponsePending({pendingList, pendingMessage}));
  };
}

export function getPendingTransactionsList() {
  return (dispatch) => {
    dispatch(getDataRequestTrPending());
    return api.getPendingTransactions()
      .then(data => dispatch(getDataResponseTrPending(data.data)))
      .catch(error => dispatch(errorHandler(error)));
  };
}


/////////////////////////////////////////////         get balance   ////////////////////////////////////////////////

const getDataRequestBalance = createAction(ActionTypes.getDataRequestBalance);

export function getDataRequestTrBalance() {
  return (dispatch) => {
    return dispatch(getDataRequestBalance());
  };
}

const getDataResponseBalance = createAction(ActionTypes.getDataResponseBalance);

export function getDataResponseTrBalance(data) {
  return (dispatch) => {
    let balance = data.val;
    let monthlyFee = data.monthlyFee;
    return dispatch(getDataResponseBalance({balance, monthlyFee}));
  };
}

export function getBalance() {
  return (dispatch) => {
    dispatch(getDataRequestTrBalance());
    return api.getBalance()
      .then(data => dispatch(getDataResponseTrBalance(data.data)))
      .catch(error => dispatch(errorHandler(error)));
  };
}
/////////////////////////////////////////////         get monthlee fee history    ////////////////////////////////////////////////

const getDataRequestMonthlyFeeFunc = createAction(ActionTypes.getDataRequestMonthlyFee);

export function getDataRequestMonthlyFee() {
  return (dispatch) => {
    return dispatch(getDataRequestMonthlyFeeFunc());
  };
}

const getDataResponseMonthlyFeeFunc = createAction(ActionTypes.getDataResponseMonthlyFee);

export function getDataResponseMonthlyFee(data) {
  return (dispatch) => {

    let subsriptionHistory = data.data;
    let subsriptionHistoryCount = data.count;
    let subsriptionHistoryMessage = '';
    if (subsriptionHistory.length === 0) {
      subsriptionHistoryMessage = "There is no data to show";
    } else {
      subsriptionHistoryMessage = "";
    }
    return dispatch(getDataResponseMonthlyFeeFunc({
      subsriptionHistory,
      subsriptionHistoryCount,
      subsriptionHistoryMessage
    }));
  };
}

export function getMonthlyFee(page, size) {
  return (dispatch) => {
    console.log("afsfddsgddg")
    dispatch(getDataRequestMonthlyFee());
    return api.getSubsriptionHistory(page, size)
      .then(data => dispatch(getDataResponseMonthlyFee(data.data)))
      .catch(error => dispatch(errorHandler(error)));
  };
}
/////////////////////////////////////////////        activate subscription ////////////////////////////////////////////////

const getDataRequestPayMonthlyFeeFunc = createAction(ActionTypes.getDataRequestPayMonthlyFee);

export function getDataRequestPayMonthlyFee() {
  return (dispatch) => {
    return dispatch(getDataRequestPayMonthlyFeeFunc());
  };
}

const getDataResponsePayMonthlyFeeFunc = createAction(ActionTypes.getDataResponsePayMonthlyFee);

export function getDataResponsePayMonthlyFee(data) {
  return (dispatch) => {
    let monthlyFee = true;
    return dispatch(getDataResponsePayMonthlyFeeFunc({monthlyFee}));
  };
}


export function payMonthlyFee() {
  return (dispatch) => {
    dispatch(getDataRequestMonthlyFee());
    return api.activateSubscription()
      .then(data => dispatch(getDataResponsePayMonthlyFee(data)))
      .catch(error => dispatch(errorHandler(error)));
  };
}
