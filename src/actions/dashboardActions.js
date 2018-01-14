import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import store from "store";
import {tools} from "../resources";
import api from "../api/api";

/////////////////////////////////////////////          bot get       ////////////////////////////////////////////////

const requestResponseBotGet = createAction(ActionTypes.getDataRequestBotGet);

export function getDataRequesBotGet() {
    return (dispatch) => {
        let newState = tools.cloneState(store.getState().projectDataReducer.data);
        return dispatch(requestResponseBotGet(newState));
    };
}

const responseResponseBotGet = createAction(ActionTypes.getDataResponseBotGet);

export function getDataResponseBotGet(data) {
    return (dispatch) => {
        let newState = tools.cloneState(store.getState().projectDataReducer.data);
        if (data) {
            newState.twitter.botStatus = data.message;
        }
        return dispatch(responseResponseBotGet(newState));
    };
}

const errorResponseBotGet = createAction(ActionTypes.getDataResponseErrorBotGet);

export function getDataResponseErrorBotGet(error) {
    return (dispatch) => {
        let newState = tools.cloneState(store.getState().projectDataReducer.data);     
        return dispatch(errorResponseBotGet(newState));
    };
}

export function botGet() {    
    return (dispatch) => {
    dispatch(getDataRequesBotGet());
    return api.botGet()
        .then(data => dispatch(getDataResponseBotGet(data.data)))
        .catch(error => dispatch(getDataResponseErrorBotGet(error)));
    };
}

/////////////////////////////////////////////          bot post      ////////////////////////////////////////////////

const requestResponseBotPost = createAction(ActionTypes.getDataRequestBotPost);

export function getDataRequestBotPost() {
    return (dispatch) => {
        let newState = tools.cloneState(store.getState().projectDataReducer.data);
        return dispatch(requestResponseBotPost(newState));
    };
}

const responseResponseBotPost = createAction(ActionTypes.getDataResponseBotPost);

export function getDataResponseBotPost(data) {
    return (dispatch) => {
        let newState = tools.cloneState(store.getState().projectDataReducer.data);
        if (data) {
            if(data.message ==="STARTED."){
            newState.twitter.botStatus = "RUNNING";
            }
            newState.twitter.botStart = data.message;
        }
        return dispatch(responseResponseBotPost(newState));
    };
}

const errorResponseBotPost = createAction(ActionTypes.getDataResponseErrorBotPost);

export function getDataResponseErrorBotPost(error) {
    return (dispatch) => {
        let newState = tools.cloneState(store.getState().projectDataReducer.data);     
        return dispatch(errorResponseBotPost(newState));
    };
}

export function botPost() {    
    return (dispatch) => {
    dispatch(getDataRequestBotPost());
    return api.botPost()
        .then(data => dispatch(getDataResponseBotPost(data.data)))
        .catch(error => dispatch(getDataResponseErrorBotPost(error)));
    };
}

/////////////////////////////////////////////          bot put      ////////////////////////////////////////////////

const requestResponseBotPut = createAction(ActionTypes.getDataRequestBotPut);

export function getDataRequestBotPut() {
    return (dispatch) => {
        let newState = tools.cloneState(store.getState().projectDataReducer.data);
        return dispatch(requestResponseBotPut(newState));
    };
}

const responseResponseBotPut = createAction(ActionTypes.getDataResponseBotPut);

export function getDataResponseBotPut(data) {
    return (dispatch) => {
        let newState = tools.cloneState(store.getState().projectDataReducer.data);
        if (data) {
            newState.twitter.botStatus = data.message;
        }
        return dispatch(responseResponseBotPut(newState));
    };
}

const errorResponseBotPut = createAction(ActionTypes.getDataResponseErrorBotPut);

export function getDataResponseErrorBotPut(error) {
    return (dispatch) => {
        let newState = tools.cloneState(store.getState().projectDataReducer.data);     
        return dispatch(errorResponseBotPut(newState));
    };
}

export function botPut() {    
    return (dispatch) => {
    dispatch(getDataRequestBotPut());
    return api.botPut()
        .then(data => dispatch(getDataResponseBotPut(data.data)))
        .catch(error => dispatch(getDataResponseErrorBotPut(error)));
    };
}