import {Request} from "ez-fetch-ajax";

export const setResponse = (repos, users) => {
  return (dispatch) => {
    let lastWeek = new Date();
    let values;
    lastWeek.setDate((lastWeek.getDate()) - 7);

    return Promise.all([Request.get(repos), Request.get(users)])
      .then(res => {
        if (Array.isArray(JSON.parse(res[0][1]))) {
          values = JSON.parse(res[0][1]).map(
            repo => Date.parse(repo.updated_at) > lastWeek.getTime() ? repo.size : 0
          );
        }
        // action's first parameter: Status, second parameter: Response Object of the server.
        dispatch(setReposInfo([res[0][0], JSON.parse(res[0][1])]));
        dispatch(setUsersInfo([res[1][0], JSON.parse(res[1][1])]));
        dispatch(setGraphInfo(values));
      })
      .catch(rej => {
        dispatch(setErrorMessage(rej));
      });
  };
};

function setUsersInfo(data) {
  return {
    type: "SET_USER_INFO",
    data
  };
}
function setErrorMessage(data) {
  return {
    type: "SET_ERROR_MESSAGE",
    data
  };
}
function setGraphInfo(data) {
  return {
    type: "SET_GRAPH_INFO",
    data
  };
}
function setReposInfo(data) {
  return {
    type: "SET_REPO_INFO",
    data
  };
}
