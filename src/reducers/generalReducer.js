import {ActionTypes} from "../constants/index";
import {handleActions} from "redux-actions";

const defaultState = {
  token: '',
  role: '',
  vid: ''
};

export default handleActions({


  [ActionTypes.getDataResponseSignIn]: (state, {payload}) => {
    if (payload.message === '') {
      return({...state, token: payload.token, role: payload.role});  
    } else {
      return({...state});  
    }
  },

  [ActionTypes.cleanData]: (state) => ({...state}),

  [ActionTypes.getDataRequestCheck]: (state) => ({...state}),
  [ActionTypes.getDataResponseCheck]: (state, {payload}) => ({...state, vid: payload}),
  [ActionTypes.getDataResponseErrorCheck]: (state) => ({...state}),

  [ActionTypes.getDataRequestReset]: (state) => ({...state}),
  [ActionTypes.getDataResponseReset]: (state) => ({...state}),
  
}, defaultState);
