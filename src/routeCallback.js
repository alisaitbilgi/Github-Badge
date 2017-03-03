import {store} from "./index";
import {setResponse} from "./actions/setResponse";

export function routeCallback(nextState) {
  let username = nextState.params.username || "nzakas";
  let url = {
    repos: `https://api.github.com/users/${username}/repos`,
    users: `https://api.github.com/users/${username}`
  };
  store.dispatch(setResponse(url.repos, url.users));
}

