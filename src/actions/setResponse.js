import {Request} from "ez-fetch-ajax";

export const setResponse = (repos, users) => {
  return (dispatch) => {
    return Promise.all([Request.get(repos), Request.get(users)])
      .then(res => {
        let lastWeek = new Date();
        let values;
        lastWeek.setDate((lastWeek.getDate()) - 7);
        const repoResult = JSON.parse(res[0][1]);
        const userResult = JSON.parse(res[1][1]);
        const repoStatus = res[0][0];
        const userStatus = res[1][0];

        if (Array.isArray(repoResult)) {
          values = repoResult.map(
            repo => Date.parse(repo.updated_at) > lastWeek.getTime() ? repo.size : 0
          );
        }
        dispatch(setReposInfo([repoStatus, repoResult]));
        dispatch(setUsersInfo([userStatus, userResult]));
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
