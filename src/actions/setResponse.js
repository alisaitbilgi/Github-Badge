import {Request} from "genericxhr/Request";

export const setResponse = (username = "nzakas") => {

  return (dispatch) => {
    let url = {
      repos: `https://api.github.com/users/${username}/repos`,
      users: `https://api.github.com/users/${username}`
    };
    Promise.all([Request.get(url.repos), Request.get(url.users)])
      .then(res => {
        dispatch(setRepoInfo(JSON.parse(res[0])));
        dispatch(setUsersInfo(JSON.parse(res[1])));
      })
      .catch(rej => {
        dispatch(setUsersInfo(rej));
      });
  }
};

function setUsersInfo(data) {
  return {
    type: "SET_USER_INFO",
    data
  };
}


function setRepoInfo(data) {
  return {
    type: "SET_REPO_INFO",
    data
  };
}
