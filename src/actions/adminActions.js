import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import store from "store";
import {tools} from "../resources";
import api from "../api/api";
import {errorHandler} from "./generalActions";

/////////////////////////////////////////////           Users list     ////////////////////////////////////////////////

const requestResponseGetUsersList = createAction(ActionTypes.getDataRequestGetUsersList);

export function getDataRequesGetUsersList() {
  return (dispatch) => {
    return dispatch(requestResponseGetUsersList());
  };
}

const responseResponseGetUsersList = createAction(ActionTypes.getDataResponseGetUsersList);

export function getDataResponseGetUsersList(data) {
  return (dispatch) => {
    let logMessage = "";
    let list = [];
    let userListPageCount = 0;
    if (data.length === 0) {
      logMessage = "There is no data to show";
    } else {
      list = data.data;
      userListPageCount = data.count;
      logMessage = "";
    }
    return dispatch(responseResponseGetUsersList({list, logMessage, userListPageCount}));
  };
}

export function getUsersList(page, size) {
  return (dispatch) => {
    dispatch(getDataRequesGetUsersList());
    return api.getUsersList(page, size)
      .then(data => dispatch(getDataResponseGetUsersList(data.data)))
      .catch(error => dispatch(errorHandler(error)));
  };
}

/////////////////////////////////////////////           Disable User     ////////////////////////////////////////////////

const requestResponseDisableUser = createAction(ActionTypes.getDataRequestDisableUser);

export function getDataRequestDisableUser() {
  return (dispatch) => {
    return dispatch(requestResponseDisableUser());
  };
}

const responseResponseDisableUser = createAction(ActionTypes.getDataResponseDisableUser);
const responseResponseDisableAdmin = createAction(ActionTypes.getDataResponseDisableAdmin);

export function getDataResponseDisableUser(id, list, role) {
  return (dispatch) => {
    let newList = list.map((item) => {
      if (item.id === id) {
        item.isActive = false;
      }
    });
    if(role === "user") {
      return dispatch(responseResponseDisableUser(list)); 
    } else {
      return dispatch(responseResponseDisableAdmin(list));
    }
  };
}

export function disableUser(id, list, role) {
  return (dispatch) => {
    dispatch(getDataRequestDisableUser());
    return api.disableUser(id)
      .then(data => dispatch(getDataResponseDisableUser(id, list, role)))
      .catch(error => dispatch(errorHandler(error)));
  };
}

/////////////////////////////////////////////           Enable User     ////////////////////////////////////////////////

const requestResponseEnableUser = createAction(ActionTypes.getDataRequestEnableUser);

export function getDataRequestEnableUser() {
  return (dispatch) => {
    return dispatch(requestResponseEnableUser());
  };
}

const responseResponseEnableUser = createAction(ActionTypes.getDataResponseEnableUser);
const responseResponseEnableAdmin = createAction(ActionTypes.getDataResponseEnableAdmin);

export function getDataResponseEnableUser(id, list, role) {
  return (dispatch) => {
    let newList = list.map((item) => {
      if (item.id === id) {
        item.isActive = true;
      }
    });
    if(role === "user") {
      return dispatch(responseResponseEnableUser(list)); 
    } else {
      return dispatch(responseResponseEnableAdmin(list));
    }
  };
}

export function enableUser(id, list, role) {
  return (dispatch) => {
    dispatch(getDataRequestEnableUser());
    return api.enableUser(id)
      .then(data => dispatch(getDataResponseEnableUser(id, list, role)))
      .catch(error => dispatch(getDataResponseErrorEnableUser(error)));
  };
}
/////////////////////////////////////////////           Delete Admin     ////////////////////////////////////////////////

const requestResponseDeleteAdmin = createAction(ActionTypes.getDataRequestDeleteAdmin);

export function getDataRequesDeleteAdmin() {
  return (dispatch) => {
    return dispatch(requestResponseDeleteAdmin());
  };
}

const responseResponseDeleteAdmin = createAction(ActionTypes.getDataResponseDeleteAdmin);

export function getDataResponseDeleteAdmin(id, list) {
  return (dispatch) => {
  let newList = list.filter(function(el) {
    if (id == 1) {
      return el;
    } else {
      return el.id !== id;
    }
  });
  return dispatch(responseResponseDeleteAdmin(newList));
  };
}

export function deleteAdmin(id, list) {
  return (dispatch) => {
    dispatch(getDataRequesDeleteAdmin());
    return api.deleteAdmin(id)
      .then(data => dispatch(getDataResponseDeleteAdmin(id, list)))
      .catch(error => dispatch(errorHandler(error)));
  };
}
/////////////////////////////////////////////           Add Admin     ////////////////////////////////////////////////

const requestResponseAddAdmin = createAction(ActionTypes.getDataRequestAddAdmin);

export function getDataRequesAddAdmin() {
  return (dispatch) => {
    return dispatch(requestResponseAddAdmin());
  };
}

const responseResponseAddAdmin = createAction(ActionTypes.getDataResponseAddAdmin);

export function getDataResponseAddAdmin(id, list) {
  return (dispatch) => {
  let newList = list.filter(function(el) {
      return el.id !== id;
  });
  return dispatch(responseResponseAddAdmin(newList));
  };
}

export function addAdmin(id, list) {
  return (dispatch) => {
    dispatch(getDataRequesAddAdmin());
    return api.addAdmin(id)
      .then(data => dispatch(getDataResponseAddAdmin(id, list)))
      .catch(error => dispatch(errorHandler(error)));
  };
}

/////////////////////////////////////////////           Admins list     ////////////////////////////////////////////////

const requestResponseGetAdminsList = createAction(ActionTypes.getDataRequestGetAdminsList);

export function getDataRequesGetAdminsList() {
  return (dispatch) => {
    return dispatch(requestResponseGetAdminsList());
  };
}

const responseResponseGetAdminsList = createAction(ActionTypes.getDataResponseGetAdminsList);

export function getDataResponseGetAdminsList(data) {
  return (dispatch) => {
    let logMessage = "";
    let adminsList = [];
   // let adminListPageCount = 0;
    if (data.length === 0) {
      logMessage = "There is no data to show";
    } else {
      adminsList = data;
      logMessage = "";
      //adminListPageCount = data.count;
    }
    return dispatch(responseResponseGetAdminsList({adminsList, logMessage}));
  };
}

export function getAdminsList() {
  return (dispatch) => {
    dispatch(getDataRequesGetAdminsList());
    return api.getAdminsList()
      .then(data => dispatch(getDataResponseGetAdminsList(data.data)))
      .catch(error => dispatch(errorHandler(error)));
  };
}

