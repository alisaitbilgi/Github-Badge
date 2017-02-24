import {store} from "./index";
import {setResponse} from "./actions/setResponse";

export function routeCallback(nextState) {
  store.dispatch(setResponse(nextState.params.username));
}

