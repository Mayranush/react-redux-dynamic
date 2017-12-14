
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

const cleanDataResponse = createAction(ActionTypes.cleanData);

export function cleanData() {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);

    console.log(newState,"oooooooooooin clean dataooooooooooooooooooo");

    newState.user.dataReceived = false;
    newState.user.token = null;
    newState.user.firstname = '';
    newState.user.lastname = '';
    newState.user.email = '';
    newState.user.twUsername = '';

    newState.login.email = '';
    newState.login.password = '';
    // newState.login.emailErrorText = '';
    // newState.login.passwordErrorText = '';
    // newState.login.errorText = '';
    newState.login.rememberPassword = false;


    newState.register.email = '';
    // newState.register.emailErrorText = '';
    // newState.register.twitterAccountErrorText = '';
    newState.register.firstName = '';
    newState.register.lastName = '';
    newState.register.password = '';
    // newState.register.passwordErrorText = '';
    newState.register.password = '';


    newState.twitter.dataReceivedApiDetails = false;
    newState.twitter.dataReceivedTipCriteria = false;
    newState.twitter.consumerKey = '';
    newState.twitter.consumerSecret = '';
    newState.twitter.accessToken = '';
    newState.twitter.accessTokenSecret = '';
    newState.twitter.minFollowers = 0;
    newState.twitter.tipsPerDay = 0;
    newState.twitter.tipsPerDayPerUser = 0;
    newState.twitter.coinAmount = 0;
    newState.twitter.coinType = '';
    newState.twitter.hashtags = '';
    newState.twitter.tipsTweet = false;
    newState.twitter.tipsReTweet = false;
    newState.twitter.tipsFollowers = false;
    newState.twitter.tipsTweet = false;
    newState.twitter.tipsTweet = false;
    newState.twitter.botStatus = '';
    newState.twitter.botStart = '';
    newState.log = [];

    return dispatch(cleanDataResponse(newState));
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
    let newState = tools.cloneState(store.getState().projectDataReducer.data);

    if (param === "api/sign-in") {
      newState.user.token = data.token;
      window.sessionStorage.setItem("token", data.token);
      store.dispatch(push('/dashboard'));
    } else if (param === "api/sign-up") {
      store.dispatch(push('/success'));
    } else if (param === "auth/settings" && method === "get") {
      if (data) {
        newState.user.firstname = data.firstname;
        newState.user.lastname = data.lastname;
        newState.user.email = data.email;
        newState.user.twUsername = data.twUsername;
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
        newState.twitter.minFollowers = data.minFollowers;
        newState.twitter.tipsPerDay = data.tipsPerDay;
        newState.twitter.tipsPerDayPerUser = data.tipsPerDayPerUser;
        newState.twitter.coinAmount = data.coinAmount;
        newState.twitter.coinType = data.coinType;
        newState.twitter.hashtags = data.hashtags;
        // newState.twitter.tipsLike = data.tipsLike;
        newState.twitter.tipsTweet = data.tipsTweet;
        newState.twitter.tipsReTweet = data.tipsReTweet;
        newState.twitter.tipsFollowers = data.tipsFollowers;
      }
      newState.twitter.dataReceivedTipCriteria = true;
    } else if (param === "auth/bot" && method === "get") {
      if (data) {
        newState.twitter.botStatus = data.message;
      }
    }  else if (param === "auth/bot" && method === "post") {
      if (data) {
        if(data.message ==="STARTED."){
          newState.twitter.botStatus = "RUNNING";
        }
        newState.twitter.botStart = data.message;
      }
    }else if (param === "auth/tw-tip-logs" && method === "get") {
      if (data.length === 0) {
        newState.logMessage = "There is no data to show";
      } else {
        newState.log = data;
        newState.logMessage = "";
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