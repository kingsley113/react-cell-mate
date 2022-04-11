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

export const editChunk = (chunk) => {
  return (dispatch) => {
    const configurationObject = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("cellMateJWT")}`,
      },
      body: JSON.stringify(chunk),
    };
    fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/chunks/${chunk.id}`,
      configurationObject
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        if (json.errors) {
          renderErrors(json.errors);
        } else {
          dispatch({ type: "EDIT_CHUNK", chunk: json });
          dispatch({ type: "REDIRECT", url: `/chunks/${json.slug}` });
        }
      })
      .catch((response) => {
        console.log(response);
      });
  };
};
