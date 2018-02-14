import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";

const changePopupResponse = createAction(ActionTypes.changePopup);

export function changePopup(text, show, resetPassword, passwordErrorText) {
  	return (dispatch) => {
		if (text === 'Token is incorrect !') {
			return(dispatch(cleanData()));
		}
		return dispatch(changePopupResponse({text, show, resetPassword, passwordErrorText}));
    };
}


