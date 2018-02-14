import {ActionTypes} from "../constants/index";
import {handleActions} from "redux-actions";
let defaultState = {};

export default handleActions({
  
  [ActionTypes.getDataRequestActivateAccount]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseActivateAccount]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseErrorActivateAccount]: (state, {payload}) => ({...state, data: payload}),
 
}, defaultState);
