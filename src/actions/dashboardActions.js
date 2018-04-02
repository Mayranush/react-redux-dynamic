import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
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
    console.log(data, "bot status");

    let botStatus = data.message;
    if (botStatus == 'Bot is not run yet.') {
      botStatus = 'IDLE';
    }
    return dispatch(responseResponseBotGet({botStatus}));
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
    let botStart;
    if (data) {
      botStart = data.message;
    }
    let botStatus;
    if (botStart === 'STARTED.' || botStart === 'The bot is running.') {
      botStatus = 'RUNNING';
    } else {
      botStatus = 'STOPPED';
    }

    return dispatch(responseResponseBotPost({botStart, botStatus}));
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
    return dispatch(responseResponseBotPut());
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