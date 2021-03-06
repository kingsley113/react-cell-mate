import renderErrors from "../helpers/renderErrors";
// import { apiURL } from "./fetchConfig";

// Create cell
export const createCell = (cellObject) => {
  return (dispatch) => {
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("cellMateJWT")}`,
      },
      body: JSON.stringify(cellObject),
    };
    fetch(`${process.env.REACT_APP_API_URL}/api/v1/cells`, configurationObject)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        if (json.errors) {
          renderErrors(json.errors);
        } else {
          dispatch({ type: "ADD_CELL", cell: json });
          dispatch({ type: "REDIRECT", url: `/cells/${json.slug}` });
        }
      })
      .catch((response) => {
        console.log(response);
      });
  };
};
// Load cells
export const loadCells = () => {
  return (dispatch) => {
    const configurationObject = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("cellMateJWT")}`,
      },
    };
    fetch(`${process.env.REACT_APP_API_URL}/api/v1/cells`, configurationObject)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch({ type: "LOAD_CELLS", cells: json });
      });
  };
};

// Load cell
export const loadCell = (id) => {
  return (dispatch) => {
    const configurationObject = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("cellMateJWT")}`,
      },
    };
    fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/cells/${id}`,
      configurationObject
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch({ type: "LOAD_CELL", cell: json });
      });
  };
};

// edit cell
export const editCell = (cellObject) => {
  return (dispatch) => {
    const configurationObject = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("cellMateJWT")}`,
      },
      body: JSON.stringify(cellObject),
    };
    fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/cells/${cellObject.id}`,
      configurationObject
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        if (json.errors) {
          renderErrors(json.errors);
        } else {
          dispatch({ type: "EDIT_CELL", cell: json });
          dispatch({ type: "REDIRECT", url: `/cells/${json.slug}` });
        }
      })
      .catch((response) => {
        console.log(response);
      });
  };
};
// delete cell
// export const deleteCell = (cellObject) => {
//   return (dispatch) => {
//     const configurationObject = {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         Authorization: `Bearer ${localStorage.getItem("cellMateJWT")}`,
//       },
//       body: JSON.stringify(cellObject),
//     };
//     fetch(`${process.env.REACT_APP_API_URL}/api/v1/cells/${cellObject.id}`, configurationObject)
//       .then((response) => {
//         return response.json();
//       })
//       .then((json) => {
//         dispatch({ type: "DELETE_CELL", cell: cellObject });
//       })
//       .catch((response) => {
//         console.log(response);
//       });
//   };
// };

// set active cell

// reset active cell
