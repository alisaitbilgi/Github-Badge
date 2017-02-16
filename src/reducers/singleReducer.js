import I from "immutable";

export default function singleReducer(state = I.Map(), action) {
  switch (action.type) {
  case "SET_USER_INFO":
    return state.set("badgeUserInfo", action.data);
  case "SET_REPO_INFO":
    return state.set("badgeRepoInfo", action.data);
  case "SET_USERNAME":
    return state.set("username", action.data);
  case "SET_TEMP_USERNAME":
    return state.set("tempUsername", action.data);
  default:
    return state;
  }
}

