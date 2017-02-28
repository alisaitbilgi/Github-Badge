
import debounce from "es6-promise-debounce";

function setUserName(input) {
  return {
    type: "SET_TEMP_USERNAME",
    data: input
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
