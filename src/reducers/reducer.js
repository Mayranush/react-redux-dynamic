import {ActionTypes} from "../constants/index";
import {handleActions} from "redux-actions";

const mockData = {
  login: true,
  settingsCurrentTab: 'myDetails',
  user: {
    token: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0QGdtYWlsLmNvbSIsImlkIjoxLCJyb2xlIjoiVVNFUiJ9.C0035V4B5ZD1hh4bCP2pZfNhjq4-kqj4TRxAyHdgJYw7D0Z5I_NiyuW-fOwJHv4vzldEw7_1pbcPlBJhIYMweg'
  },
  login: {
    email: '',
    password: '',
    emailErrorText: '',
    passwordErrorText: '',
    rememberPassword: false
  },
  register: {
    email: '',
    emailErrorText: '',
    twitterAccount: '',
    twitterAccountErrorText: '',
    firstName: '',
    lastName: '',
    password: '',
    passwordErrorText: ''
  }

};
const defaultState = {
  data: mockData
};

export default handleActions({
  [ActionTypes.changeMessage]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.changeTabInSettings]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.request]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.response]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.error]: (state, {payload}) => ({...state, data: payload})
}, defaultState);
