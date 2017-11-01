import {ActionTypes} from "../constants/index";
import {handleActions} from "redux-actions";

const mockData = {
  login: true,
  email: '',
  password: '',    
  emailErrorText: '',   
  passwordErrorText: '',
  rememberPassword: false  
};

const defaultState = {
  data: mockData
};

export default handleActions({
  [ActionTypes.changeMessage]: (state, { payload }) => ({ ...state, data: payload })
}, defaultState);
