import {ActionTypes} from "../constants/index";
import {handleActions} from "redux-actions";

const defaultState = {
    ethAddress: ''
};

export default handleActions({
	[ActionTypes.receiveAccount]: (state, {payload}) => {
		console.log(state,payload,"-----------------------first")
    	return({...state, ethAddress: payload});  
  	},
  	[ActionTypes.changeAccount]: (state, {payload}) => {
  		console.log(state,payload,"-----------------------second")
    	return({...state, ethAddress: payload});  
  	} 
}, defaultState);
