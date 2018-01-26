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

