import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import store from "store";
import {tools} from "../resources";
import api from "../api/api";
import {push} from "react-router-redux";

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
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    if(data.message === 'Your account is not an active.'){
      newState.success.message = 'Your account is not active.' ;
      store.dispatch(push('/message'));
    }else {
      newState.user.token = data.token;
      newState.user.role = data.role;
      window.sessionStorage.setItem("token", data.token);
      setTimeout(
        () => {
          console.log(newState.user,"in sign in oooooooooooo");
          newState.user.token = null;
          newState.user.role = '';
          window.sessionStorage.setItem("token", '');
        }, 3590000);
      store.dispatch(push('/dashboard'));
    }

    return dispatch(responseResponseSignIn(newState));
  };
}

const errorResponseSignIn = createAction(ActionTypes.getDataResponseErrorSignIn);

export function getDataResponseErrorSignIn(error) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    newState.login.errorText = "Not correct email or password!";
    return dispatch(errorResponseSignIn(newState));
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

