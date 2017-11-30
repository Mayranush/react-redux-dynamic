import axios from "axios";
import store from 'store';
let api;


if (window && !window.api) {
  window.api = api;
}

const getData = (param, method, obj, token) => {

    const tokenFromStore = "Token " + store.getState().projectDataReducer.data.user.token;

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


    if (method === "post"){
        return api.post("/" + param, obj);
    } else if (method === "get") {
        return api.get("/" + param);
    }    
};

export default { getData };