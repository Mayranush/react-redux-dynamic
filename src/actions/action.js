import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import store from 'store';
import {tools} from '../resources';

// const loginResponse = createAction(ActionTypes.login);

// export function login(boolForLogin) {
//   return (dispatch) => {
//     let newState = tools.cloneState(store.getState().projectDataReducer.data);
//     newState.login = boolForLogin;
//     return dispatch(loginResponse(newState));
//   };
// }

const changeMessageResponse = createAction(ActionTypes.changeMessage);

export function changeMessage(page,field, message) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().projectDataReducer.data);
    newState[page][field] = message;
    console.log(newState,"newState---------------")
    return dispatch(changeMessageResponse(newState));
  };
}





