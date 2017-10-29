import {ActionTypes} from "../constants/index";
import {handleActions} from "redux-actions";

const mockData = [{
  login: true

}];

const defaultState = {
  data: mockData
};

export default handleActions({
  [ActionTypes.login]: (state, { payload }) => ({ ...state, data: payload })
}, defaultState);
