const ActionTypes = {
  cleanData: "CLEAN_DATA",

  changeTabInSettings: "CHANGE_TAB_IN_SETTINGS",

  getDataRequestSignIn: "GET_DATA_REQUEST_SIGN_IN",
  getDataResponseSignIn: "GET_DATA_RESPONSE_SIGN_IN",
  getDataResponseErrorSignIn: "GET_DATA_RESPONSE_ERROR_SIGN_IN",
  getDataRequestSignUp: "GET_DATA_REQUEST_SIGN_UP",
  getDataResponseSignUp: "GET_DATA_RESPONSE_SIGN_UP",
  getDataResponseErrorSignUp: "GET_DATA_RESPONSE_ERROR_SIGN_UP",

  getDataRequestPasswordForget: "GET_DATA_REQUEST_PASSWORD_FORGET",
  getDataResponsePasswordForget: "GET_DATA_RESPONSE_PASSWORD_FORGET",
  getDataResponseErrorPasswordForget: "GET_DATA_RESPONSE_ERROR_PASSWORD_FORGET",
  
  getDataRequestChangePassword: "GET_DATA_REQUEST_CHANGE_PASSWORD",
  getDataResponseChangePassword: "GET_DATA_RESPONSE_CHANGE_PASSWORD",
  getDataResponseErrorChangePassword: "GET_DATA_RESPONSE_ERROR_CHANGE_PASSWORD",


  getDataRequestMyDetails: "GET_DATA_REQUEST_MY_DETAILS",
  getDataResponseMyDetails: "GET_DATA_RESPONSE_MY_DETAILS",
  getDataRequestTwitterSettings: "GET_DATA_REQUEST_TWITTER_SETTINGS",
  getDataResponseTwitterSettings: "GET_DATA_RESPONSE_TWITTER_SETTINGS",
  getDataRequestTwitterCriteria: "GET_DATA_REQUEST_TWITTER_CRITERIA",
  getDataResponseTwitterCriteria: "GET_DATA_RESPONSE_TWITTER_CRITERIA",
  getDataRequestMyDetailsUpdate: "GET_DATA_REQUEST_MY_DETAILS_UPDATE",
  getDataResponseMyDetailsUpdate: "GET_DATA_RESPONSE_MY_DETAILS_UPDATE",
  getDataRequestTwitterSettingsUpdate: "GET_DATA_REQUEST_TWITTER_SETTINGS_UPDATE",
  getDataResponseTwitterSettingsUpdate: "GET_DATA_RESPONSE_TWITTER_SETTINGS_UPDATE",
  getDataRequestTwitterCriteriaUpdate: "GET_DATA_REQUEST_TWITTER_CRITERIA_UPDATE",
  getDataResponseTwitterCriteriaUpdate: "GET_DATA_RESPONSE_TWITTER_CRITERIA_UPDATE",

  getDataRequestBotGet: "GET_DATA_REQUEST_BOT_GET",
  getDataResponseBotGet: "GET_DATA_RESPONSE_TWITTER_BOT_GET",
  getDataRequestBotPost: "GET_DATA_REQUEST_BOT_POST",
  getDataResponseBotPost: "GET_DATA_RESPONSE_TWITTER_BOT_POST",
  getDataRequestBotPut: "GET_DATA_REQUEST_BOT_PUT",
  getDataResponseBotPut: "GET_DATA_RESPONSE_TWITTER_BOT_PUT",
  changeBotStart: "CHANGE_BOT_START",
  changeBotStatus: "CHANGE_BOT_STATUS",
  getDataRequestPayment: "GET_DATA_REQUEST_PAYMENT",
  getDataResponsePayment: "GET_DATA_RESPONSE_TWITTER_PAYMENT",

  getDataRequestTwTipLogs: "GET_DATA_REQUEST_TW_TIP_LOGS",
  getDataResponseTwTipLogs: "GET_DATA_RESPONSE_TW_TIP_LOGS",
  
  getDataRequestCheck: "GET_DATA_REQUEST_CHECK",
  getDataResponseCheck: "GET_DATA_RESPONSE_CHECK",
  getDataResponseErrorCheck: "GET_DATA_RESPONSE_ERROR_CHECK",
  
  getDataRequestReset: "GET_DATA_REQUEST_RESET",
  getDataResponseReset: "GET_DATA_RESPONSE_RESET",
  getDataResponseErrorReset: "GET_DATA_RESPONSE_ERROR_RESET", 

  getDataRequestTransactions: "GET_DATA_REQUEST_TRANSACTIONS",
  getDataResponseTransactions: "GET_DATA_RESPONSE_TRANSACTIONS",
  getDataRequestPending: "GET_DATA_REQUEST_PENDING",
  getDataResponsePending: "GET_DATA_RESPONSE_PENDING",
  getDataRequestBalance: "GET_DATA_REQUEST_BALANCE",
  getDataResponseBalance: "GET_DATA_RESPONSE_BALANCE",


  getDataRequestActivateAccount: "GET_DATA_REQUEST_ACTIVATE_ACCOUNT",
  getDataResponseActivateAccount: "GET_DATA_RESPONSE_ACTIVATE_ACCOUNT",
  getDataResponseErrorActivateAccount: "GET_DATA_RESPONSE_ERROR_ACTIVATE_ACCOUNT",

  getDataRequestGetUsersList: "GET_DATA_REQUEST_GET_USERS_LIST",
  getDataResponseGetUsersList: "GET_DATA_RESPONSE_GET_USERS_LIST",
  getDataRequestDisableUser: "GET_DATA_REQUEST_DISABLE_USER",
  getDataResponseDisableUser: "GET_DATA_RESPONSE_DISABLE_USER",
  getDataResponseDisableAdmin: "GET_DATA_RESPONSE_DISABLE_ADMIN",
  getDataRequestEnableUser: "GET_DATA_REQUEST_ENABLE_USER",
  getDataResponseEnableUser: "GET_DATA_RESPONSE_ENABLE_USER",
  getDataResponseEnableAdmin: "GET_DATA_RESPONSE_ENABLE_ADMIN",
  getDataRequestGetAdminsList: "GET_DATA_REQUEST_GET_ADMIN_LIST",
  getDataResponseGetAdminsList: "GET_DATA_RESPONSE_GET_ADMIN_LIST",
  getDataRequestDeleteAdmin: "GET_DATA_REQUEST_DELETE_ADMIN",
  getDataResponseDeleteAdmin: "GET_DATA_RESPONSE_DELETE_ADMIN",
  getDataRequestAddAdmin: "GET_DATA_REQUEST_ADD_ADMIN",
  getDataResponseAddAdmin: "GET_DATA_RESPONSE_ADD_ADMIN",

  emailChange: "EMAIL_CHANGE",
  passwordChange: "PASSWORD_CHANGE",
  doesRememberPassword: "DOES_REMEMBER_PASSWORD",
  changePopup: "CHANGE_POPUP",
  twitterAccountChange: "TWITTER_ACCOUNT_CHANGE",
  emailChangeInSignUp: "EMAIL_CHANGE_IN_SIGN_UP",
  firstnameChange: "FIRST_NAME_CHANGE",
  lastnameChange: "LAST_NAME_CHANGE",
  passwordChangeInSignUp: "PASSWORD_CHANGE_IN_SIGN_UP",
  passwordChangeInPopup: "PASSWORD_CHANGE_IN_POPUP",
  confirmChange: "CONFIRM_CHANGE",
  confirmChangeInPopup: "CONFIRM_CHANGE_IN_POPUP",
  changeSuccessMessage: "CHANGE_SUCCESS_MESSAGE"
};

export default ActionTypes;