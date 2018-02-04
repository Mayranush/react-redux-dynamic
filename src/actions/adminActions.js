import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import store from "store";
import {tools} from "../resources";
import api from "../api/api";
import   {errorPopup} from "./action";
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


export function getUsersList(page, size) {
  return (dispatch) => {
    dispatch(getDataRequesGetUsersList());
    return api.getUsersList(page, size)
      .then(data => dispatch(getDataResponseGetUsersList(data.data)))
      .catch(error => dispatch(errorPopup(error)));
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



export function disableUser(id) {
  return (dispatch) => {
    dispatch(getDataRequestDisableUser());
    return api.disableUser(id)
      .then(data => dispatch(getDataResponseDisableUser(data.data, id)))
      .catch(error => dispatch(errorPopup(error)));
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



export function enableUser(id) {
  return (dispatch) => {
    dispatch(getDataRequestEnableUser());
    return api.enableUser(id)
      .then(data => dispatch(getDataResponseEnableUser(data.data, id)))
      .catch(error => dispatch(errorPopup(error)));
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

      if (item.id === id && item.id !== '1') {
        var index = newState.adminsList.indexOf(item);
        newState.adminsList.splice(index, 1);
      }
    });
    return dispatch(responseResponseDeleteAdmin(newState));
  };
}


export function deleteAdmin(id) {
  return (dispatch) => {
    dispatch(getDataRequesDeleteAdmin());
    return api.deleteAdmin(id)
      .then(data => dispatch(getDataResponseDeleteAdmin(data.data, id)))
      .catch(error => dispatch(errorPopup(error)));
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

export function addAdmin(id) {
  return (dispatch) => {
    dispatch(getDataRequesAddAdmin());
    // console.log(errorPopup(),"undefinersdl,fsd;lvdslvm");
    return api.addAdmin(id)

      .then(data => dispatch(getDataResponseAddAdmin(data.data, id)))
      .catch(error => dispatch(errorPopup(error)));
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

export function getAdminsList() {
  return (dispatch) => {
    dispatch(getDataRequesGetAdminsList());
    return api.getAdminsList()
      .then(data => dispatch(getDataResponseGetAdminsList(data.data)))
      .catch(error => dispatch(errorPopup(error)));
  };
}

