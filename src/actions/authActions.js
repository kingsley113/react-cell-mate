import { apiURL } from "./fetchConfig";

export const authenticateDiscord = () => {
  return (dispatch) => {
    const configurationObject = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("cellMateJWT")}`,
      },
    };
    fetch(`${apiURL}/api/v1/authenticate`, configurationObject)
      .then((response) => response.json())
      .then((data) => {
        if (data.jwt && data.user) {
          localStorage.setItem("cellmate_jwt", data.jwt);
          localStorage.setItem(
            "cellmate_current_user",
            JSON.stringify(data.user)
          );
          dispatch({ type: "SET_USER", user: data.user });
        }
      })
      .catch((error) => console.log(error));
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem("cellMateJWT");
    localStorage.removeItem("cellMateCurrentUser");
    dispatch({ type: "LOGOUT" });
  };
};
