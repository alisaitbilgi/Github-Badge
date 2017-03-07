

export const setUserName = (data) => {
  return (dispatch) => {
    return dispatch({
      type: "SET_USERNAME",
      data
    });
  };
};
