import axios from "axios";

const api = axios.create({
  baseURL: "http://104.237.3.213:8888"
  // headers: { "X-AUTH-TOKEN": tools.getUrlVars().xauthtoken || tools.getResHeaderByName("X-AUTH-TOKEN") }
});

if (window && !window.api) {
  window.api = api;
}

const getData = (param, method, obj) => {
    if (method === "post"){
        console.log("here in api")
        return api.post("/" + param, obj);
    } else if (method === "get") {
        return api.get("/" + param);
    }    
};

export default { getData };