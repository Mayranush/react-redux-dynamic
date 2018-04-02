import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import store from "store";
import {tools} from "../resources";
import api from "../api/api";
import {push} from "react-router-redux";
import {changeSuccessMessage} from "./successActions";

const emailChangeResponse = createAction(ActionTypes.emailChange);
const passwordChangeResponse = createAction(ActionTypes.passwordChange);
const doesRememberPasswordResponse = createAction(ActionTypes.doesRememberPassword);

export function emailChange(email) {
  return (dispatch) => {
    let message = '';
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email == '') {
      message = 'email is empty';
    } else if (re.test(email)) {
      message = '';
    } else {
      message = 'not correct email';
    }
    return dispatch(emailChangeResponse({email, message}));
  };
}

export function passwordChange(password) {
  return (dispatch) => {
    let message = '';
    if (password == '') {
      message = 'password is empty';
    } else {
      message = '';
    }
    return dispatch(passwordChangeResponse({password, message}));
  };
}


export function doesRememberPassword(data) {
  return (dispatch) => {
    return dispatch(doesRememberPasswordResponse(data));
  };
}


/////////////////////////////////////////////           sign in       ////////////////////////////////////////////////

const requestResponseSignIn = createAction(ActionTypes.getDataRequestSignIn);

export function getDataRequesSignIn() {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    return dispatch(requestResponseSignIn(newState));
  };
}

const responseResponseSignIn = createAction(ActionTypes.getDataResponseSignIn);

export function getDataResponseSignIn(data) {
  return (dispatch) => {
    let message = '';
    let token = '';
    let role = '';
    if (data.message === 'Your account is not an active.') {
      message = 'Your account is not active.';
      dispatch(changeSuccessMessage(message));
      store.dispatch(push('/message'));
    } else {
      token = data.token;
      role = data.role;
      window.sessionStorage.setItem("token", data.token);
      window.sessionStorage.setItem("role", data.role);
      if (data.role === "USER") {
        store.dispatch(push('/dashboard'));
      } else {
        store.dispatch(push('/charts'));
      }
    }
    return dispatch(responseResponseSignIn({message, token, role}));
  };
}

const errorResponseSignIn = createAction(ActionTypes.getDataResponseErrorSignIn);

export function getDataResponseErrorSignIn(error) {
  return (dispatch) => {
    let errorText = "Not correct email or password!";
    return dispatch(errorResponseSignIn(errorText));
  };
}

export function signIn(obj) {
  return (dispatch) => {
    dispatch(getDataRequesSignIn());
    return api.signIn(obj)
      .then(data => dispatch(getDataResponseSignIn(data.data)))
      .catch(error => dispatch(getDataResponseErrorSignIn(error)));
  };
}

