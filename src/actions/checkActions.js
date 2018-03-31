
import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import store from "store";
import {tools} from "../resources";
import api from "../api/api";
import {push} from "react-router-redux";
import {changeSuccessMessage} from "./successActions";

/////////////////////////////////////////////           Activate Account      ////////////////////////////////////////////////

const requestResponseActivateAccount = createAction(ActionTypes.getDataRequestActivateAccount);

export function getDataRequestActivateAccount() {
  return (dispatch) => {
    return dispatch(requestResponseActivateAccount());
  };
}

const responseResponseActivateAccount = createAction(ActionTypes.getDataResponseActivateAccount);

export function getDataResponseActivateAccount(data) {
  return (dispatch) => {
    let message = 'You are successfully registered! Sign in ';
    let hrefToSignIn = true;
    store.dispatch(push('/message'));
    dispatch(changeSuccessMessage(message, hrefToSignIn));
  };
}

const errorResponseActivateAccount = createAction(ActionTypes.getDataResponseErrorActivateAccount);

export function getDataResponseErrorActivateAccount(error) {
  return (dispatch) => {
    return dispatch(errorResponseActivateAccount());
  };
}

export function activateAccount(obj) {
  return (dispatch) => {
    dispatch(getDataRequestActivateAccount());
    return api.activateAccount(obj)
      .then(data => dispatch(getDataResponseActivateAccount(data.data)))
      .catch(error => dispatch(getDataResponseErrorActivateAccount(error)));
  };
}


/////////////////////////////////////////////           Check          ////////////////////////////////////////////////

const requestResponseCheck = createAction(ActionTypes.getDataRequestCheck);

export function getDataRequestCheck() {
  return (dispatch) => {
    return dispatch(requestResponseCheck());
  };
}

const responseResponseCheck = createAction(ActionTypes.getDataResponseCheck);

export function getDataResponseCheck(data,vid) {
  return (dispatch) => {
    store.dispatch(push('/password/reset'));
    return dispatch(responseResponseCheck(vid));
  };
}

const errorResponseCheck = createAction(ActionTypes.getDataResponseErrorCheck);

export function getDataResponseErrorCheck(error) {
  return (dispatch) => {
    return dispatch(errorResponseCheck());
  };
}

export function check(vid) {
  return (dispatch) => {
    dispatch(getDataRequestCheck());
    return api.check(vid)
      .then(data => dispatch(getDataResponseCheck(data.data,vid)))
      .catch(error => dispatch(getDataResponseErrorCheck(error)));
  };
}

/////////////////////////////////////////////           RESET          ////////////////////////////////////////////////

const requestResponseReset = createAction(ActionTypes.getDataRequestReset);

export function getDataRequestReset() {
  return (dispatch) => {
    return dispatch(requestResponseReset());
  };
}

const responseResponseReset = createAction(ActionTypes.getDataResponseReset);

export function getDataResponseReset(data) {
  return (dispatch) => {
    let message = 'You successfully reset your password! Sign in ';
    let hrefToSignIn = true;
    store.dispatch(push('/message'));
    dispatch(changeSuccessMessage(message, hrefToSignIn));
  };
}

const errorResponseReset = createAction(ActionTypes.getDataResponseErrorReset);

export function getDataResponseErrorReset(error) {
  return (dispatch) => {
    return dispatch(errorResponseReset());
  };
}

export function resetPassword(obj) {
  return (dispatch) => {

    dispatch(getDataRequestReset());
    return api.resetPassword(obj)
      .then(data => dispatch(getDataResponseReset(data.data)))
      .catch(error => dispatch(getDataResponseErrorReset(error)));
  };
}
