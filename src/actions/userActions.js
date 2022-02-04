import { apiURL } from "./fetchConfig";

// Load Users
export const loadUsers = () => {
  return (dispatch) => {
    const configurationObject = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("cellMateJWT")}`,
      },
    };
    fetch(`${apiURL}/api/v1/users`, configurationObject)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch({ type: "LOAD_USERS", users: json });
      });
  };
};
