import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import store from "store";
import {tools} from "../resources";
import api from "../api/api";
import {push} from "react-router-redux";
import {changeSuccessMessage} from "./successActions";
import {errorHandler} from "./generalActions";

/////////////////////////////////////////////           password Forget      ////////////////////////////////////////////////

const requestResponsePasswordForget = createAction(ActionTypes.getDataRequestPasswordForget);

export function getDataRequestPasswordForget() {
  return (dispatch) => {
    return dispatch(requestResponsePasswordForget());
  };
}

const responseResponsePasswordForget = createAction(ActionTypes.getDataResponsePasswordForget);

export function getDataResponsePasswordForget(data) {
  return (dispatch) => {
    let message = 'We have sent you an email with a link to reset your password.';
    dispatch(changeSuccessMessage(message));
    store.dispatch(push('/message'));
  };
}

const errorResponsePasswordForget = createAction(ActionTypes.getDataResponseErrorPasswordForget);

export function getDataResponseErrorPasswordForget(error) {
  return (dispatch) => {
    return dispatch(errorResponsePasswordForget(error));
  };
}

export function passwordForget(obj) {
  return (dispatch) => {
    dispatch(getDataRequestPasswordForget());
    return api.passwordForget(obj)
      .then(data => dispatch(getDataResponsePasswordForget(data.data)))
      .catch(error => dispatch(getDataResponseErrorPasswordForget(error.response.data.message)));
  };
}


/////////////////////////////////////////////           Change Password     ////////////////////////////////////////////////

const requestResponseChangePassword = createAction(ActionTypes.getDataRequestChangePassword);

export function getDataRequestChangePassword() {
  return (dispatch) => {
    return dispatch(requestResponseChangePassword());
  };
}

const responseResponseChangePassword = createAction(ActionTypes.getDataResponseChangePassword);

export function getDataResponseChangePassword(data) {
  return (dispatch) => {
    let show = true;
    let resetPassword = false;
    let text = "Successfully updated";
    let password = '';
    let passwordErrorText = '';
    let confirmPassword = '';
    store.dispatch(push('/settings'));
    return dispatch(responseResponseChangePassword({show, resetPassword, text, password, passwordErrorText, confirmPassword}));
  };
}

export function changeAndResetPassword(obj) {
  return (dispatch) => {
    dispatch(getDataRequestChangePassword());
    return api.changePassword(obj)
      .then(data => dispatch(getDataResponseChangePassword(data.data)))
      .catch(error => dispatch(errorHandler(error)));
  };
}


