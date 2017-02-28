import {Request} from "ez-fetch-ajax";

export const setResponse = (username = "nzakas") => {
  return (dispatch) => {
    let url = {
      repos: `https://api.github.com/users/${username}/repos`,
      users: `https://api.github.com/users/${username}`
    };
    return Promise.all([Request.get(url.repos), Request.get(url.users)])
      .then(res => {
        dispatch(setReposInfo(JSON.parse(res[0])));
        dispatch(setUsersInfo(JSON.parse(res[1])));
      })
      .catch(rej => {
        dispatch(setUsersInfo(rej));
        dispatch(setReposInfo(rej));
      });
  };
};

function setUsersInfo(data) {
  return {
    type: "SET_USER_INFO",
    data
  };
}


function setReposInfo(data) {
  return {
    type: "SET_REPO_INFO",
    data
  };
}
