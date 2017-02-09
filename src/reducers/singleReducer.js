import I from "immutable";

export default function singleReducer(state = I.Map(), action) {
  switch (action.type) {
  case "SET_RESPONSE_OBJECT":
    return state.set("responseObject", action.data);
  case "SET_USERNAME":
    return state.set("username", action.data);
  default:
    return state;
  }
}

