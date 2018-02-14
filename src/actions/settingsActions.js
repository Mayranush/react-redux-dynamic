import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import store from "store";
import {tools} from "../resources";
import api from "../api/api";
import {changePopup} from "./popupActions";
import {errorHandler} from "./generalActions";

const changeTabInSettingsResponse = createAction(ActionTypes.changeTabInSettings);

export function changeTabInSettings(tab) {
    return (dispatch) => {
        return dispatch(changeTabInSettingsResponse(tab));
    };
}

////////////////////////////////////    myDetails     ///////////////////////////////////////////////

const requestResponseMyDetails = createAction(ActionTypes.getDataRequestMyDetails);

export function getDataRequestMyDetails() {
    return (dispatch) => {
        return dispatch(requestResponseMyDetails());
    };
}

const responseResponseMyDetails = createAction(ActionTypes.getDataResponseMyDetails);

export function getDataResponseMyDetails(data) {
    return (dispatch) => {
        return dispatch(responseResponseMyDetails(data));
    };
}

export function myDetails() {    
    return (dispatch) => {
    dispatch(getDataRequestMyDetails());
    return api.myDetails()
        .then(data => dispatch(getDataResponseMyDetails(data.data)))
        .catch(error => dispatch(errorHandler(error)));
    };
}

////////////////////////////////////////        twitterSettings     ///////////////////////////////////////////

const requestResponseTwitterSettings = createAction(ActionTypes.getDataRequestTwitterSettings);

export function getDataRequesTwitterSettings() {
    return (dispatch) => {
        return dispatch(requestResponseTwitterSettings());
    };
}

const responseResponseTwitterSettings = createAction(ActionTypes.getDataResponseTwitterSettings);

export function getDataResponseTwitterSettings(data) {
    return (dispatch) => {
        return dispatch(responseResponseTwitterSettings(data));
    }
}

export function twitterSettings() {    
    return (dispatch) => {
    dispatch(getDataRequesTwitterSettings());
    return api.twitterSettings()
        .then(data => dispatch(getDataResponseTwitterSettings(data.data)))
        .catch(error => dispatch(errorHandler(error)));
    };
}

////////////////////////////////////////////         twitterCriteria       /////////////////////////////////////////////////

const requestResponseTwitterCriteria = createAction(ActionTypes.getDataRequestTwitterCriteria);

export function getDataRequesTwitterCriteria() {
    return (dispatch) => {
        return dispatch(requestResponseTwitterCriteria());
    };
}

const responseResponseTwitterCriteria = createAction(ActionTypes.getDataResponseTwitterCriteria);

export function getDataResponseTwitterCriteria(data) {
    return (dispatch) => {
        return dispatch(responseResponseTwitterCriteria(data));
    };
}

export function twitterCriteria() {    
    return (dispatch) => {
    dispatch(getDataRequesTwitterCriteria());
    return api.twitterCriteria()
        .then(data => dispatch(getDataResponseTwitterCriteria(data.data)))
        .catch(error => dispatch(errorHandler(error)));
    };
}

//////////////////////////////////       myDetailsUpdate        /////////////////////////////////////////////////

const requestResponseMyDetailsUpdate = createAction(ActionTypes.getDataRequestMyDetailsUpdate);

export function getDataRequestMyDetailsUpdate() {
    return (dispatch) => {
        return dispatch(requestResponseMyDetailsUpdate());
    };
}

const responseResponseMyDetailsUpdate = createAction(ActionTypes.getDataResponseMyDetailsUpdate);

export function getDataResponseMyDetailsUpdate(data, obj) {
    return (dispatch) => {
        if (data) {
            dispatch(changePopup("Successfully updated", true, false, ""));
        }
        return dispatch(responseResponseMyDetailsUpdate(obj));
    };
}

export function myDetailsUpdate(obj) {    
    return (dispatch) => {
    dispatch(getDataRequestMyDetailsUpdate());
    return api.myDetailsUpdate(obj)
        .then(data => dispatch(getDataResponseMyDetailsUpdate(data.data, obj)))
        .catch(error => dispatch(errorHandler(error)));
    };
}

////////////////////////////////////      twitterSettingsUpdate      ///////////////////////////////////////////////

const requestResponseTwitterSettingsUpdate = createAction(ActionTypes.getDataRequestTwitterSettingsUpdate);

export function getDataRequestTwitterSettingsUpdate() {
    return (dispatch) => {
        return dispatch(requestResponseTwitterSettingsUpdate());
    };
}

const responseResponseTwitterSettingsUpdate = createAction(ActionTypes.getDataResponseTwitterSettingsUpdate);

export function getDataResponseTwitterSettingsUpdate(data, obj) {
    return (dispatch) => {
        if (data) {
            dispatch(changePopup("Successfully updated", true, false, ""));
        }
        return dispatch(responseResponseTwitterSettingsUpdate(obj));
    };
}

export function twitterSettingsUpdate(obj) {    
    return (dispatch) => {
    dispatch(getDataRequestTwitterSettingsUpdate());
    return api.twitterSettingsUpdate(obj)
        .then(data => dispatch(getDataResponseTwitterSettingsUpdate(data.data, obj)))
        .catch(error => dispatch(errorHandler(error)));
    };
}

/////////////////////////////////////////////          twitterCriteriaUpdate       ////////////////////////////////////////////////

const requestResponseTwitterCriteriaUpdate = createAction(ActionTypes.getDataRequestTwitterCriteriaUpdate);

export function getDataRequestTwitterCriteriaUpdate() {
    return (dispatch) => {
        return dispatch(requestResponseTwitterCriteriaUpdate());
    };
}

const responseResponseTwitterCriteriaUpdate = createAction(ActionTypes.getDataResponseTwitterCriteriaUpdate);

export function getDataResponseTwitterCriteriaUpdate(data, obj) {
    return (dispatch) => {
        if (data) {
            dispatch(changePopup("Successfully updated", true, false, ""));
        }
        return dispatch(responseResponseTwitterCriteriaUpdate(obj));
    };
}

export function twitterCriteriaUpdate(obj) {    
    return (dispatch) => {
    dispatch(getDataRequestTwitterCriteriaUpdate());
    return api.twitterCriteriaUpdate(obj)
        .then(data => dispatch(getDataResponseTwitterCriteriaUpdate(data.data, obj)))
        .catch(error => dispatch(errorHandler(error)));
    };
}