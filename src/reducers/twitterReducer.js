import {ActionTypes} from "../constants/index";
import {handleActions} from "redux-actions";

const defaultState = {
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
    botStatus: '',
    botStart: ''
  };

export default handleActions({


    [ActionTypes.getDataRequestTwitterSettings]: (state) => ({...state}),
    [ActionTypes.getDataResponseTwitterSettings]: (state, {payload}) => {
      console.log(payload,"payload in twitter");
    return ({...state,
      consumerKey: payload && payload.consumerKey ? payload.consumerKey : '',
      consumerSecret: payload && payload.consumerSecret ? payload.consumerSecret : '',
      accessToken: payload && payload.accessToken ? payload.accessToken : '',
      accessTokenSecret: payload && payload.accessTokenSecret ? payload.accessTokenSecret : '', 
      dataReceivedApiDetails: true})
    },

    [ActionTypes.getDataRequestTwitterCriteria]: (state) => ({...state}),
    [ActionTypes.getDataResponseTwitterCriteria]: (state, {payload}) => ({...state,
        minFollowers: payload && payload.minFollowers ? payload.minFollowers : 0,
        tipsPerDay: payload && payload.tipsPerDay ? payload.tipsPerDay : 0,
        tipsPerDayPerUser: payload && payload.tipsPerDayPerUser ? payload.tipsPerDayPerUser : 0,
        coinAmount: payload && payload.coinAmount ? payload.coinAmount : 0,
        coinType: payload && payload.coinType ? payload.coinType : '',
        hashtags: payload && payload.hashtags ? payload.hashtags : '',
        tipsTweet: payload && payload.tipsTweet ? payload.tipsTweet : false,
        tipsReTweet: payload && payload.tipsReTweet ? payload.tipsReTweet : false,
        tipsFollowers: payload && payload.tipsFollowers ? payload.tipsFollowers : false,
        dataReceivedTipCriteria: true}),

    [ActionTypes.getDataRequestTwitterSettingsUpdate]: (state) => ({...state}),
    [ActionTypes.getDataResponseTwitterSettingsUpdate]: (state, {payload}) => ({...state, 
      consumerKey: payload.consumerKey,
      consumerSecret: payload.consumerSecret,
      accessToken: payload.accessToken,
      accessTokenSecret: payload.accessTokenSecret,
      dataReceivedApiDetails: true}),

    [ActionTypes.getDataRequestTwitterCriteriaUpdate]: (state) => ({...state}),
    [ActionTypes.getDataResponseTwitterCriteriaUpdate]: (state, {payload}) => ({...state,
      minFollowers: payload.minFollowers,
      tipsPerDay: payload.tipsPerDay,
      tipsPerDayPerUser: payload.tipsPerDayPerUser,
      coinAmount: payload.coinAmount,
      coinType: payload.coinType,
      hashtags: payload.hashtags,
      tipsTweet: payload.tipsTweet,
      tipsReTweet: payload.tipsReTweet,
      tipsFollowers: payload.tipsFollowers,
      dataReceivedTipCriteria: true}),

    [ActionTypes.getDataRequestBotGet]: (state) => ({...state}),
    [ActionTypes.getDataResponseBotGet]: (state, {payload}) => ({...state, botStatus: payload}),

    [ActionTypes.getDataRequestBotPost]: (state) => ({...state}),
    [ActionTypes.getDataResponseBotPost]: (state, {payload}) => ({...state, botStatus: payload.botStatus, botStart: payload.botStart}),

    [ActionTypes.getDataRequestBotPut]: (state) => ({...state}),
    [ActionTypes.getDataResponseBotPut]: (state, {payload}) => ({...state, botStatus: payload}),

    [ActionTypes.changeBotStatus]: (state, {payload}) => ({...state, botStatus: payload}),
    [ActionTypes.changeBotStart]: (state, {payload}) => ({...state, botStart: payload}),
}, defaultState);
