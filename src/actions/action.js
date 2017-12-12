import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import store from "store";
import {tools} from "../resources";
import api from "../api/api";
import {push} from "react-router-redux";

const changeMessageResponse = createAction(ActionTypes.changeMessage);

export function changeMessage(page, field, message) {
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

const requestResponse = createAction(ActionTypes.getDataRequest);

export function getDataRequest(param) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    return dispatch(requestResponse(newState));
  };
}

const responseResponse = createAction(ActionTypes.getDataResponse);

export function getDataResponse(data, param, method) {
  return (dispatch) => {
    console.log(data,">>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<");
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
<<<<<<< HEAD
    if (param === "api/sign-in") {
      newState.user.token = data.token;
      window.sessionStorage.setItem("token", data.token);
      store.dispatch(push('/dashboard'))
    } else if (param === "api/sign-up") {

    } else if (param === "auth/settings" && method === "get") {
      if (data) {
=======
    if (data === null) {
      console.log("mtaaaaaaaav ");
    } else {
      console.log("mtaaaaaaaav11111111111111111 ");
      if (param === "api/sign-in") {
        newState.user.token = data.token;
        window.sessionStorage.setItem("token", data.token);
        store.dispatch(push('/dashboard'))
      } else if (param === "api/sign-up") {

      } else if (param === "auth/settings" && method === "get") {
>>>>>>> b97cebb66febd5e50a5b8a57039b14177e91b0ce
        newState.user.firstname = data.firstname;
        newState.user.lastname = data.lastname;
        newState.user.email = data.email;
        newState.user.twUsername = data.twUsername;
<<<<<<< HEAD
      }
      newState.user.dataReceived = true;
    } else if (param === "auth/tw-api-details" && method === "get") {
      if (data) {
        newState.twitter.consumerKey = data.consumerKey;
        newState.twitter.consumerSecret = data.consumerSecret;
        newState.twitter.accessToken = data.accessToken;
        newState.twitter.accessTokenSecret = data.accessTokenSecret;        
      }
      newState.twitter.dataReceivedApiDetails = true;
    } else if (param === "auth/tw-tip-criteria" && method === "get") {
      if (data) {
=======
        newState.user.dataReceived = true;
      } else if (param === "auth/tw-api-details" && method === "get") {
        newState.twitter.consumerKey = data.consumerKey;
        newState.twitter.consumerSecret = data.consumerSecret;
        newState.twitter.accessToken = data.accessToken;
        newState.twitter.accessTokenSecret = data.accessTokenSecret;
        newState.twitter.dataReceivedApiDetails = true;
      } else if (param === "auth/tw-tip-criteria" && method === "get") {
>>>>>>> b97cebb66febd5e50a5b8a57039b14177e91b0ce
        newState.twitter.minFollowers = data.minFollowers;
        newState.twitter.tipsPerDay = data.tipsPerDay;
        newState.twitter.tipsLike = data.tipsLike;
        newState.twitter.tipsTweet = data.tipsTweet;
        newState.twitter.tipsReTweet = data.tipsReTweet;
        newState.twitter.tipsFollowers = data.tipsFollowers;
<<<<<<< HEAD
      }
      newState.twitter.dataReceivedTipCriteria = true;
    } else if (param === "auth/bot" && method === "get") {
      newState.twitter.botStatus = data.message;
    } else if (param === "auth/tw-tip-logs" && method === "get") {
      if (data.length === 0) {
        newState.logMessage = "There is no data to show";
      } else {
        newState.log = data;
        newState.logMessage = "";
=======
        newState.twitter.dataReceivedTipCriteria = true;
      } else if (param === "auth/bot" && method === "get") {
        newState.twitter.botStatus = data.message;
      } else if (param === "auth/tw-tip-logs" && method === "get") {
        if (data.length === 0) {
          newState.logMessage = "There is no data to show";
        } else {
          newState.log = data;
          newState.logMessage = "";
        }


>>>>>>> b97cebb66febd5e50a5b8a57039b14177e91b0ce
      }
    }


    return dispatch(responseResponse(newState));
  };
}

const errorResponse = createAction(ActionTypes.getDataResponseError);

export function getDataResponseError(error, param) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    console.log(error, param, "error");
    if (param === "api/sign-in") {
      newState.login.errorText = "Not correct email or password!";
    }
    return dispatch(errorResponse(newState));
  };
}


export function getData(param, method, obj, token) {

  return (dispatch) => {
    dispatch(getDataRequest(param));
    return api.getData(param, method, obj, token)
      .then(data => dispatch(getDataResponse(data.data, param, method)))
      .catch(error => dispatch(getDataResponseError(error, param)));
  };
}

const emptyData = createAction(ActionTypes.emptyData);

export function emptyDataFunc() {
  return (dispatch) => {
    return dispatch(emptyData());
  };
}