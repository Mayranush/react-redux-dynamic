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
    //   return dispatch(responseResponseBotPost({botStatus, botStart}));
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
    console.log(data, "data ==============")
    let list = data.data;
    let count = data.count;
    let logMessage = '';
    if (data.length === 0) {
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
    console.log(pendingList,"pendLIIIISt");
    let pendingMessage = '';
    if (data.length === 0) {
      pendingMessage = "There is no pending transaction";
    } else {
      logMessage = "";
    }
    console.log(data, "pending");
    return dispatch(getDataResponsePending({pendingList, pendingMessage}));
  };
}

export function getPendingTransactionsList() {
  return (dispatch) => {
    console.log("mtav")
    dispatch(getDataRequestTrPending());
    return api.getPendingTransactions()
      .then(data => dispatch(getDataResponseTrPending(data.data)))
      .catch(error => dispatch(errorHandler(error)));
  };
}

