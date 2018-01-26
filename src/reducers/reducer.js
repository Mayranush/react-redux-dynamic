import {ActionTypes} from "../constants/index";
import {handleActions} from "redux-actions";

const mockData = {
  settingsCurrentTab: 'myDetails',
  user: {
    dataReceived: false,
    token: null,
    firstname: '',
    lastname:'',
    email:'',
    twUsername:''
  },
  login: {
    email: '',
    password: '',
    emailErrorText: '',
    passwordErrorText: '',
    errorText: '',
    rememberPassword: false
  },
  register: {
    email: '',
    emailErrorText: '',
    twitterAccount: '',
    twitterAccountErrorText: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    passwordErrorText: ''
  },
  success: {
    message: '',
  },
  twitter: {
    dataReceivedApiDetails: false,
    dataReceivedTipCriteria: false,
    consumerKey: '',
    consumerSecret: '',
    accessToken: '',
    accessTokenSecret: '',
    minFollowers: 0,
    tipsPerDay: 0,
    tipsPerDayPerUser: 0,
    coinAmount: 0,
    coinType: '',
    hashtags: '',
    // tipsLike: false,
    tipsTweet: false,
    tipsReTweet: false,
    tipsFollowers: false,
    botStatus:'',
    botStart:''
  },
log:[
  {
    twUserName:'',
    tweetId:'',
    tweetText:'',
    reTweetText:'',
    createdAt:'',
    twTime:''
  }

],
  logMessage:'',
  popup: {
    show: false,
    text: ''
  }
};
const defaultState = {
  data: mockData
};

export default handleActions({
    [ActionTypes.changeMessage]: (state, {payload}) => ({...state, data: payload}),
    [ActionTypes.cleanData]: (state, {payload}) => ({...state, data: payload}),
    [ActionTypes.changeTabInSettings]: (state, {payload}) => ({...state, data: payload}),  
    [ActionTypes.getDataRequestSignIn]: (state, {payload}) => ({...state, data: payload}),
    [ActionTypes.getDataResponseSignIn]: (state, {payload}) => ({...state, data: payload}),
    [ActionTypes.getDataResponseErrorSignIn]: (state, {payload}) => ({...state, data: payload}),
    [ActionTypes.getDataRequestSignUp]: (state, {payload}) => ({...state, data: payload}),
    [ActionTypes.getDataResponseSignUp]: (state, {payload}) => ({...state, data: payload}),
    [ActionTypes.getDataResponseErrorSignUp]: (state, {payload}) => ({...state, data: payload}),
    [ActionTypes.getDataRequestMyDetails]: (state, {payload}) => ({...state, data: payload}),
    [ActionTypes.getDataResponseMyDetails]: (state, {payload}) => ({...state, data: payload}),
    [ActionTypes.getDataResponseErrorMyDetails]: (state, {payload}) => ({...state, data: payload}),
    [ActionTypes.getDataRequestTwitterSettings]: (state, {payload}) => ({...state, data: payload}),
    [ActionTypes.getDataResponseTwitterSettings]: (state, {payload}) => ({...state, data: payload}),
    [ActionTypes.getDataResponseErrorTwitterSettings]: (state, {payload}) => ({...state, data: payload}),
    [ActionTypes.getDataRequestTwitterCriteria]: (state, {payload}) => ({...state, data: payload}),
    [ActionTypes.getDataResponseTwitterCriteria]: (state, {payload}) => ({...state, data: payload}),
    [ActionTypes.getDataResponseErrorTwitterCriteria]: (state, {payload}) => ({...state, data: payload}),
    [ActionTypes.getDataRequestMyDetailsUpdate]: (state, {payload}) => ({...state, data: payload}),
    [ActionTypes.getDataResponseMyDetailsUpdate]: (state, {payload}) => ({...state, data: payload}),
    [ActionTypes.getDataResponseErrorMyDetailsUpdate]: (state, {payload}) => ({...state, data: payload}),
    [ActionTypes.getDataRequestTwitterSettingsUpdate]: (state, {payload}) => ({...state, data: payload}),
    [ActionTypes.getDataResponseTwitterSettingsUpdate]: (state, {payload}) => ({...state, data: payload}),
    [ActionTypes.getDataResponseErrorTwitterSettingsUpdate]: (state, {payload}) => ({...state, data: payload}),
    [ActionTypes.getDataRequestTwitterCriteriaUpdate]: (state, {payload}) => ({...state, data: payload}),
    [ActionTypes.getDataResponseTwitterCriteriaUpdate]: (state, {payload}) => ({...state, data: payload}),
    [ActionTypes.getDataResponseErrorTwitterCriteriaUpdate]: (state, {payload}) => ({...state, data: payload}),
    [ActionTypes.getDataRequestBotGet]: (state, {payload}) => ({...state, data: payload}),
    [ActionTypes.getDataResponseBotGet]: (state, {payload}) => ({...state, data: payload}),
    [ActionTypes.getDataResponseErrorBotGet]: (state, {payload}) => ({...state, data: payload}),
    [ActionTypes.getDataRequestBotPost]: (state, {payload}) => ({...state, data: payload}),
    [ActionTypes.getDataResponseBotPost]: (state, {payload}) => ({...state, data: payload}),
    [ActionTypes.getDataResponseErrorBotPost]: (state, {payload}) => ({...state, data: payload}),
    [ActionTypes.getDataRequestBotPut]: (state, {payload}) => ({...state, data: payload}),
    [ActionTypes.getDataResponseBotPut]: (state, {payload}) => ({...state, data: payload}),
    [ActionTypes.getDataResponseErrorBotPut]: (state, {payload}) => ({...state, data: payload}),
    [ActionTypes.getDataRequestTwTipLogs]: (state, {payload}) => ({...state, data: payload}),
    [ActionTypes.getDataResponseTwTipLogs]: (state, {payload}) => ({...state, data: payload}),
    [ActionTypes.getDataResponseErrorTwTipLogs]: (state, {payload}) => ({...state, data: payload})
}, defaultState);
