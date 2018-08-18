import {ActionTypes} from "../constants/index";
import {handleActions} from "redux-actions";

const defaultState = {
  withdrawToken: '',
  address: '',
  withdrawTokenCheck: false,
  withdrawAmount: 0,
  errorWithdrawToken: '',
  errorText: '',
  validToken: false,
  ethVal: ''
};

export default handleActions({
  [ActionTypes.withdrawTokenChange]: (state, {payload}) => ({
    ...state,
    withdrawToken: payload.withdrawToken,
    errorWithdrawToken: payload.message
  }),
  [ActionTypes.changeAddress]: (state, {payload}) => ({
    ...state,
    address: payload.address,
    errorText: payload.message
  }),
  [ActionTypes.getDataResponseWithdrawTokenCheck]: (state, {payload}) => ({
    ...state,
    validToken: payload.validToken,
    ethVal: payload.ethVal
  }),
  [ActionTypes.getDataResponseErrorWithdrawTokenCheck]: (state, {payload}) => ({
    ...state,
    errorWithdrawToken: payload.errorText
  }),

}, defaultState);
