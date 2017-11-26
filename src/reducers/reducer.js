import {ActionTypes} from "../constants/index";
import {handleActions} from "redux-actions";

const mockData = {
  login: true,
  settingsCurrentTab: 'myDetails',
  login: {
    email: '',
    password: '',
    emailErrorText: '',
    passwordErrorText: '',
    rememberPassword: false
  },
  register: {
    email:'',
    emailErrorText: '',
    twitterAccount:'',
    twitterAccountErrorText:'',
    firstName:'',
    lastName:'',
    password: '',
    passwordErrorText: ''
  }

};
const defaultState = {
  data: mockData
};

export default handleActions({
  [ActionTypes.changeMessage]: (state, { payload }) => ({ ...state, data: payload }),
  [ActionTypes.changeTabInSettings]: (state, { payload }) => ({ ...state, data: payload }),
  [ActionTypes.request]: (state, { payload }) => ({ ...state, data: payload }),
  [ActionTypes.response]: (state, { payload }) => ({ ...state, data: payload }),
  [ActionTypes.error]: (state, { payload }) => ({ ...state, data: payload })
}, defaultState);
