import {ActionTypes} from "../constants/index";
import {handleActions} from "redux-actions";

const defaultState = {
    dataReceived: false,
    firstname: '',
    lastname: '',
    email: '',
    twUsername: '',
    vid: '',
    settingsCurrentTab: 'myDetails'
  };

export default handleActions({
  [ActionTypes.getDataRequestMyDetails]: (state) => ({...state}),
  [ActionTypes.getDataResponseMyDetails]: (state, {payload}) => {
  return ({...state,
    firstname: payload.firstname,
    lastname: payload.lastname, 
    email: payload.email,
    twUsername: payload.twUsername, 
    dataReceived: true})
  },

  [ActionTypes.getDataRequestMyDetailsUpdate]: (state) => ({...state}),
  [ActionTypes.getDataResponseMyDetailsUpdate]: (state, {payload}) => {
   return({...state, 
    firstname: payload.firstname,
    lastname: payload.lastname, 
    twUsername: payload.twUsername, 
    dataReceived: true});    
  },

  [ActionTypes.changeTabInSettings]: (state, {payload}) => ({...state, settingsCurrentTab: payload}),
}, defaultState);
