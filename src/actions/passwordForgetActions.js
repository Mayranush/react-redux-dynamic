import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import store from "store";
import {tools} from "../resources";
import api from "../api/api";
import {push} from "react-router-redux";

/////////////////////////////////////////////           password Forget      ////////////////////////////////////////////////

const requestResponsePasswordForget = createAction(ActionTypes.getDataRequestPasswordForget);

export function getDataRequestPasswordForget() {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    return dispatch(requestResponsePasswordForget(newState));
  };
}

const responseResponsePasswordForget = createAction(ActionTypes.getDataResponsePasswordForget);

export function getDataResponsePasswordForget(data) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    newState.success.message = 'We have sent you an email with a link to reset your password.';

    store.dispatch(push('/success'));
    return dispatch(responseResponsePasswordForget(newState));
  };
}

const errorResponsePasswordForget = createAction(ActionTypes.getDataResponseErrorPasswordForget);

export function getDataResponseErrorPasswordForget(error) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    return dispatch(errorResponsePasswordForget(newState));
  };
}

export function passwordForget(obj) {
  return (dispatch) => {
    dispatch(getDataRequestPasswordForget());
    return api.passwordForget(obj)
      .then(data => dispatch(getDataResponsePasswordForget(data.data)))
      .catch(error => dispatch(getDataResponseErrorPasswordForget(error)));
  };
}


/////////////////////////////////////////////           Change Password     ////////////////////////////////////////////////

const requestResponseChangePassword = createAction(ActionTypes.getDataRequestChangePassword);

export function getDataRequestChangePassword() {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    return dispatch(requestResponseChangePassword(newState));
  };
}

const responseResponseChangePassword = createAction(ActionTypes.getDataResponseChangePassword);

export function getDataResponseChangePassword(data) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    newState.popup.show = true;
    newState.popup.resetPassword = false;
    newState.popup.text = "Successfully updated";

    store.dispatch(push('/settings'));
    return dispatch(responseResponseChangePassword(newState));
  };
}

const errorResponseChangePassword = createAction(ActionTypes.getDataResponseErrorChangePassword);

export function getDataResponseErrorChangePassword(error) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    return dispatch(errorResponseChangePassword(newState));
  };
}

export function changePassword(obj) {
  return (dispatch) => {
    console.log("+===================================================+",obj);
    dispatch(getDataRequestChangePassword());
    return api.changePassword(obj)
      .then(data => dispatch(getDataResponseChangePassword(data.data)))
      .catch(error => dispatch(getDataResponseErrorChangePassword(error)));
  };
}


