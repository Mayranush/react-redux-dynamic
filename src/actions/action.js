import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import store from 'store';
import {tools} from '../resources';
import api from "../api/api";
import { push } from 'react-router-redux';

const changeMessageResponse = createAction(ActionTypes.changeMessage);

export function changeMessage(page,field, message) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    newState[page][field] = message;
    return dispatch(changeMessageResponse(newState));
  };
}

const changeTabInSettingsResponse = createAction(ActionTypes.changeTabInSettings);


export function changeTabInSettings(tab) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    newState.settingsCurrentTab = tab;
    return dispatch(changeTabInSettingsResponse(newState));
  };
}

const requestResponse = createAction(ActionTypes.getDataRequest);

export function getDataRequest(param) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    console.log(param,"param in request");
    return dispatch(requestResponse(newState));
  };
}

const responseResponse = createAction(ActionTypes.getDataResponse);

export function getDataResponse(data,param) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    console.log(data,param, "response");
    if (param === "api/sign-in") {
      newState.user.token = data.token;
      store.dispatch(push('/dashboard'))

    } else if(param === "auth/settings") {
      newState.user.firstName = data.firstname;
    }
    console.log(newState,"newState")
    return dispatch(responseResponse(newState));
  };
}

const errorResponse = createAction(ActionTypes.getDataResponseError);

export function getDataResponseError(error, param) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    console.log(error,param, "error");
    return dispatch(errorResponse(newState));
  };
}




export function getData(param, method, obj, token) {
    return (dispatch) => {
    dispatch(getDataRequest(param));
    return api.getData(param, method, obj, token)
        .then(data => dispatch(getDataResponse(data.data, param)))
        .catch(error => dispatch(getDataResponseError(error, param)));
    };
}