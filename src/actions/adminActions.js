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

export function getUsersList(page,size) {
    return (dispatch) => {
    dispatch(getDataRequesGetUsersList());
    return api.getUsersList(page,size)
        .then(data => dispatch(getDataResponseGetUsersList(data.data)))
        .catch(error => dispatch(getDataResponseErrorGetUsersList(error)));
    };
}

