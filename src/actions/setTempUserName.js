
import debounce from "lodash.debounce";

function setUserName(input) {
  return {
    type: "SET_TEMP_USERNAME",
    data: input
  };
}

const debouncer = debounce((input, dispatch) => {
  dispatch(setUserName(input));
}, 500);

export const setTempUserName = (input) => {
  return (dispatch) => {
    debouncer(input, dispatch);
  };
};
