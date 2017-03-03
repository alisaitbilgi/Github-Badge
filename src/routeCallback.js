import {store} from "./index";
import {setResponse} from "./actions/setResponse";

export function routeCallback(nextState) {
  const username = nextState.params.username || "nzakas";
  const url = {
    repos: `https://api.github.com/users/${username}/repos`,
    users: `https://api.github.com/users/${username}`
  };
  store.dispatch(setResponse(url.repos, url.users));
}
