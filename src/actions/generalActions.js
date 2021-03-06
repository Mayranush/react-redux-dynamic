import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import store from "store";
import {tools} from "../resources";
import api from "../api/api";
import {changePopup} from "./popupActions";

import {push} from "react-router-redux";

export function errorHandler(error) {
  return (dispatch) => {
    let show = true;
    let resetPassword = false;
    let passwordErrorText = '';
    let text = "";

    if (error.response && error.response.data.message === 'Token is incorrect !') {
      console.log(error.response.data.message === 'Token is incorrect !', "error here you go");
      window.sessionStorage.setItem("token", '');
      window.sessionStorage.setItem("role", '');
      store.dispatch(push('/login'));
      return (dispatch(cleanData()));
    } else if (error.response && error.response.data.status == 400) {
      text = "Error has occurred. Please try again!";
      return dispatch(changePopup(text, show, resetPassword, passwordErrorText));
    } else {
      if (error.length != 0 && error.response) {
        text = error.response.data.message;
      } else {
        text = "Error has occurred. Please try again!";
      }
      return dispatch(changePopup(text, show, resetPassword, passwordErrorText));
    }
  };
}

export const cleanData = createAction(ActionTypes.cleanData);
