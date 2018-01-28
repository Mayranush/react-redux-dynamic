import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import store from "store";
import {tools} from "../resources";
import api from "../api/api";
import {push} from "react-router-redux";

/////////////////////////////////////////////           sign up       ////////////////////////////////////////////////

const requestResponseSignUp = createAction(ActionTypes.getDataRequestSignUp);

export function getDataRequesSignUp() {
    return (dispatch) => {
        let newState = tools.cloneState(store.getState().projectDataReducer.data);
        return dispatch(requestResponseSignUp(newState));
    };
}

const responseResponseSignUp = createAction(ActionTypes.getDataResponseSignUp);

export function getDataResponseSignUp(data) {
    return (dispatch) => {
        let newState = tools.cloneState(store.getState().projectDataReducer.data);
        newState.success.message = 'You have been successfully registered. To activate your account please activate your mail.';
        store.dispatch(push('/success'));  
        return dispatch(responseResponseSignUp(newState));
    };
}

const errorResponseSignUp = createAction(ActionTypes.getDataResponseErrorSignUp);

export function getDataResponseErrorSignUp(error) {
    return (dispatch) => {
        let newState = tools.cloneState(store.getState().projectDataReducer.data);     
        return dispatch(errorResponseSignUp(newState));
    };
}

export function signUp(obj) {    
    return (dispatch) => {
    dispatch(getDataRequesSignUp());
    return api.signUp(obj)
        .then(data => dispatch(getDataResponseSignUp(data.data)))
        .catch(error => dispatch(getDataResponseErrorSignUp(error)));
    };
}

