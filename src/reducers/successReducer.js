import {ActionTypes} from "../constants/index";
import {handleActions} from "redux-actions";

const defaultState = {
    message: '',
    hrefToSignIn: false
  };

export default handleActions({
	[ActionTypes.changeSuccessMessage]: (state, {payload}) => ({...state, 
		message: payload.message,
		hrefToSignIn: payload.hrefToSignIn})
}, defaultState);


