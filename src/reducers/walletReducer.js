import {ActionTypes} from "../constants/index";
import {handleActions} from "redux-actions";

const defaultState = {
    transactions: [],
    count: 0,
    logMessage: ''
};

export default handleActions({

 // [ActionTypes.getDataRequestPayment]: (state) => ({...state}),
  //[ActionTypes.getDataResponsePayment]: (state, {payload}) => ({...state, usersList: payload}),
  [ActionTypes.getDataResponseTransactions]: (state, {payload}) => {
  		console.log(state,payload,"-----------------------second")
    	return({...state, transactions: payload.list, count: payload.count, logMessage: payload.logMessage});  
  	}
}, defaultState);
