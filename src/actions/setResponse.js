
import {Request} from "genericxhr/Request";


export const setResponse = (username = "nzakas") => {

  return (dispatch) => {
    let url = {
      repos: `https://api.github.com/users/${username}/repos`,
      users: `https://api.github.com/users/${username}`
    };
    Promise.all([Request.get(url.repos), Request.get(url.users)])
      .then(res => {
        dispatch(set(res));
      })
      .catch(rej => {
        dispatch(set(rej));
      });
  }
};

function set(data) {
  return {
    type: "SET_RESPONSE_OBJECT",
    data
  };
}
