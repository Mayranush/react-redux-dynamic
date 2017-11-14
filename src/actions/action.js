import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import store from 'store';
import {tools} from '../resources';

const changeMessageResponse = createAction(ActionTypes.changeMessage);

export function changeMessage(page,field, message) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    newState[page][field] = message;
    console.log(newState,"newState---------------")
    return dispatch(changeMessageResponse(newState));
  };
}

const changeTabInSettingsResponse = createAction(ActionTypes.changeTabInSettings);

export function changeTabInSettings(tab) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    newState.settingsCurrentTab = tab;
    console.log(newState,"newState---------------")
    return dispatch(changeTabInSettingsResponse(newState));
  };
}





