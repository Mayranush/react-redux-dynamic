import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import store from "store";
import {tools} from "../resources";
import api from "../api/api";
import {push} from "react-router-redux";
import {changeSuccessMessage} from "./successActions";

const withdrawTokenResponse = createAction(ActionTypes.withdrawTokenChange);
const changeAddressResponse = createAction(ActionTypes.changeAddress);

export function withdrawTokenChange(withdrawToken) {
  return (dispatch) => {
    let message = '';
    if (withdrawToken == '') {
      message = "Your Withdraw Token can't be empty";
    } else {
      message = '';
    }
    return dispatch(withdrawTokenResponse({withdrawToken, message}));
  };
}

export function changeAddress(address) {
  return (dispatch) => {
    let message = '';
    if (address == '') {
      message = "Your ETH address can't be empty";
    } else {
      message = '';
    }
    return dispatch(changeAddressResponse({address, message}));
  };
}


/////////////////////////////////////////////           check Token      ////////////////////////////////////////////////

const requestResponseWithdrawTokenCheck = createAction(ActionTypes.getDataRequestWithdrawTokenCheck);

export function getDataRequestWithdrawTokenCheck() {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    return dispatch(requestResponseWithdrawTokenCheck(newState));
  };
}

const responseResponseWithdrawTokenCheck = createAction(ActionTypes.getDataResponseWithdrawTokenCheck);

export function getDataResponseWithdrawTokenCheck(data) {
  return (dispatch) => {
    let validToken = true;
    let ethVal = data.tipAmount;
    return dispatch(responseResponseWithdrawTokenCheck({validToken, ethVal}));
  };
}

const errorResponseWithdrawTokenCheck = createAction(ActionTypes.getDataResponseErrorWithdrawTokenCheck);

export function getDataResponseErrorWithdrawTokenCheck(error) {
  return (dispatch) => {
    let errorText = "Not correct Token!";
    return dispatch(errorResponseWithdrawTokenCheck({errorText}));
  };
}

export function checkWithdrawToken(withdrawToken) {
  return (dispatch) => {
    dispatch(getDataRequestWithdrawTokenCheck());
    return api.checkWithdrawToken(withdrawToken)
      .then(data => dispatch(getDataResponseWithdrawTokenCheck(data.data)))
      .catch(error => dispatch(getDataResponseErrorWithdrawTokenCheck(error)));
  };
}

// /////////////////////////////////////////////           submit       ////////////////////////////////////////////////
//
// const requestResponseWithdrawTokenCheck = createAction(ActionTypes.getDataRequestWithdrawTokenCheck);
//
// export function getDataRequestWithdrawTokenCheck() {
//   return (dispatch) => {
//     let newState = tools.cloneState(store.getState().projectDataReducer.data);
//     return dispatch(requestResponseWithdrawTokenCheck(newState));
//   };
// }
//
// const responseResponseWithdrawTokenCheck = createAction(ActionTypes.getDataResponseWithdrawTokenCheck);
//
// export function getDataResponseWithdrawTokenCheck(data, withdrawToken, address) {
//   return (dispatch) => {
//
//     return dispatch(responseResponseWithdrawTokenCheck({}));
//   };
// }
//
// const errorResponseWithdrawTokenCheck = createAction(ActionTypes.getDataResponseErrorWithdrawTokenCheck);
//
// export function getDataResponseErrorWithdrawTokenCheck(error) {
//   return (dispatch) => {
//     let errorText = "Not correct Token!";
//     return dispatch(errorResponseWithdrawTokenCheck({errorText}));
//   };
// }
//
// export function checkWithdrawToken(withdrawToken, address) {
//   return (dispatch) => {
//     dispatch(getDataRequestWithdrawTokenCheck());
//     return api.checkWithdrawToken(withdrawToken)
//       .then(data => dispatch(getDataResponseWithdrawTokenCheck(data.data, withdrawToken, address)))
//       .catch(error => dispatch(getDataResponseErrorWithdrawTokenCheck(error)));
//   };
// }
//
