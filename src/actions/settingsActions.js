import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import store from "store";
import {tools} from "../resources";
import api from "../api/api";
import   {errorPopup} from "./action";

const changeTabInSettingsResponse = createAction(ActionTypes.changeTabInSettings);

export function changeTabInSettings(tab) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    newState.settingsCurrentTab = tab;
    return dispatch(changeTabInSettingsResponse(newState));
  };
}


////////////////////////////////////    myDetails     ///////////////////////////////////////////////

const requestResponseMyDetails = createAction(ActionTypes.getDataRequestMyDetails);

export function getDataRequestMyDetails() {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    return dispatch(requestResponseMyDetails(newState));
  };
}

const responseResponseMyDetails = createAction(ActionTypes.getDataResponseMyDetails);

export function getDataResponseMyDetails(data) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    if (data) {
      newState.user.firstname = data.firstname;
      newState.user.lastname = data.lastname;
      newState.user.email = data.email;
      newState.user.twUsername = data.twUsername;
    }
    newState.user.dataReceived = true;
    return dispatch(responseResponseMyDetails(newState));
  };
}


export function myDetails() {
  return (dispatch) => {
    dispatch(getDataRequestMyDetails());
    return api.myDetails()
      .then(data => dispatch(getDataResponseMyDetails(data.data)))
      .catch(error => dispatch(errorPopup(error)));
  };
}

////////////////////////////////////////        twitterSettings     ///////////////////////////////////////////

const requestResponseTwitterSettings = createAction(ActionTypes.getDataRequestTwitterSettings);

export function getDataRequesTwitterSettings() {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    return dispatch(requestResponseTwitterSettings(newState));
  };
}

const responseResponseTwitterSettings = createAction(ActionTypes.getDataResponseTwitterSettings);

export function getDataResponseTwitterSettings(data) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    if (data) {
      newState.twitter.consumerKey = data.consumerKey;
      newState.twitter.consumerSecret = data.consumerSecret;
      newState.twitter.accessToken = data.accessToken;
      newState.twitter.accessTokenSecret = data.accessTokenSecret;
    }
    newState.twitter.dataReceivedApiDetails = true;
    return dispatch(responseResponseTwitterSettings(newState));
  };
}


export function twitterSettings() {
  return (dispatch) => {
    dispatch(getDataRequesTwitterSettings());
    return api.twitterSettings()
      .then(data => dispatch(getDataResponseTwitterSettings(data.data)))
      .catch(error => dispatch(errorPopup(error)));
  };
}

////////////////////////////////////////////         twitterCriteria       /////////////////////////////////////////////////

const requestResponseTwitterCriteria = createAction(ActionTypes.getDataRequestTwitterCriteria);

export function getDataRequesTwitterCriteria() {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    return dispatch(requestResponseTwitterCriteria(newState));
  };
}

const responseResponseTwitterCriteria = createAction(ActionTypes.getDataResponseTwitterCriteria);

export function getDataResponseTwitterCriteria(data) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
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
    return dispatch(responseResponseTwitterCriteria(newState));
  };
}



export function twitterCriteria() {
  return (dispatch) => {
    dispatch(getDataRequesTwitterCriteria());
    return api.twitterCriteria()
      .then(data => dispatch(getDataResponseTwitterCriteria(data.data)))
      .catch(error => dispatch(errorPopup(error)));
  };
}

//////////////////////////////////       myDetailsUpdate        /////////////////////////////////////////////////

const requestResponseMyDetailsUpdate = createAction(ActionTypes.getDataRequestMyDetailsUpdate);

export function getDataRequestMyDetailsUpdate() {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    return dispatch(requestResponseMyDetailsUpdate(newState));
  };
}

const responseResponseMyDetailsUpdate = createAction(ActionTypes.getDataResponseMyDetailsUpdate);

export function getDataResponseMyDetailsUpdate(data) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    if (data) {
      newState.popup.show = true;
      newState.popup.text = "Successfully updated";
      newState.popup.resetPassword = false;
      newState.popup.password = '';
      newState.popup.passwordErrorText = '';
      newState.popup.confirmPassword = '';
    }
    newState.twitter.dataReceived = true;
    return dispatch(responseResponseMyDetailsUpdate(newState));
  };
}


export function myDetailsUpdate(obj) {
  return (dispatch) => {
    dispatch(getDataRequestMyDetailsUpdate());
    return api.myDetailsUpdate(obj)
      .then(data => dispatch(getDataResponseMyDetailsUpdate(data.data)))
      .catch(error => dispatch(errorPopup(error)));
  };
}

////////////////////////////////////      twitterSettingsUpdate      ///////////////////////////////////////////////

const requestResponseTwitterSettingsUpdate = createAction(ActionTypes.getDataRequestTwitterSettingsUpdate);

export function getDataRequestTwitterSettingsUpdate() {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    return dispatch(requestResponseTwitterSettingsUpdate(newState));
  };
}

const responseResponseTwitterSettingsUpdate = createAction(ActionTypes.getDataResponseTwitterSettingsUpdate);

export function getDataResponseTwitterSettingsUpdate(data) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    if (data) {
      newState.popup.show = true;
      newState.popup.text = "Successfully updated";
      newState.popup.resetPassword = false;
      newState.popup.password = '';
      newState.popup.passwordErrorText = '';
      newState.popup.confirmPassword = '';
    }
    newState.twitter.dataReceivedApiDetails = true;
    return dispatch(responseResponseTwitterSettingsUpdate(newState));
  };
}



export function twitterSettingsUpdate(obj) {
  return (dispatch) => {
    dispatch(getDataRequestTwitterSettingsUpdate());
    return api.twitterSettingsUpdate(obj)
      .then(data => dispatch(getDataResponseTwitterSettingsUpdate(data.data)))
      .catch(error => dispatch(errorPopup(error)));
  };
}

/////////////////////////////////////////////          twitterCriteriaUpdate       ////////////////////////////////////////////////

const requestResponseTwitterCriteriaUpdate = createAction(ActionTypes.getDataRequestTwitterCriteriaUpdate);

export function getDataRequestTwitterCriteriaUpdate() {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    return dispatch(requestResponseTwitterCriteriaUpdate(newState));
  };
}

const responseResponseTwitterCriteriaUpdate = createAction(ActionTypes.getDataResponseTwitterCriteriaUpdate);

export function getDataResponseTwitterCriteriaUpdate(data) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    if (data) {
      newState.popup.show = true;
      newState.popup.text = "Successfully updated";
      newState.popup.resetPassword = false;
      newState.popup.password = '';
      newState.popup.passwordErrorText = '';
      newState.popup.confirmPassword = '';
    }
    newState.twitter.dataReceivedTipCriteria = true;
    return dispatch(responseResponseTwitterCriteriaUpdate(newState));
  };
}



export function twitterCriteriaUpdate(obj) {
  return (dispatch) => {
    dispatch(getDataRequestTwitterCriteriaUpdate());
    return api.twitterCriteriaUpdate(obj)
      .then(data => dispatch(getDataResponseTwitterCriteriaUpdate(data.data)))
      .catch(error => dispatch(errorPopup(error)));
  };
}

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



export function botGet() {
  return (dispatch) => {
    dispatch(getDataRequesBotGet());
    return api.botGet()
      .then(data => dispatch(getDataResponseBotGet(data.data)))
      .catch(error => dispatch(errorPopup(error)));
  };
}