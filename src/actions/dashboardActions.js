import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import store from "store";
import {tools} from "../resources";
import api from "../api/api";
import {errorHandler} from "./generalActions";

const changeBotStatusResponse = createAction(ActionTypes.changeBotStatus);

export function changeBotStatus(string) {
  return (dispatch) => {
    return dispatch(changeBotStatusResponse(string));
  };
}

const changeBotStartResponse = createAction(ActionTypes.changeBotStart);

export function changeBotStart(string) {
  return (dispatch) => {
    return dispatch(changeBotStartResponse(string));
  };
}


/////////////////////////////////////////////          bot get       ////////////////////////////////////////////////

const requestResponseBotGet = createAction(ActionTypes.getDataRequestBotGet);

export function getDataRequesBotGet() {
    return (dispatch) => {
        return dispatch(requestResponseBotGet());
    };
}

const responseResponseBotGet = createAction(ActionTypes.getDataResponseBotGet);

export function getDataResponseBotGet(data) {
    return (dispatch) => {
        let message = data.message;
        return dispatch(responseResponseBotGet(message));
    };
}

export function botGet() {    
    return (dispatch) => {
    dispatch(getDataRequesBotGet());
    return api.botGet()
        .then(data => dispatch(getDataResponseBotGet(data.data)))
        .catch(error => dispatch(errorHandler(error)));
    };
}

/////////////////////////////////////////////          bot post      ////////////////////////////////////////////////

const requestResponseBotPost = createAction(ActionTypes.getDataRequestBotPost);

export function getDataRequestBotPost() {
    return (dispatch) => {
        return dispatch(requestResponseBotPost());
    };
}

const responseResponseBotPost = createAction(ActionTypes.getDataResponseBotPost);

export function getDataResponseBotPost(data) {
    return (dispatch) => {
        let botStatus;
        let botStart;
        if (data) {
            botStatus = "RUNNING";
            botStart = data.message;         
        }
        return dispatch(responseResponseBotPost({botStatus, botStart}));
    };
}

export function botPost() {    
    return (dispatch) => {
    dispatch(getDataRequestBotPost());
    return api.botPost()
        .then(data => dispatch(getDataResponseBotPost(data.data)))
        .catch(error => dispatch(errorHandler(error)));
    };
}

/////////////////////////////////////////////          bot put      ////////////////////////////////////////////////

const requestResponseBotPut = createAction(ActionTypes.getDataRequestBotPut);

export function getDataRequestBotPut() {
    return (dispatch) => {
        return dispatch(requestResponseBotPut());
    };
}

const responseResponseBotPut = createAction(ActionTypes.getDataResponseBotPut);

export function getDataResponseBotPut(data) {
    return (dispatch) => {
        let message = data.message;
        return dispatch(responseResponseBotPut(message));
    };
}

export function botPut() {    
    return (dispatch) => {
    dispatch(getDataRequestBotPut());
    return api.botPut()
        .then(data => dispatch(getDataResponseBotPut(data.data)))
        .catch(error => dispatch(errorHandler(error)));
    };
}