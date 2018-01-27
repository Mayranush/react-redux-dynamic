import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import store from "store";
import {tools} from "../resources";
import api from "../api/api";

/////////////////////////////////////////////           Users list     ////////////////////////////////////////////////

const requestResponseGetUsersList = createAction(ActionTypes.getDataRequestGetUsersList);

export function getDataRequesGetUsersList() {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    return dispatch(requestResponseGetUsersList(newState));
  };
}

const responseResponseGetUsersList = createAction(ActionTypes.getDataResponseGetUsersList);

export function getDataResponseGetUsersList(data) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    if (data.length === 0) {
      newState.logMessage = "There is no data to show";
    } else {
      newState.usersList = data.data;
      newState.logMessage = "";
    }
    return dispatch(responseResponseGetUsersList(newState));
  };
}

const errorResponseGetUsersList = createAction(ActionTypes.getDataResponseErrorGetUsersList);

export function getDataResponseErrorGetUsersList(error) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    return dispatch(errorResponseGetUsersList(newState));
  };
}

export function getUsersList(page, size) {
  return (dispatch) => {
    dispatch(getDataRequesGetUsersList());
    return api.getUsersList(page, size)
      .then(data => dispatch(getDataResponseGetUsersList(data.data)))
      .catch(error => dispatch(getDataResponseErrorGetUsersList(error)));
  };
}

/////////////////////////////////////////////           Disable User     ////////////////////////////////////////////////

const requestResponseDisableUser = createAction(ActionTypes.getDataRequestDisableUser);

export function getDataRequestDisableUser() {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    return dispatch(requestResponseDisableUser(newState));
  };
}

const responseResponseDisableUser = createAction(ActionTypes.getDataResponseDisableUser);

export function getDataResponseDisableUser(data,id) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    console.log(id,"ididiididididiididididididi");
    newState.usersList.map((item) => {
      if (item.id === id){
        item.isActive = false;
      }
    });
    return dispatch(responseResponseDisableUser(newState));
  };
}

const errorResponseDisableUser = createAction(ActionTypes.getDataResponseErrorDisableUser);

export function getDataResponseErrorDisableUser(error) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    return dispatch(errorResponseDisableUser(newState));
  };
}

export function disableUser(id) {
  return (dispatch) => {
    dispatch(getDataRequestDisableUser());
    return api.disableUser(id)
      .then(data => dispatch(getDataResponseDisableUser(data.data,id)))
      .catch(error => dispatch(getDataResponseErrorDisableUser(error)));
  };
}

/////////////////////////////////////////////           Enable User     ////////////////////////////////////////////////

const requestResponseEnableUser = createAction(ActionTypes.getDataRequestEnableUser);

export function getDataRequestEnableUser() {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    return dispatch(requestResponseEnableUser(newState));
  };
}

const responseResponseEnableUser = createAction(ActionTypes.getDataResponseEnableUser);

export function getDataResponseEnableUser(data,id) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    console.log(id,"ididiididididiididididididi");
    newState.usersList.map((item) => {
      if (item.id === id){
        item.isActive = true;
      }
    });
    return dispatch(responseResponseEnableUser(newState));
  };
}

const errorResponseEnableUser = createAction(ActionTypes.getDataResponseErrorEnableUser);

export function getDataResponseErrorEnableUser(error) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    return dispatch(errorResponseEnableUser(newState));
  };
}

export function enableUser(id) {
  return (dispatch) => {
    dispatch(getDataRequestEnableUser());
    return api.enableUser(id)
      .then(data => dispatch(getDataResponseEnableUser(data.data,id)))
      .catch(error => dispatch(getDataResponseErrorEnableUser(error)));
  };
}
