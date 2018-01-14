import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import store from "store";
import {tools} from "../resources";
import api from "../api/api";

/////////////////////////////////////////////           twTipLogs       ////////////////////////////////////////////////

const requestResponseTwTipLogs = createAction(ActionTypes.getDataRequestTwTipLogs);

export function getDataRequesTwTipLogs() {
    return (dispatch) => {
        let newState = tools.cloneState(store.getState().projectDataReducer.data);
        return dispatch(requestResponseTwTipLogs(newState));
    };
}

const responseResponseTwTipLogs = createAction(ActionTypes.getDataResponseTwTipLogs);

export function getDataResponseTwTipLogs(data) {
    return (dispatch) => {
        let newState = tools.cloneState(store.getState().projectDataReducer.data);
        if (data.length === 0) {
            newState.logMessage = "There is no data to show";
        } else {
            newState.log = data;
            newState.logMessage = "";
        }
        return dispatch(responseResponseTwTipLogs(newState));
    };
}

const errorResponseTwTipLogs = createAction(ActionTypes.getDataResponseErrorTwTipLogs);

export function getDataResponseErrorTwTipLogs(error) {
    return (dispatch) => {
        let newState = tools.cloneState(store.getState().projectDataReducer.data);     
        return dispatch(errorResponseTwTipLogs(newState));
    };
}

export function twTipLogs() {    
    return (dispatch) => {
    dispatch(getDataRequesTwTipLogs());
    return api.twTipLogs()
        .then(data => dispatch(getDataResponseTwTipLogs(data.data)))
        .catch(error => dispatch(getDataResponseErrorTwTipLogs(error)));
    };
}

