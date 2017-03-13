import debounce from "lodash.debounce";

export const setActiveUserName = debounce((data, dispatch) => {
  return dispatch({
    type: "SET_ACTIVE_USERNAME",
    data
  });
}, 500);

export const setUserName = (data) => {
  return (dispatch) => {
    setActiveUserName(data, dispatch);
    return dispatch({
      type: "SET_USERNAME",
      data
    });
  };
};
