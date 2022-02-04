export const resetRedirect = () => {
  return (dispatch) => {
    dispatch({ type: "REDIRECT_RESET" });
  };
};

export const setRedirectUrl = (url) => {
  return (dispatch) => {
    dispatch({ type: "REDIRECT", action: url });
  };
};
