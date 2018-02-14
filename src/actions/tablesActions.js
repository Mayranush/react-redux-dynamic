import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import store from "store";
import {tools} from "../resources";
import api from "../api/api";
import {errorHandler} from "./generalActions";

/////////////////////////////////////////////           twTipLogs       ////////////////////////////////////////////////

const requestResponseTwTipLogs = createAction(ActionTypes.getDataRequestTwTipLogs);

export function getDataRequesTwTipLogs() {
    return (dispatch) => {
        return dispatch(requestResponseTwTipLogs());
    };
}

const responseResponseTwTipLogs = createAction(ActionTypes.getDataResponseTwTipLogs);

export function getDataResponseTwTipLogs(data) {
    return (dispatch) => {
        let log = [];
        let logMessage = "";
        if (data.length === 0) {
            logMessage = "There is no data to show";
        } else {
            log = data;
            logMessage = "";
        }
        return dispatch(responseResponseTwTipLogs({log, logMessage}));
    };
}

export function twTipLogs() {    
    return (dispatch) => {
    dispatch(getDataRequesTwTipLogs());
    return api.twTipLogs()
        .then(data => dispatch(getDataResponseTwTipLogs(data.data)))
        .catch(error => dispatch(errorHandler(error)));
    };
}

