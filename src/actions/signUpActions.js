import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import store from "store";
import {tools} from "../resources";
import api from "../api/api";
import {push} from "react-router-redux";
import {changeSuccessMessage} from "./successActions";

const twitterAccountChangeResponce = createAction(ActionTypes.twitterAccountChange);
const emailChangeResponce = createAction(ActionTypes.emailChangeInSignUp);
const firstnameChangeResponce = createAction(ActionTypes.firstnameChange);
const lastnameChangeResponce = createAction(ActionTypes.lastnameChange);
const passwordChangeResponce = createAction(ActionTypes.passwordChangeInSignUp);
const passwordChangeResponceInPopup = createAction(ActionTypes.passwordChangeInPopup);
const confirmChangeResponce = createAction(ActionTypes.confirmChange);
const confirmChangeResponceInPopup = createAction(ActionTypes.confirmChangeInPopup);

export function twitterAccountChange(twitterAccount) {
  return (dispatch) => {
    let twitterAccountErrorText = "";
    if (twitterAccount == "") {
        twitterAccountErrorText = "Twitter account is empty";
    } else {
        twitterAccountErrorText = "";
    }
    return dispatch(twitterAccountChangeResponce({twitterAccount, twitterAccountErrorText}));
  };
}

export function emailChangeInSignUp(email) {
    return (dispatch) => {
        let emailErrorText = "";
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email == '') {
          emailErrorText = 'email is empty';
        } else if (re.test(email)) {
          emailErrorText = "" ;
        } else {
          emailErrorText = 'not correct email';
        }
        return dispatch(emailChangeResponce({email, emailErrorText}));
    };
}

export function firstnameChange(firstname) {
    return (dispatch) => {
        return dispatch(firstnameChangeResponce(firstname));
    };
}

export function lastnameChange(lastname) {
    return (dispatch) => {
        return dispatch(lastnameChangeResponce(lastname));
    };
}

const passwordCompare = (password, confirmPassword) => {
    let passwordErrorText = "";
    if (password == "") {
      passwordErrorText = "password is empty";
    } else  if (password == confirmPassword) {
      passwordErrorText = "";
    }
    else {
      passwordErrorText = 'password not matching';
    }
    return ({password, passwordErrorText})
}
 
export function passwordChangeInSignUp(password, confirmPassword) {
    return (dispatch) => {
        let obj = passwordCompare(password, confirmPassword);
        return dispatch(passwordChangeResponce(obj));
    };
}

export function confirmChange(confirmPassword, password) {
    return (dispatch) => {
        let obj = passwordCompare(confirmPassword, password);
        return dispatch(confirmChangeResponce(obj));
    };
}

export function confirmChangeInPopup(confirmPassword, password) {
    return (dispatch) => {
        let obj = passwordCompare(confirmPassword, password);
        return dispatch(confirmChangeResponceInPopup(obj));
    };
}

export function passwordChangeInPopup(password, confirmPassword) {
    return (dispatch) => {
        let obj = passwordCompare(password, confirmPassword);
        return dispatch(passwordChangeResponceInPopup(obj));
    };
}

/////////////////////////////////////////////           sign up       ////////////////////////////////////////////////

const requestResponseSignUp = createAction(ActionTypes.getDataRequestSignUp);

export function getDataRequesSignUp() {
    return (dispatch) => {
        return dispatch(requestResponseSignUp());
    };
}

const responseResponseSignUp = createAction(ActionTypes.getDataResponseSignUp);

export function getDataResponseSignUp(data, obj) {
    return (dispatch) => {
        let message = 'You have been successfully registered. To activate your account please activate your mail.';
        dispatch(changeSuccessMessage(message, false));
        store.dispatch(push('/message'));
        return dispatch(responseResponseSignUp(obj));
    };
}

const errorResponseSignUp = createAction(ActionTypes.getDataResponseErrorSignUp);

export function getDataResponseErrorSignUp(error) {
    return (dispatch) => {
        return dispatch(errorResponseSignUp());
    };
}

export function signUp(obj) {  
    return (dispatch) => {
    dispatch(getDataRequesSignUp());
    return api.signUp(obj)
        .then(data => dispatch(getDataResponseSignUp(data.data)))
        .catch(error => dispatch(getDataResponseErrorSignUp(error)));
    };
}

