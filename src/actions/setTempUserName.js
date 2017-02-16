
import debounce from "lodash.debounce";

const debounced = debounce((input, dispatch) => {
  dispatch(setUserName(input));
}, 500);

function setUserName(input) {
  return {
    type: "SET_TEMP_USERNAME",
    data: input
  };
}

export const setTempUserName = (input) => {
  return (dispatch) => {
    debounced(input, dispatch);
  };
};
