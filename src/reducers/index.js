import {combineReducers} from "redux";

import general from "./generalReducer";
import user from "./userReducer";
import signIn from "./signInReducer";
import register from "./registerReducer";
import success from "./successReducer";
import twitter from "./twitterReducer";
import table from "./tableReducer";
import admin from "./adminReducer";
import popup from "./popupReducer";
import wallet from "./walletReducer";
import projectDataReducer from "./reducer";
import withdraw from "./withdrawReducer";

const appReducer = combineReducers({
  general,
  user,
  signIn,
  register,
  success,
  twitter,
  table,
  admin,
  popup,
  projectDataReducer,
  wallet,
  withdraw
});

const rootReducer = (state, action) => {
  if (action.type === 'CLEAN_DATA') {
    state = undefined
  }

  return appReducer(state, action)
};

export default rootReducer;
