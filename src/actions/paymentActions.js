import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import store from "store";
import {tools} from "../resources";
import api from "../api/api";
import {errorHandler} from "./generalActions";



/////////////////////////////////////////////          bot post      ////////////////////////////////////////////////

const requestResponsePayment = createAction(ActionTypes.getDataRequestPayment);

export function getDataRequestPayment() {
    return (dispatch) => {
        return dispatch(requestResponsePayment());
    };
}

const responseResponsePayment = createAction(ActionTypes.getDataResponsePayment);

export function getDataResponsePayment(data) {
    return (dispatch) => {
      console.log(data,"dsgsdgsg");
   //   return dispatch(responseResponseBotPost({botStatus, botStart}));
    };
}

export function payment() {
    return (dispatch) => {
    dispatch(getDataRequestPayment());
    return api.authUserEther()
        .then(data => dispatch(getDataResponsePayment(data.data)))
        .catch(error => dispatch(errorHandler(error)));
    };
}

