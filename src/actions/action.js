import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import store from 'store';
import {tools} from '../resources';
//import {test} from "../api";

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

const requestResponse = createAction(ActionTypes.request);

export function request() {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    console.log("request");
    return dispatch(requestResponse(newState));
  };
}

const responseResponse = createAction(ActionTypes.response);

export function response() {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    console.log("response");
    return dispatch(responseResponse(newState));
  };
}

const errorResponse = createAction(ActionTypes.error);

export function error() {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    console.log("error");
    return dispatch(errorResponse(newState));
  };
}


// export function getDataAction(){
//     return (dispatch) => {   
//       test.getData();
//       let newState = tools.cloneState(store.getState().projectDataReducer.data);
//       console.log("testtttttttttttt");
//       return dispatch(responseResponse(newState));
//     }
// }