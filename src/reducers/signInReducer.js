import {ActionTypes} from "../constants/index";
import {handleActions} from "redux-actions";

const defaultState = {
  email: '',
  password: '',
  emailErrorText: '',
  passwordErrorText: '',
  errorText: '',
  rememberPassword: false
};

export default handleActions({


  [ActionTypes.emailChange]: (state, {payload}) => ({...state, email: payload.email, emailErrorText: payload.message}),
  [ActionTypes.passwordChange]: (state, {payload}) => ({...state, password: payload.password, passwordErrorText: payload.message}),
  [ActionTypes.doesRememberPassword]: (state, {payload}) => ({...state, rememberPassword: payload}),
  [ActionTypes.getDataRequestSignIn]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseErrorSignIn]: (state, {payload}) => {
    return({...state, errorText: payload});
  },

  [ActionTypes.getDataRequestPasswordForget]: (state) => ({...state}),
  [ActionTypes.getDataResponsePasswordForget]: (state) => ({...state}),
  [ActionTypes.getDataResponseErrorPasswordForget]: (state, {payload}) => ({...state, emailErrorText: payload})
  
}, defaultState);
