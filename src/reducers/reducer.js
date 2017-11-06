import {ActionTypes} from "../constants/index";
import {handleActions} from "redux-actions";

const mockData = {
  login: true,
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
  [ActionTypes.changeMessage]: (state, { payload }) => ({ ...state, data: payload })
}, defaultState);
