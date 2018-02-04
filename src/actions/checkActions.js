import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import store from "store";
import {tools} from "../resources";
import api from "../api/api";
import {push} from "react-router-redux";

/////////////////////////////////////////////           Activate Account      ////////////////////////////////////////////////

const requestResponseActivateAccount = createAction(ActionTypes.getDataRequestActivateAccount);

export function getDataRequestActivateAccount() {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    return dispatch(requestResponseActivateAccount(newState));
  };
}

const responseResponseActivateAccount = createAction(ActionTypes.getDataResponseActivateAccount);

export function getDataResponseActivateAccount(data) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    newState.success.message = 'You are successfully registered! Sign in ';
    newState.success.hrefToSignIn = true;
    store.dispatch(push('/message'));
    return dispatch(responseResponseActivateAccount(newState));
  };
}

const errorResponseActivateAccount = createAction(ActionTypes.getDataResponseErrorActivateAccount);

export function getDataResponseErrorActivateAccount(error) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);

    newState.success.message = 'Something get wrong. Please try again';
    newState.success.hrefToSignIn = false;
    store.dispatch(push('/message'));

    return dispatch(errorResponseActivateAccount(newState));
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
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    return dispatch(requestResponseCheck(newState));
  };
}

const responseResponseCheck = createAction(ActionTypes.getDataResponseCheck);

export function getDataResponseCheck(data,vid) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    newState.user.vid = vid;
    store.dispatch(push('/password/reset'));
    return dispatch(responseResponseCheck(newState));
  };
}

const errorResponseCheck = createAction(ActionTypes.getDataResponseErrorCheck);

export function getDataResponseErrorCheck(error) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);

    newState.success.message = 'Something get wrong. Please try again';
    newState.success.hrefToSignIn = false;
    store.dispatch(push('/message'));


    return dispatch(errorResponseCheck(newState));
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
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    return dispatch(requestResponseReset(newState));
  };
}

const responseResponseReset = createAction(ActionTypes.getDataResponseReset);

export function getDataResponseReset(data) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    newState.success.message = 'You successfully reset your password! Sign in ';
    newState.success.hrefToSignIn = true;
    store.dispatch(push('/message'));
    return dispatch(responseResponseReset(newState));
  };
}

const errorResponseReset = createAction(ActionTypes.getDataResponseErrorReset);

export function getDataResponseErrorReset(error) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    newState.success.message = 'Something get wrong. Please try again';
    newState.success.hrefToSignIn = false;
    store.dispatch(push('/message'));
    return dispatch(errorResponseReset(newState));
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
