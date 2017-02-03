import I from "immutable";

export default function singleReducer(state = I.fromJS({responseObject: I.List()}), action) {
  switch (action.type) {
  case "SET_RESPONSE_OBJECT":
    return state.set("responseObject", action.data);
  default:
    return state;
  }
}

