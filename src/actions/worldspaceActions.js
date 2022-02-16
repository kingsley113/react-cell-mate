// import { apiURL } from "./fetchConfig";

// Load Worldspaces
export const loadWorldspaces = () => {
  return (dispatch) => {
    const configurationObject = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("cellMateJWT")}`,
      },
    };
    fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/worldspaces`,
      configurationObject
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch({ type: "LOAD_WORLDSPACES", worldspaces: json });
      })
      .catch((response) => {
        console.log(response);
      });
  };
};
