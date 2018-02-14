import {ActionTypes} from "../constants/index";
import {handleActions} from "redux-actions";

const defaultState = {
    usersList: [],
    adminsList: [],
    userListPageCount: 0,
    adminsListPageCount: 0,
    logMessage: ""      
};

export default handleActions({

  [ActionTypes.getDataRequestGetUsersList]: (state) => ({...state}),
  [ActionTypes.getDataResponseGetUsersList]: (state, {payload}) => ({...state,
    usersList: payload.list,
    logMessage: payload.logMessage,
    userListPageCount: payload.userListPageCount}),

  [ActionTypes.getDataRequestGetAdminsList]: (state) => ({...state}),
  [ActionTypes.getDataResponseGetAdminsList]: (state, {payload}) => ({...state,
   adminsList: payload.adminsList,
   logMessage: payload.logMessage}),

  [ActionTypes.getDataRequestDeleteAdmin]: (state) => ({...state}),
  [ActionTypes.getDataResponseDeleteAdmin]: (state, {payload}) => ({...state, adminsList: payload}),

  [ActionTypes.getDataRequestAddAdmin]: (state) => ({...state}),
  [ActionTypes.getDataResponseAddAdmin]: (state, {payload}) => ({...state, usersList: payload}),
  
  [ActionTypes.getDataRequestDisableUser]: (state) => ({...state}),
  [ActionTypes.getDataResponseDisableUser]: (state, {payload}) => ({...state, usersList: payload}),
  [ActionTypes.getDataResponseDisableAdmin]: (state, {payload}) => ({...state, adminsList: payload}),

  [ActionTypes.getDataRequestEnableUser]: (state) => ({...state}),
  [ActionTypes.getDataResponseEnableUser]: (state, {payload}) => ({...state, usersList: payload}),
  [ActionTypes.getDataResponseEnableAdmin]: (state, {payload}) => ({...state, adminsList: payload}),
  
}, defaultState);
