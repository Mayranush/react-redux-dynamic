import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import store from "store";
import {tools} from "../resources";
import {push} from "react-router-redux";

const errorPopupResponse = createAction(ActionTypes.errorPopup);

export function errorPopup(error) {
  return (dispatch) => {

    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    if (error.response.data.message === 'Token is incorrect !') {
      console.log(newState,"oooooooooooooooooooooooooo");
      newState.user.token = null;
      newState.user.role = '';
      store.dispatch(push('/login'));
    } else {
      newState.popup.show = true;
      newState.popup.resetPassword = false;
      newState.popup.password = '';
      newState.popup.passwordErrorText = '';
      newState.popup.confirmPassword = '';
      if (error.response.data.message.length != 0) {
        newState.popup.text = error.response.data.message;
      } else {
        newState.popup.text = "Error has occurred. Please try again!";
      }

    }

    return dispatch(errorPopupResponse(newState));
  };
}

const changeMessageResponse = createAction(ActionTypes.changeMessage);

export function changeMessage(page, field, message) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    newState[page][field] = message;
    return dispatch(changeMessageResponse(newState));
  };
}
const changePasswordActionResponse = createAction(ActionTypes.changePasswordAction);

export function changePasswordAction(tab) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    newState.popup.resetPassword = true;
    newState.popup.show = true;
    newState.popup.text = '';

    return dispatch(changePasswordActionResponse(newState));
  };
}

const cleanDataResponse = createAction(ActionTypes.cleanData);

export function cleanData() {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);

    newState.user.dataReceived = false;
    newState.user.token = null;
    newState.user.firstname = '';
    newState.user.lastname = '';
    newState.user.email = '';
    newState.user.twUsername = '';
    newState.user.role = '';

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
    newState.register.confirmPassword = '';


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