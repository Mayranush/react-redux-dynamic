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
    console.log(list.length,"list");
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
    console.log(pendingList.length,"plist");
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
    console.log(data,"aystegh");
    let balance = data.val;
    let monthlyFee = data.monthlyFee;
    return dispatch(getDataResponseBalance({balance,monthlyFee}));
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