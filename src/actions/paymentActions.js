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

