import {Request} from "ez-fetch-ajax";

export const setResponse = (username = "nzakas") => {
  return (dispatch) => {
    let lastWeek = new Date();
    let values;
    lastWeek.setDate((lastWeek.getDate()) - 7);
    let url = {
      repos: `https://api.github.com/users/${username}/repos`,
      users: `https://api.github.com/users/${username}`
    };

    return Promise.all([Request.get(url.repos), Request.get(url.users)])
      .then(res => {
        if (Array.isArray(JSON.parse(res[0][1]))) {
          values = JSON.parse(res[0][1]).map(
            repo => Date.parse(repo.updated_at) > lastWeek.getTime() ? repo.size : 0
          );
        }
        dispatch(setReposInfo([res[0][0], JSON.parse(res[0][1])]));
        dispatch(setUsersInfo([res[1][0], JSON.parse(res[1][1])]));
        dispatch(setGraphInfo(values));
      })
      .catch(rej => {
        dispatch(setUsersInfo(rej));
        dispatch(setReposInfo(rej));
        dispatch(setGraphInfo([]));
      });
  };
};

function setUsersInfo(data) {
  return {
    type: "SET_USER_INFO",
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
