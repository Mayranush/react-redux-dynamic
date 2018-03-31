import axios from "axios";
import store from "store";
let api;


if (window && !window.api) {
  window.api = api;
}

let addHeaders = (token) => {
  const tokenFromStore = "Token " + (store.getState().general.token || window.sessionStorage.getItem("token"));

  if (token) {
    api = axios.create({
      baseURL: "http://104.237.3.213:8888",
      headers: {"Authorization": tokenFromStore}
    });
  } else {
    api = axios.create({
      baseURL: "http://104.237.3.213:8888"
    });
  }

  return api;
};

const signIn = (obj) => {
  addHeaders(false);
  return api.post("/api/sign-in", obj);
};

const signUp = (obj) => {
  addHeaders(false);
  return api.post("/api/sign-up", obj);
};

const passwordForget = (obj) => {
  addHeaders(false);
  return api.post("/api/forget", obj);
};

const activateAccount = (obj) => {
  addHeaders(false);
  return api.post("/api/active", obj);
};

const check = (vid) => {
  addHeaders(false);
  return api.get("/api/check?vid=" + vid);
};

const resetPassword = (obj) => {
  addHeaders(false);
  return api.post("/api/reset", obj);
};

const myDetails = () => {
  addHeaders(true);
  return api.get("/auth/settings");
};

const twitterSettings = () => {
  addHeaders(true);
  return api.get("/auth/tw-api-details");
};

const twitterCriteria = () => {
  addHeaders(true);
  return api.get("/auth/tw-tip-criteria");
};

const myDetailsUpdate = (obj) => {
  addHeaders(true);
  return api.post("/auth/settings", obj);
};

const changePassword = (obj) => {
  addHeaders(true);
  return api.post("/auth/reset", obj);
};

const twitterSettingsUpdate = (obj) => {
  addHeaders(true);
  return api.post("/auth/tw-api-details", obj);
};

const twitterCriteriaUpdate = (obj) => {
  addHeaders(true);
  return api.post("/auth/tw-tip-criteria", obj);
};

const botGet = () => {
  addHeaders(true);
  return api.get("/auth/bot");
};

const botPost = () => {
  addHeaders(true);
  return api.post("/auth/bot");
};

const botPut = () => {
  addHeaders(true);
  return api.put("/auth/bot");
};

const twTipLogs = () => {
  addHeaders(true);
  return api.get("/auth/tw-tip-logs");
};

const getUsersList = (page, size) => {
  addHeaders(true);
  return api.get("/auth/users?page=" + page + "&size=" + size);
};


const getAdminsList = () => {
  addHeaders(true);
  return api.get("/auth/admin");
};

const deleteAdmin = (id) => {
  addHeaders(true);
  return api.delete("/auth/admin?id=" + id);
};

const addAdmin = (id) => {
  addHeaders(true);
  return api.post("/auth/admin?id=" + id);
};

const disableUser = (id) => {
  addHeaders(true);
  return api.post("/auth/disable?id=" + id);
};

const enableUser = (id) => {
  addHeaders(true);
  return api.post("/auth/enable?id=" + id);
};
const addTransaction = (transaction) => {
  addHeaders(true);
  return api.post("/auth/transaction",transaction);
};

export default {
  addTransaction,
  signIn,
  signUp,
  passwordForget,
  myDetails,
  twitterSettings,
  twitterCriteria,
  myDetailsUpdate,
  twitterSettingsUpdate,
  twitterCriteriaUpdate,
  botGet,
  botPost,
  botPut,
  twTipLogs,
  activateAccount,
  check,
  resetPassword,
  getUsersList,
  disableUser,
  enableUser,
  changePassword,
  getAdminsList,
  deleteAdmin,
  addAdmin
};

