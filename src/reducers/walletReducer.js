import {ActionTypes} from "../constants/index";
import {handleActions} from "redux-actions";

const defaultState = {
    transactions: [],

};

export default handleActions({

  [ActionTypes.getDataRequestPayment]: (state) => ({...state}),
  [ActionTypes.getDataResponsePayment]: (state, {payload}) => ({...state, usersList: payload}),

}, defaultState);
