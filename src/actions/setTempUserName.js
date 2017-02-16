
import debounce from "lodash.debounce";

const x = (input, dispatch) => {
  dispatch(setUserName(input));
};

const debounced = debounce(x, 1000);

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
