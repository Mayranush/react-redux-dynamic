import {ActionTypes} from "../constants/index";
import {handleActions} from "redux-actions";

const mockData = {
  login: true,
  settingsCurrentTab: 'myDetails',
  user: {
    token: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0MUBnbWFpbC5jb20iLCJpZCI6Mywicm9sZSI6IlVTRVIifQ.EpHwCTVn3865j0l82vvKLvTP0JjQ9iCEOR-_jqUdrodkWCFKnlqMlEPm-XqITuqKCjIwMWyzN_E79IQ1I7oSXg",
    firstName: ''
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
  [ActionTypes.getDataRequest]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponse]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseError]: (state, {payload}) => ({...state, data: payload})
}, defaultState);
