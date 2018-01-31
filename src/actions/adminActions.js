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
      newState.userListPageCount = data.count;
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

export function getDataResponseDisableUser(data, id) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    newState.usersList.map((item) => {
      if (item.id === id) {
        item.isActive = false;
      }
    });
    newState.adminsList.map((item) => {
      if (item.id === id) {
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
      .then(data => dispatch(getDataResponseDisableUser(data.data, id)))
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

export function getDataResponseEnableUser(data, id) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    newState.usersList.map((item) => {
      if (item.id === id) {
        item.isActive = true;
      }
    });
    newState.adminsList.map((item) => {
      if (item.id === id) {
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
      .then(data => dispatch(getDataResponseEnableUser(data.data, id)))
      .catch(error => dispatch(getDataResponseErrorEnableUser(error)));
  };
}
/////////////////////////////////////////////           Delete Admin     ////////////////////////////////////////////////

const requestResponseDeleteAdmin = createAction(ActionTypes.getDataRequestDeleteAdmin);

export function getDataRequesDeleteAdmin() {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    return dispatch(requestResponseDeleteAdmin(newState));
  };
}

const responseResponseDeleteAdmin = createAction(ActionTypes.getDataResponseDeleteAdmin);

export function getDataResponseDeleteAdmin(data, id) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    newState.adminsList.map((item) => {

      if (item.id === id) {
        var index = newState.adminsList.indexOf(item);
        newState.adminsList.splice(index, 1);
      }
    });
    return dispatch(responseResponseDeleteAdmin(newState));
  };
}

const errorResponseDeleteAdmin = createAction(ActionTypes.getDataResponseErrorDeleteAdmin);

export function getDataResponseErrorDeleteAdmin(error) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    return dispatch(errorResponseDeleteAdmin(newState));
  };
}

export function deleteAdmin(id) {
  return (dispatch) => {
    dispatch(getDataRequesDeleteAdmin());
    return api.deleteAdmin(id)
      .then(data => dispatch(getDataResponseDeleteAdmin(data.data, id)))
      .catch(error => dispatch(getDataResponseErrorDeleteAdmin(error)));
  };
}
/////////////////////////////////////////////           Add Admin     ////////////////////////////////////////////////

const requestResponseAddAdmin = createAction(ActionTypes.getDataRequestAddAdmin);

export function getDataRequesAddAdmin() {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    return dispatch(requestResponseAddAdmin(newState));
  };
}

const responseResponseAddAdmin = createAction(ActionTypes.getDataResponseAddAdmin);

export function getDataResponseAddAdmin(data, id) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);

    newState.usersList.map((item) => {

      if (item.id === id) {
        var index = newState.usersList.indexOf(item);
        newState.usersList.splice(index, 1);
      }
    });

    return dispatch(responseResponseAddAdmin(newState));
  };
}

const errorResponseAddAdmin = createAction(ActionTypes.getDataResponseErrorAddAdmin);

export function getDataResponseErrorAddAdmin(error) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    return dispatch(errorResponseAddAdmin(newState));
  };
}

export function addAdmin(id) {
  return (dispatch) => {
    dispatch(getDataRequesAddAdmin());
    return api.addAdmin(id)
      .then(data => dispatch(getDataResponseAddAdmin(data.data, id)))
      .catch(error => dispatch(getDataResponseErrorAddAdmin(error)));
  };
}

/////////////////////////////////////////////           Admins list     ////////////////////////////////////////////////

const requestResponseGetAdminsList = createAction(ActionTypes.getDataRequestGetAdminsList);

export function getDataRequesGetAdminsList() {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    return dispatch(requestResponseGetAdminsList(newState));
  };
}

const responseResponseGetAdminsList = createAction(ActionTypes.getDataResponseGetAdminsList);

export function getDataResponseGetAdminsList(data) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    if (data.length === 0) {
      newState.logMessage = "There is no data to show";
    } else {
      newState.adminsList = data;
      newState.logMessage = "";
    }
    return dispatch(responseResponseGetAdminsList(newState));
  };
}

const errorResponseGetAdminsList = createAction(ActionTypes.getDataResponseErrorGetAdminsList);

export function getDataResponseErrorGetAdminsList(error) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    return dispatch(errorResponseGetAdminsList(newState));
  };
}

export function getAdminsList() {
  return (dispatch) => {
    dispatch(getDataRequesGetAdminsList());
    return api.getAdminsList()
      .then(data => dispatch(getDataResponseGetAdminsList(data.data)))
      .catch(error => dispatch(getDataResponseErrorGetAdminsList(error)));
  };
}

