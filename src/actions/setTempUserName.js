
import debounce from "es6-promise-debounce";

function setUserName(data) {
  return {
    type: "SET_TEMP_USERNAME",
    data
  };
}

const debounced = debounce((input, dispatch) => {
  return Promise.resolve(dispatch(setUserName(input)));
}, 500);

export const setTempUserName = (input) => {
  return (dispatch) => {
    return debounced(input, dispatch);
  };
};
