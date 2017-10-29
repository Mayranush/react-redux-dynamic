import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import store from 'store';

const loginResponse = createAction(ActionTypes.login);

export function login(boolForLogin) {
  return (dispatch) => {
    let newState = Object.Create({},state,{login: boolForLogin});
    return dispatch(loginResponse(newState));
  };
}







