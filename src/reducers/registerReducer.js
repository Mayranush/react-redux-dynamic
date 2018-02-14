import {ActionTypes} from "../constants/index";
import {handleActions} from "redux-actions";

const defaultState = {
    email: '',
    emailErrorText: '',
    twitterAccount: '',
    twitterAccountErrorText: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    passwordErrorText: ''
 };

export default handleActions({
	[ActionTypes.getDataRequestSignUp]: (state) => ({...state}),
	[ActionTypes.getDataResponseSignUp]: (state, {payload}) => ({...state,
		email: payload.email,
		password: payload.password,
		firstname: payload.firstname,
		lastname: payload.lastname,
		twUsername: payload.twitterAccount
	}),
	[ActionTypes.getDataResponseErrorSignUp]: (state, {payload}) => ({...state}),

	[ActionTypes.twitterAccountChange]: (state, {payload}) => ({...state,
		twitterAccount: payload.twitterAccount,
		twitterAccountErrorText: payload.twitterAccountErrorText
	}),
	[ActionTypes.emailChangeInSignUp]: (state, {payload}) => ({...state,
		email: payload.email,
		emailErrorText: payload.emailErrorText
	}),
	[ActionTypes.firstnameChange]: (state, {payload}) => ({...state, firstname: payload}),
	[ActionTypes.lastnameChange]: (state, {payload}) => ({...state, lastname: payload}),
	[ActionTypes.passwordChangeInSignUp]: (state, {payload}) => ({...state,
		password: payload.password,
		passwordErrorText: payload.passwordErrorText}),
	[ActionTypes.confirmChange]: (state, {payload}) => ({...state, 
		confirmPassword: payload.password, 
		passwordErrorText: payload.passwordErrorText
	})

 }, defaultState);
