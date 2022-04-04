import renderErrors from "../helpers/renderErrors";

// Load Chunks
export const loadChunks = () => {
  return (dispatch) => {
    const configurationObject = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("cellMateJWT")}`,
      },
    };
    fetch(`${process.env.REACT_APP_API_URL}/api/v1/chunks`, configurationObject)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch({ type: "LOAD_CHUNKS", chunks: json });
      });
  };
};
