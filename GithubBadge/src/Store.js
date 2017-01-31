import {createStore} from "redux";
import I from "immutable";

function reducer(state = I.fromJS({currentValue: "", totalInput: "", responseObject: I.List()}), action) {
  switch (action.type) {

  case "SET_INPUT_CHANGE":
    return state.set("currentValue", action.data);
  case "SET_TOTAL_INPUT":
    return state.set("totalInput", action.data);
  case "SET_RESPONSE_OBJECT":
    return state.set("responseObject", action.data);
  default:
    return state;
  }
}

let store = createStore(reducer);

export default store;


