import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";

const changeSuccessMessageResponce = createAction(ActionTypes.changeSuccessMessage);

export function changeSuccessMessage(message, hrefToSignIn) {
  return (dispatch) => {
    return dispatch(changeSuccessMessageResponce({message, hrefToSignIn}));
  };
}
