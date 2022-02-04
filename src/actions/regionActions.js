import { apiURL } from "./fetchConfig";

// Load Regions
export const loadRegions = () => {
  return (dispatch) => {
    const configurationObject = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("cellMateJWT")}`,
      },
    };
    fetch(`${apiURL}/api/v1/regions`, configurationObject)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch({ type: "LOAD_REGIONS", regions: json });
      });
  };
};
