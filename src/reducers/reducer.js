import {ActionTypes} from "../constants/index";
import {handleActions} from "redux-actions";

const mockData = {
  login: true,
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
    passwordErrorText: ''
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
    botStatus:''
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
  logMessage:''
};
console.log("here in clear")
let clearMocData = JSON.parse(JSON.stringify(mockData));
const defaultState = {
  data: mockData
};

export default handleActions({
  [ActionTypes.changeMessage]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.changeTabInSettings]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataRequest]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponse]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseError]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.emptyData]: (state) => {
    console.log("here in change state-----------------", clearMocData)
    return ({...state, data: clearMocData})
  }
}, defaultState);
